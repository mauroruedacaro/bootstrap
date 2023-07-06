function sum (a,b) {
    return a+b;
}
function sub (a,b) {
    return a-b;
}
function mul (a,b) {
    return a*b;
}
function div(a,b) {
    if (b=== 0) {
        console.log ('no se puede dividir or cero')
    }
    else {
        return a/b;
    }
}

exports.sum = sum;
exports.sub = sub;
exports.mul = mul;
exports.div = div;
