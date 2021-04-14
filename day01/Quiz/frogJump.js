function frogJump(x,y,k){
    let range = y - x;
    let step = range / k;
    let sisaStep = range % k;
    if (sisaStep !== 0) {
        step = Math.ceil(step);
    }
    return step;
}

console.log(frogJump(10,85,30));