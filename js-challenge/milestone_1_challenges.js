
  // challenge 1: Return sum of two numbers
  function addition(a, b){
    let sum = a + b;
  return sum;
  }

  addition(5, 4)

  // challenge 2:
  function convert(minutes){
    return minutes* 60;
  }
  console.log(convert(2));
  

  // challenge:3
  function findPerimeter(length, width){
  let perimeter = 0;
  perimeter= 2*length +2*width;
  return perimeter;
  }
  console.log(findPerimeter(2,3))

  //  challenge:4
  function isNegative(a){
  if (a < 1) {
    return true;
  } else {
    return false;
  }

  }
  console.log(isNegative(2))

  // challenge 5:
  function canDrive(name, age){
    if(age >= 18){
      console.log(`${name} is old enough to drive`)
      
    }
    else{
      console.log(`${name} is not old enough to drive yet`)
    }
  }
  canDrive("jane",22)
  canDrive("Bob",22)

  // challenge 6:
  function findLargest(a, b, c){
  if(a >= b && a >= c) {
      console.log(a)
  }
  else if (b >= a && b >= c) {
    console.log(b)
  }
  else if(c >= a && c >= b) {
      console.log(c)
  }
  else{
    console.log(none)
  }

  }
  findLargest(10, 5, 9)

  // challenge 7: BMI calculator
  function calculateBMI(weight, height){
  
    let BMI = weight / (height * height)
  
    if(BMI<=18.5){
      console.log(`Your BMI is ${BMI = weight / (height * height)} -Underweight`)
    } else if(BMI<=24.9){
      console.log(`Your BMI is ${BMI = weight / (height * height)} -Normal weight`)

    }else if(BMI<=29.9){
      console.log(`Your BMI is ${BMI = weight / (height * height)} -Overweight`)
    }else if(BMI>30){
      console.log(`obese`)
    }
  }
  calculateBMI(85, 1.8)

  // challenge 8:greeting based on time
  function greetUser(name, hour){
    
    if(hour>=5 && hour<=11){
        console.log(`good morning, ${name}`)
    }else if(hour>=12 && hour<= 17){
  console.log(`good afternoon, ${name}`)
    }else if(hour>=18 && hour<=21){
      console.log(`good evening, ${name}`)
    }else if(hour>=22 && hour<=4){
  console.log(`goodnight, ${name}`)
    }
  }
  greetUser(Asma, 5)

  // challenge 9: fizzBuzz
  function fizzBuzzCheck(number){
    if(number% 3===0 && number% 5===0) {
      console.log(`fizzBuzz`)
    }else if(number% 5 === 0){
      console.log(`Buzz`)
    }else if(number% 3 === 0){
      console.log(`fizz`)
    }
    else{
      console.log(`number`)
    }
  }
  fizzBuzzCheck(5)

  // challenge 10: perimeter 2
  function perimeter(l, num) {
    if (l === "s") {
      console.log(4 * num) 
    } else if (l === "c") {
      console.log(6.28 * num)
    } 
    
  }
  perimeter("s", 2)

  // challenge 11:
  function isEven(n){
    return n % 2 == 0;
  }
  function findSum(no){
    let sum = 0;
    let i=0;

    while (i<=no){
      if(isEven(i)){
        sum +=i;
      }
      i++;
    }
    return sum;
  }

  console.log(findSum(6));

  // challenge 12:

  
  function powerUp(n, p) {
      if (p == 1) return n;
      return n * powerUp(n, p - 1);
  }

  console.log(powerUp(2, 3));

  // challenge 13:factorial
  function factorial(n) {
    if (n > 1) {
      return n * factorial(n-1);
    } else {
      return 1;
    }
  }
  console.log(factorial(4));

  // challenge 14: Multiple Sum
  function sumMultiples(n, divisor) {
      let sum = 0;
      for (let i = 1; i <= n; i++) {
          if (i % divisor === 0) {
              sum += i;
            
          }
      }
    console.log(sum)
  }
  sumMultiples(10, 2);

  // challenge 15;
    let sumDigits = function(num){
    let sum = 0;
    for (let i = 0; num > 0; i++){
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    console.log(sum)
  }
  sumDigits(123);













