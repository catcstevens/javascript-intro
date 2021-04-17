// function loopOverObject(object){
//     for (let key in object) {
//         console.log( `Key: ${key}; Value: ${object[key]}`)
//     }
// }

// loopOverObject({foo: 'bar', ding: 'dong'})

function staircase(n) {
    
      
        for (let i = 1; i <= n; i++) {
            console.log((' '.repeat(n-i)) + ('#'.repeat(i)))
           
        }
    
      
}

staircase(6)