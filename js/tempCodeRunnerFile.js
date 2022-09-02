const arr = [32, [42, [2], [24]], [[38], 8], [3, [4]]];

const stack = (...spread) => {
    const result = [];

    while (spread.length) {
        const el = spread.shift();
        if(Array.isArray(el)) {
            result += el.unshift();
            continue;
        }

        return result;
    }
}

console.log(stack(arr));