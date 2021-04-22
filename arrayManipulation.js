//n - number of elements in array array[n]
//queries - 2d array queries[i][3] first element, last element, int to add
//a, b, k

function arrayManipulation(n, queries) {
    let array = Array(n).fill(0)
    console.log(array)
   
        for (let i = 0, j=0; i <= queries.length-1; i ++){
            
        
           while (array.indexOf() >= array[queries[i][0]] && array.indexOf() <= array[queries[i][1]]) {
             array.indexOf() += queries[i][2]
             console.log(array)
           } 
       
            //  >= queries.indexAt[i][0] && array.indexAt[j] <= queries.indexAt[i][1]) {
            // console.log('wooh!') 
            // j++
        // }
    }   
    //  return Math.max(array)
}
arrayManipulation(10, [[1, 7, 3], [3, 8, 3], [4, 8, 10]])
    
