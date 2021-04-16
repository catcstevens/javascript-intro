

function diagonalDifference(arr) {

    let totalA = 0
    let totalB = 0
    let x = arr.length -1
        while (x >= 0) {
            for (let i = 0; i < arr.length ; i++) {
                totalA += arr[i][i]
            totalB += arr[x][i]
            x--
        }     
    } 
    
    return Math.abs(totalA - totalB)
}

diagonalDifference([[11, 2, 4],[4, 5, 6],[10, 8, -12]])