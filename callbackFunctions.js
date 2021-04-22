// a callback function is a function that is passed into another function and then invoked within that function

// function add(a,b) {
//     console.log("a+b =", a+b);
//     return a+b;
// }

// function subtract(a,b) {
//     console.log("a-b =", a-b);
//     return a-b;
// }

// function calculate(callback, a, b) {
//     callback(a,b);

// }
// calculate(add, 5,3)
// calculate(subtract, 9, 3)

function sumIntervals(intervals){
    //sort array by first index of each sub-array
      let x = intervals.sort((a,b) => a[1] - b[1]);
   
        console.log(x) 

  //loop through the sorted array with 2 variables i and j
    for (let i = 0, j = 1; j < x.length-1; j++) {
        console.log(`I am i ${i} ${x[i][1]}`)
        console.log(` I am j ${j} ${x[j][0]}`)
        //if the second number in first array is higher than the first number in next array and the second number in the first array is less than the second number in the next array
        if ( x[i][1] > x[j][0] ) {
        //first array second number becomes next array second number
            x[i][1] = x[j][1]
        //and the next array is deleted
            x.splice(j,1)
        }
            // else {
            //     i++
            // }
           
            //if second number first array is greater than next array second number
            // if (x[i][1] > x[j][0] && x[i][1] < x[j][1]) {
            //     x[i][1] = x[j][1]
            // x.splice(j,1)
            // }
        
        console.log(x)
            } let y = []
            for (let property of x) {
                 y.push(property[1] - property[0])
                 
              } let difference = y[0] + y[1]
              console.log(difference)
      
    }     

sumIntervals( [
    [1,5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
 ] )
//  sumIntervals([[1,4],[7, 10],[3, 5]])
//  function sumIntervals(intervals){
//     //sort array by first index of each sub-array
//       const x = intervals.sort(function(a,b){
//         return a[1] > b[1] ? 1 : -1});
//         console.log(x) 
//   //loop through the sorted array with 2 variables i and j
//     for (let i = 0, j = 1; j < x.length; j++) {
//         console.log(`I am i ${i} ${intervals[i][1]}`)
//         console.log(` I am j ${j} ${intervals[j][0]}`)
//         //if the second number in first array is higher than the first number in next array and the second number in the first array is less than the second number in the next array
//         if(x[i][1] > x[j][0] && x[i][1] < x[j][1]) {
//         //first array second number becomes next array second number
//             x[i][1] = x[j][1]
//         //and the next array is deleted
//             x.splice(j,1)
//             console.log(x)
//             if (x[i][1] > x[j][0] && x[i][1] < x[j][1]) {
//                 x[i][1] = x[j][1]
//             x.splice(j,1)
//             console.log(x)
//             } 
//         }
//     }     
// }