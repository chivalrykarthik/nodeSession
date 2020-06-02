module.exports = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return "Invalid input";
    }
    return a + b;
}