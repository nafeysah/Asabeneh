//question1
let userAge = prompt("Enter your age");
if (userAge>=18) {
    alert('you are old enough to drive');
}else {
    let ageLeft = 18-Number(userAge);
alert(`you are left with ${ageLeft} years to drive`)
}
//question2
let myAge=30
let yourAge=prompt('enter your age')
if(myAge>yourAge){
    alert('i am older than you')
}else {
    let old = Number (yourAge)-30
    alert(`you are older by ${old} years`)
}
//question3
let a = 4
let b = 6
if (a>b){
    console.log('a is greater than b')
}else
    {
        console.log('a is lesser than b')
    }

//question4
const number =prompt("what number do you wish to know if its even or odd?")
if(+number%2===0){
    alert("number is an even number")
}else{
    alert('number is an odd number')
}
//Exercise 2
//QUESTION1
let num= 49
if(num>=80){
    console.log('A')
}else if (num>=70){
    console.log('B');
}else if (num>=60){
    console.log('C')
}else if (num>=50){
    console.log('D');
}else if (num<=49){
    console.log('F');
}
QUESTION2
let months = prompt('enter month')
let monthh = months.toLowerCase()
switch (month) {
    case 'december':
        console.log('it is winter')
        break;
        case 'january':
            console.log('it is winter')
            break;
            case 'february':
    console.log('it is winter')
    break;
  case 'september':
      console.log('it is autumn')
      break;
      case 'october':
    console.log('it is autumn')
    break;
    case 'november':
    console.log('it is autumn')
    break;
  case 'march':
    console.log('it is spring')
    break;
    case 'april':
    console.log('it is spring')
    break;
    case 'may':
    console.log('it is spring')
    break;
  case 'june':
    console.log('it is summer')
    break;
    case 'july':
    console.log('it is summer')
    break;
    case 'august':
    console.log('it is summer')
}
question3
let day = prompt('what day is it today')
let days= day.toLowerCase()
switch(day){
case 'saturday':
    console.log('saturday is a weekend');
    break;
case 'sunday':
    console.log('sunday is a weekend');
    break;
case 'monday':
        console.log('saturday is a weekday');
        break;
case 'tuesday':
        console.log('sunday is a weekday');
        break;
case 'wednesday':
    console.log('sunday is a weekday');
    break;
case 'thursday':
        console.log('saturday is a weekday');
        break;
case 'friday':
        console.log('sunday is a weekday');
}
//exercise 3
let month = prompt("Enter a month: ");
month = month[0].toUpperCase() + month.slice(1).toLowerCase();
switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log(`${month} has 31 days.`);
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    console.log(`${month} has 30 days.`);
    break;
  case "February":
      console.log(`${month} has 28 days`);
      break;
    
  default:
    alert("Please enter a valid month name!");
    break;
}