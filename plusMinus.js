function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zero = 0

    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] > 0) {
            positive ++
        } else if (arr[i] < 0 ) {
            negative ++
        } else {
            zero ++
        }
    }
       console.log(positive = ((positive/arr.length).toFixed(6)))
       console.log(negative = ((negative/arr.length).toFixed(6)))
       console.log(zero = ((zero/arr.length).toFixed(6)))

}

plusMinus([-4, 3, -9, 0, 4, 1])