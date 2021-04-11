// function loopOverArray(array){
//     let counts = {};
//     for (let key of array) {
//         counts[key] = counts[key] ? counts[key] + 1 : 1;
//         console.log(counts)
//     }
// }

// loopOverArray([1,2,1,3,1,4,2,1,5,3,1])

// 

function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    
    for(var i = 0; i < s.length; i++) {
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       }
       else {
           consonants += s[i] + '\n';
       }
    }
    
    console.log(consonants.trim());
}
   //you can loop over a string like it is an array!
    vowelsAndConsonants('javascriptloops')