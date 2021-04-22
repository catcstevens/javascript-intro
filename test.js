// function sumIntervals(intervals){
// let unique = (intervals.flat().sort(function(a, b){return a-b}));
// let array = []
// // let unique = sorted.filter((value, index) => sorted.indexOf(value) === index)
// console.log(unique)
//     let m = 0
//     for (let i = 0, j = 1; i < unique.length-1; i++, j++) {
//         if (unique[i]+1 != unique[j]) {
//            array.push(unique[j] - unique[i])
//            console.log (array)
      
//         }
         
//     } console.log(array.reduce((a, b) => a + b, 0))
// }

function sumIntervals(intervals) {
    let list = [];
    intervals.forEach(([a, b]) => {
      list.length = Math.max(list.length, b);
      // console.log(list.length)
      for (let i = a; i < b; i++) {
        list[i] = 1;
      }
    });
    console.log( list.reduce((a, b) => a + b, 0));
  }
sumIntervals( [
    [1,5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
 ] )
//  sumIntervals([[1,4],[7, 10],[3, 5]])