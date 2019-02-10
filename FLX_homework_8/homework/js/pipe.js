function pipe() {
    let arg = Array.prototype.shift.call(arguments);
    while (arguments.length > 0) {
        arg = (Array.prototype.shift.call(arguments))(arg);
    }
    return arg;
}

function addOne(n) {
    return n + 1;
}
pipe(1, addOne, addOne, addOne, addOne);
