//question1
const array= Array()
//question2
console.log(array);
const names= ['bolanle','nafisat','joy','may','june','tobi','bakare']
//question3
console.log(names.length);
//question4
let firstName=names[0]
console.log(firstName);
let middleName= names[3]
console.log(middleName);
let lastIndex= names.length-1
lastName= names[lastIndex]
console.log(lastName);
//question5
let mixedData= ['bolanle','nafisat','kemi',1,2,3,4]
console.log(mixedData.length);
//question6'
const itCompanies  =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//question7
console.log(itCompanies);
//question8
console.log(itCompanies.length);
//question9
let firstComp = itCompanies[0]
console.log(firstComp);
let middleComp = itCompanies[3]
console.log(middleComp);
let lastComp= itCompanies.length-1
let lastCompany= itCompanies[lastComp]
console.log(lastCompany);
//question10
let a =itCompanies[0]
let b = itCompanies[1]
let c =itCompanies[2]
let d =itCompanies[3]
let e =itCompanies[4]
let f =itCompanies[5]
let g =itCompanies[6]
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
//question11
let h= 'facebook'
console.log(h.toUpperCase());
let i ='google'
console.log(i.toUpperCase());
let j ='microsoft'
console.log(j.toUpperCase());
let k ='apple'
console.log(k.toUpperCase());
let l = 'ibm'
console.log(l.toUpperCase());
let m = 'oracle'
console.log(m.toUpperCase());
let n  ='amazon'
console.log(n.toUpperCase());
//question12
let tense = ['Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.']
console.log(tense);
//question13
console.log(itCompanies.includes('bigi'));
console.log(itCompanies.includes('nestle'));
//question14
//question15
console.log(itCompanies.sort());
//question16
console.log(itCompanies.reverse());
//question17
console.log(itCompanies.slice(0,3));
//question18
console.log(itCompanies.slice(4,7));
//question19
console.log(itCompanies.slice(3,4));
//question20
itCompanies.shift()
console.log(itCompanies);
//question21
itCompanies.splice(2,1)
console.log(itCompanies);
//question22
itCompanies.splice(4)
console.log(itCompanies);
//question23
itCompanies.splice(0,5)
console.log(itCompanies);

//exercise level2
//question1
const myArr = []
export { myArr }
import { myArr } from './countries.js'
const Array=[]
export {Array}
import{Array} from './web_techs.js'
question2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const textArray = text.split(' ')
console.log(textArray);
console.log(textArray.length);
//question3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('meat')
console.log(shoppingCart);
shoppingCart.push('sugar');
console.log(shoppingCart);
shoppingCart.splice(4,1);
console.log(shoppingCart);
//question6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
fullStack= frontEnd.concat(backEnd)
console.log(fullStack)
//exercise3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages);
ages.min=ages[0]
console.log(ages.min);
ages.max=ages[ages.length-1]
console.log(ages.max);
console.log(ages.length);
//find the median age
const median =Math.floor(ages.length/2)
console.log(median);
console.log(ages[5]);
//average age
