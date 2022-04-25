import 'dotenv/config';
import md5 from 'md5';
import moment from 'moment';
import fetch from 'node-fetch';
import { createRequire } from 'module';
import fs from 'fs';

const require = createRequire(import.meta.url);
let config = require('./config.json');
const baseUrl = 'https://api.realmroyale.com/realmapi.svc/';
const wicky = 1802569;
let lastMatchId = 0;

const request = async (url) => {
    const res = await fetch(url);
    return await res.json();
}

const generateSignature = (method) => {
    return md5(`${process.env.DEV_ID}${method}${process.env.AUTH_KEY}${generateTimestamp()}`)
}

const generateTimestamp = () => moment.utc().format('YYYYMMDDHHmmss');

const generateSession = async () => {
    const signature = generateSignature('createsession');
    const timestamp = generateTimestamp();
    let res = await request(`${baseUrl}createsessionjson/${process.env.DEV_ID}/${signature}/${timestamp}`);
    if (res.ret_msg === "Approved") {
        return res.session_id;
    }
}

const ping = async () => await request(`${baseUrl}pingjson`);

const testSession = async (sessionId) => {
    const signature = generateSignature('testsession');
    const timestamp = generateTimestamp();
    let res = await request(`${baseUrl}testsessionjson/${process.env.DEV_ID}/${signature}/${sessionId}/${timestamp}`);
    return res;
}

const getPlayerMatchHistory = async (playerId) => {
    const signature = generateSignature('getplayermatchhistory');
    const timestamp = generateTimestamp();
    return await request(`${baseUrl}getplayermatchhistoryjson/${process.env.DEV_ID}/${signature}/${config.session}/${timestamp}/${playerId}`);
}

const getMatchDetails = async (matchId) => {
    const signature = generateSignature('getmatchdetails');
    const timestamp = generateTimestamp();
    return await request(`${baseUrl}getmatchdetailsjson/${process.env.DEV_ID}/${signature}/${config.session}/${timestamp}/${matchId}`);
}

const updateSession = async () => {
    let testResult = await testSession(config.session);

    if (testResult.includes('Invalid')) {
        config.session = await generateSession();
        fs.writeFile('./config.json', JSON.stringify(config), () => { });
    }
}

const updateRecentMatch = async (client, channel) => {
    const matchHistory = await getPlayerMatchHistory(wicky);

    const mostRecentMatch = matchHistory.matches[0];

    if (lastMatchId === 0) return lastMatchId = mostRecentMatch.match_id;

    if (lastMatchId >= mostRecentMatch.match_id) return;
    lastMatchId = mostRecentMatch.match_id;

    const matchDetails = await getMatchDetails(mostRecentMatch.match_id);

    let realPlayers = matchDetails.teams.reduce((humans, currentTeam) => humans + currentTeam.players.length, 0)
    client.say(channel, `Match Results: ${realPlayers} Human players, Placement: ${mostRecentMatch.placement},  Kills: ${mostRecentMatch.kills}, Damage: ${mostRecentMatch.damage} (https://realmtracker.com/match/pc/${lastMatchId})`);
}

export default async (client, channel) => {
    await updateSession();
    updateRecentMatch(client, channel);
    setInterval(updateRecentMatch, 1000 * 60 * 1, client, channel);
}