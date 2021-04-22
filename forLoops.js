// function loopPractice() {
//     for(let i=0; i < 10; i++) {
//         console.log("Hello World")
//     }
// }

// function loopWithCount(number) {
//     for(let i=0; i < number; i++) {
//         console.log("Hello World")
//     }
// }

// function loopWithString(number) {
//     let string = ""
//     for(i=0; i <= number; i++) {
//         string += i
//     }
//     // Your code here

//     console.log(string)
// }

// // loopPractice();
// // loopWithCount(10);
// loopWithString(10)

function loopOverArray(array){
    let counts = {};
    for (let element of array) { 
        counts[element] = counts[element] ? counts[element] + 1 : 1; 
    } console.log(counts)
}

function loopOverArray(directions){
    let obj = {}
    for (let direction of directions){
        if(!obj[direction]){
            obj[direction] = 1
        } else {
            obj[direction]++
        }
    }
    return obj;
}

loopOverArray(["n", "s", "e", "e"])

// let users = [
//     {
//         username: "John",
//         password: "password123",
//         role: "public"
//     }, {
//         username: "xXxSn1p3rK1lLaxXx",
//         password: "newbDestroyer",
//         role: "public"
//     }, {
//         username: "admin",
//         password: "admin",
//         role: "admin"
//     }
// ]
// function findUser(users, usr, pwd) {
//     for (let user of users){
//         if (user["username"] == usr && user["password"] == pwd){
//             console.log(user)
//     }

// }
// return false
// }

// findUser(users, "xXxSnip3rK1lLaxXx", "newbDestroyer")