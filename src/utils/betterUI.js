const betterUI = {
    text: (string) => {
        if (string) {
            return `${string[0].toUpperCase()}${string.slice(1)}`;
        } else {
            return string;
        }
    },
    number: (num, lengthAD) => {
        return +num.toFixed(lengthAD);
    }
}

export default betterUI;