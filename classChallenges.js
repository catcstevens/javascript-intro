// challenge - mario
// simple version - half pyramid
// #
// ##
// ###
// ####
// advanced version - full pyramid
//    ##
//   ####
//  ######
// ########
// mario(4) => 
function mario(numberOfRows) {
    for (let i = 0; i <= numberOfRows.length - 1; i++) {
        console.log(numberOfRows[i]);
    }
  }

  mario(['   #', '  ###', ' ##### ', '#######'])

  // try this with a single number rather than passing in an array.
  // use a while loop

