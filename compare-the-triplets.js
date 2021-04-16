// given two arrays a and b
// a = [0,0,0]
// b = [0,0,0]
// a[0] > b[0] => c[0] += 1

function compareTriplets(a, b) {
    let c = [0,0]
    for (let i = 0; i < a.length; i ++) {
        if (a[i] > b[i]) {
            c[0] ++
        } else if (a[i] < b[i]) {
            c[1] ++
        } else {
            
        }
    } console.log(c)

}

// compareTriplets([5,6,7], [3,6,10])

function aVeryBigSum(ar) {
    
    let total=0;
    for(let i in ar) { total += ar[i]; }
    console.log(total)
    }

    aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])