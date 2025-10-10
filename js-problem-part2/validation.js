function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !=='number') {
        return 'please provide a number';
    }
    const mult = a * b;
    return mult;

}

const result = multiply(9, 'hd');
console.log(result);
