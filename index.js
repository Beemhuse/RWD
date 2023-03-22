
export  function testUnit (array){
//  function testUnit (array){
    return array.filter ((x) => x % 2 === 0 )
}
export  function AgeTest (number){
    if (number <= 12){
        return 0
    }
    else if (number >12 && number <=28){
        return 1
    }
    else{
        return 2
    }
}


// module.exports = (testUnit)