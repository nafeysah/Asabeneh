//level1//
let firstName = 'bolanle'
let lastName ='bolarinwa'
let country = 'Nigeria'
let city = 'ibadan'
let age = 23
let  isMarried = true
let year = 2024
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));
console.log(typeof('10'))
console.log(parseInt(9.8));
let place= 'molete'
let books = 12
let lighton= true 
console.log(place);
console.log(books);
console.log(lighton);
let name = null 
let school
let salary = 0
console.log(name);
console.log(school);
console.log(salary);
console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!='4')
console.log(4=='4');
console.log(4==='4');
console.log('python'.length!='jargon'.length);
let check= 4>3 && 10<12
console.log(check)
let a = 4>3&& 10>12
let b= 4>3 ||10<12
let c = 4>3 || 10>12
console.log(a);
console.log(b);
console.log(c);
console.log(!4>3);
console.log(!4<3);
console.log(!false);
console.log(!(4>3&& 10<12));
console.log(!(4>3 && 10>12));
console.log(!(4==='4'));
const now = new Date()
console.log(now)
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMonth());
console.log(now.getMinutes());
console.log(now.getDay());
console.log(now.getTime());

//level2//
const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
const areaValue = (baseValue * heightValue)*0.5;

// 
console.log(areaValue);