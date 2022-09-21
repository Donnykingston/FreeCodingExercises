
// sum array function

function sumArray(params){
    totalNumber = 0
    for( let param of params){
        totalNumber += param
    }
    return totalNumber
}
sumArray([1,2,3])


// capitalize the first letter of a string
function capitalize(string){
    if (string !== ''){
        let upperCasedLetter = string[0].toUpperCase();
        let restOfTheString = string.slice(1, string.length);
        return upperCasedLetter + restOfTheString
    }
}
capitalize('donny');
