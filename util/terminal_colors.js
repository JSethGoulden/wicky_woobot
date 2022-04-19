const log = (color, message) => {
    const colors = {
        default: "\u001b[0m",
        red: "\u001b[31m",
        cyan: "\u001b[36m",
        lightGray: "\u001b[37m",
        darkGray: "\u001b[90m",
        white: "\u001b[97m",
    };

    if (!colors[color]) color = 'default';

    console.log(`${colors[color]}${message}${colors.default}`);
}

export default log;