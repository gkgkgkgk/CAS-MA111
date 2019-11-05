const midpointSum = (n, f, a, b) => {
    let dx = ((b - a) / n);
    let x = 0;
    for (let i = a; i < b; i += dx) {
        x += f(i + (dx / 2));
    }
    return { sum: x, rSum: dx * x, avg: x / n };
}

const newtonFindZero = (f, df, x0, iterations = 5) => {
    let xn = x0;
    for (let i = 0; i < iterations; i++) {
        xn = (xn - (f(xn) / df(xn)));
    }
    return xn;
}

// testing
console.log(midpointSum(1000, x => {
    return x * Math.sin(1 / x);
}, Math.PI / 4, Math.PI));

let { avg } = midpointSum(1000, x => {
    return x * Math.sin(1 / x);
}, Math.PI / 4, Math.PI);

console.log(newtonFindZero(x => {
    return (x * Math.sin(1 / x)) - avg;
}, x => {
    return Math.cos(1 / x) * (-1 / x) + Math.sin(1 / x);
}, 1))