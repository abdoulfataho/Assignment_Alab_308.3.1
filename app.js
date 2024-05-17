
// loop throught all nimbeer from 1 to 100
for (let i = 1; i <= 100; i++){
// check if a number is divisible by 3 and 5 then log fizz buzz
if (i % 3 === 0 && i % 5 === 0){console.log(i, "fizz buzz")}
//check if a number is divisible by 3 and log fizz;
else if ( i % 3 === 0 ){ console.log(i,"fizz")}

// check if a number is divisible by 5 and log buzz 
else if (i % 5 === 0 ){ console.log(i, "buzz")}
else{ console.log(i)}
}
// if a number is not divisible by either 3 or 5, log the number
