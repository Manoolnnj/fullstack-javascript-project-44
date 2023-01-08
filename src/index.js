
export const randomInteger = (min, max) => {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}

export const gcdFinder = (a, b) => b === 0 ? Math.abs(a) : gcdFinder(b, a % b);




