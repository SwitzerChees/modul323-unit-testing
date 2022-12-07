const prefix = (prefix) => {
    return (text) => {
        return `${prefix}: ${text}`
    }
}

const prefix2 = (prefix) => {
    return (text) => {
        return `${prefix}: ${text}`
    }
}

module.exports = { prefix, prefix2 };

// const myPrefix = prefix('MyPrefix');

// console.log(myPrefix('Hello World'))
// console.log(myPrefix('Hello World 2'))