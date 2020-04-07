//Create array of objects

const data = [
    {principal: 2500, time: 1.8}, {principal: 1000, time:5},
    {principal: 3000, time:1}, {principal: 2000 , time:3}
];
console.log(data);

//Create a function

function interestCalculator (data) {
    if (principal >= 2500 && (time > 1 && time < 3) ) {
        console.log('rate = 3')
        return "rate = 3";
    }
    else if (principal >= 2500 && time >=3) {
        console.log('rate = 4')
        return "rate = 4";
    } else if (principal < 2500 || time <= 1) {
        console.log('rate = 2')
        return "rate = 2";
    } else {
        return "rate = 1";
    }
}

// Using loop to get each value and calculate interest

 for (const i of data) {
    //  console.log(i);

     let objectOne = (2500 * (3 * 1.8))/ 100
     console.log(objectOne);

     let objectTwo = (1000 * (1 * 5))/100
     console.log(objectTwo)

     let objectThree = (3000 * (3 * 1))/100
     console.log(objectThree);

     let objectFour = (2000 * (1 * 3))/100
     console.log(objectFour)
    

 }

 const interestData = [];

 interestData.push( (2500 * (3 * 1.8))/ 100 );

 interestData.push( (1000 * (1 * 5))/100 );

 interestData.push( (3000 * (3 * 1))/100 );

 interestData.push( (2000 * (1 * 3))/100 )
 console.log(interestData);

 

