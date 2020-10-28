// Code your solutions in this file
function writeCards(nameArray){
    let newArray = [];
    for(let i = 0; i < nameArray.length; i++){
        newArray.push(`Thank you, ${nameArray[i]}, for the wonderful surprise gift!`)
    }
    return newArray
}

function countDown(num){
    while(num >= 0){
        console.log(num--);
    }
}
