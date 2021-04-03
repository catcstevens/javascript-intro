function loopOverArray(array){
    let counts = {};
    for (let key of array) {
        counts[key] = counts[key] ? counts[key] + 1 : 1;
        console.log(counts)
    }
}

loopOverArray([1,2,1,3,1,4,2,1,5,3,1])