import fs from 'fs';
const commands = {};

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const commandFile of commandFiles) {
    const command = await import(`./commands/${commandFile}`);
    commands[command.default.name] = command.default;
    delete commands[command.default.name].name;
}

export default commands