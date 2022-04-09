const isAuthorized = (tags, auths) => {
    let authorized = true;
    auths.every(auth => {
        switch (auth) {
            case 'owner':
                authorized = tags.username === 'wicky_woo'
                break;
            case 'subscriber':
                authorized = tags.subscriber
                break;
        }
    })
    return authorized;
}

export default isAuthorized