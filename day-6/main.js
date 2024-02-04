//question1
for (let i = 0; i <=10;i++){
    console.log(i);
}
let n=0
while(n<=10){
    console.log(n);
    n++
}
let i=0
do{
    console.log(i);
    i++
}while (i<=10)


//question2
for(let i=10 ;i>=0;i--)
console.log(i);

let b=10
do{console.log(b);b--
}
while(b>=0)

let c=0
do{console.log(c); c--}
while (c>=0)

//question3
let f =5
for(let d=0; d<=f ; d++){
console.log(d);}

///question4
let line="";
for(i=0;i<=7;i++){
  line +="#"
  console.log(line);
}

//question5
for (let g=0; g<=10;g++){
    console.log(`${g}*${g}=${g*g}`);
  }
//question6
for (let h=0;h<=10;h++){
    console.log(`${h**1} ${h**2} ${h**3}`);
}
//question7
for(let k=0; k<=100;k+=2)
{console.log(k);}
//question8
for (m =0;m<=100;m++){
    if (m%2>0){console.log(m);}
}
//question9
for(let n =0; n<=100;n++){
    for(let p=2;p<n;p++){
        if (n%p===0 && n>1){
            console.log(n);
        }
    }
}
//question10
let sum=0
for (let q =0;q<=100; q++){
    sum+=q;
}
console.log(sum);
//question11
let odd =0
let even=0
for(let i= 0;i<=100;i++){
    if(i%2==0){
        even+=1;
    } else if(i%2>0){
        odd+=i}
}
console.log(`sum of all even is${even}, and the sum of odd is ${odd}`);
//question12
let sumEvenOdd =[0,0]
for(let i=0;i<=100;i++){
    if(i%2==0){
        sumEvenOdd[0] +=i;
    }else if(1%2>0){
        sumEvenOdd[1] +=i
    }
}console.log(sumEvenOdd);
//question13
let newArray =[]
for(let i=0;i<5;i++){
    newArray.push(Math.floor(Math.random()*10))
}console.log(newArray);
//question14
let newUnique=[]
for(let i=5;newUnique<1;){
    let random= Math.floor(Math.random()*10);
    if(newUnique.indexOf(random)===-1){
        newUnique.push(random)
    }
}console.log(newUnique);

//EXERCISE2
//question4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  console.log(countries);
  //question5
  let newCount=[]
  for(let i =0;i<countries.length;i++){
    newCount.push([countries[i], countries[i].slice(0,3)])
  }console.log(newCount);
  //question7
  let countWtL=[]
  let countWD=[]
  for(let i=0;i<countries.length;i++){
    if(countries[i].includes('land')){
        countWtL.push(countries[i]);
    }else{
        countWD.push(countries[i])
    }
  }
  //question8
  let countriesWithIa =[]
  let countwthoutIa=[]
  for(let g=0;i<countries.length;i++){
    if (countries[i].includes('ia')){
        countriesWithIa.push(countries[i])
    }else{
        countwthoutIa.push(countries[i])
    }
  }
  console.log(`countries with'ia'${countriesWithIa}`);
  console.log(`countries without 'ia'${countwthoutIa}`);
  //question9
  let countriesCharLength= []
  for (let i = 0; i < countries.length; i++) {
    countriesCharLength.push(countries[i].length);
}
console.log(countriesCharLength);
let highest;
highestNum = Math.max.apply(null, countriesCharLength);
console.log(countries[countriesCharLength.indexOf(highestNum)]);
//question10
let countriesWithFiveChars = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        countriesWithFiveChars.push(countries[i])
    }
}
console.log(countriesWithFiveChars)
//question11
let webTechs = ["html", "css", "javascript", "vue", "react", "mongodb", "angular"];
let webTechsLength = [];
for (let i = 0; i < webTechs.length; i++) {
    webTechsLength.push(webTechs[i].length);
}
console.log(webTechsLength);
let highestChar;
highestChar = Math.max.apply(null, webTechsLength);
console.log(highestChar)
console.log(webTechs[webTechsLength.indexOf(highestChar)]);
//question12
let newWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
    newWebTechs.push([webTechs[i], webTechs[i].length])
}
console.log(newWebTechs)
//question13
let mernStack = ["MongoDb", "Express", "React", "Node"]
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i].slice(0, 0);
}
console.log(mern)
//question14
let techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let i = 0; i < techs.length; i++) {
    console.log(techs[i])
}
for (let tech of techs) {
    console.log(tech);
}
//question15
let fruits = ['banana', 'orange', 'mango', 'lemon'];
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}