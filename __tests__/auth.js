import * as isAuthorized from './auth.js';

const fakeUsers = {
    owner: 'TODO',
    subscriber: 'TODO',
    nonSubscriber: 'TODO'
};

const fakeCommands = {
    ownerOnlyCommand: 'TODO',
    subscriberOnlyCommand: 'TODO',
    everyoneCommand: 'TODO'
}

test('it allows the owner to use owner-only commands', () => {
    expect(isAuthorized(fakeUsers.owner), fakeCommands.ownerOnlyCommand).toBe(true)
});

test('it allows the owner to use sub commands', () => {
    expect(isAuthorized(fakeUsers.owner), fakeCommands.subscriberOnlyCommand).toBe(true)
});

test('it rejects non-owners who use owner-only commands', () => {
    expect(isAuthorized(fakeUsers.subscriber), fakeCommands.ownerOnlyCommand).toBe(false)
    expect(isAuthorized(fakeUsers.nonSubscriber), fakeCommands.ownerOnlyCommand).toBe(false)
});

test('it allows subscribers to user sub commands', () => {
    // TODO - write a test in which a subscriber attempts to use
    // a sub command

});

test('it rejects non-subscribers who use sub commands', () => {
    // TODO - write a test in which a non-subscriber attempts to use
    // a sub command
});

test('it allows all forms of users to use commands which do not have any auth specified', () => {
    // TODO - write a test in which all 3 types of users (owner, sub, non-sub)
    // attempt to use a no-auth command
});