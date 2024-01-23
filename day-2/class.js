//level1
let Challenge = "30 Days of Javascript"
console.log(Challenge);
firstLetter=Challenge[0]
console.log(Challenge.length);
console.log(Challenge.toUpperCase());
console.log(Challenge.toLowerCase());
console.log(Challenge.substr(0,2));
console.log(Challenge.substr(3,21));
console.log(Challenge.includes("script"));
console.log(Challenge.split(' '));
let time = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(time.split(' '));
console.log(Challenge.replace('Javascript','Python'));
console.log(Challenge.charAt(15));
console.log(Challenge.charCodeAt(11));
console.log(Challenge.indexOf('a'));
console.log(Challenge.lastIndexOf('a'));
let pen ='You cannot end a sentence with because because because is a conjunction'
console.log(pen.indexOf('because'));
console.log(pen.lastIndexOf('because'));
console.log(pen.search('because'));
console.log(Challenge.trim());
console.log(Challenge.startsWith('30 Days of Javascript'));
console.log(Challenge.endsWith('30 Days of Javascript'));
console.log(Challenge.match('a'));
let biro='30 Days of'
console.log(biro.concat(' ','Javascript'));
console.log(Challenge.repeat(2));

//level2//
let quote = 'There is no exercise better for the heart than reaching down and lifting people up.'
console.log(quote);
let theresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(theresa);
console.log(typeof 10);
let num = '9.8'
num = '10'
let numFloat = parseFloat(num)
console.log(numFloat);
let men='python'
let women='jargon'
console.log(men.endsWith('on'));
console.log(women.endsWith('on'));
let randomNum = Math.random()        
let numBtnfiftyAndhundred = randomNum * 101
console.log(numBtnfiftyAndhundred)
let randomNumRoundToFloor = Math.floor(numBtnfiftyAndhundred)
console.log(randomNumRoundToFloor) 
let unilateral = Math.random(50)
let unilateralfifty = unilateral*101
console.log(unilateralfifty);
let unilateralfiftyoundtofloor = Math.floor(unilateralfifty)
console.log(unilateralfiftyoundtofloor);
let fan = Math.floor(Math.random()*(100-50+1))+50;
console.log(fan);
let randNum = Math.random()         
let numBtntwofiftysix = randNum * 256
console.log(numBtntwofiftysix)      
let randNumRoundToFloor = Math.floor(numBtntwofiftysix)
console.log(randNumRoundToFloor)
let pod = 'javascript'
console.log();
let mum = 'You cannot end a sentence with because because because is a conjunction'
console.log(mum.substr('because'))
//level3//
let rose = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(rose.match('love'));
let sunflower = 'You cannot end a sentence with because because because is a conjunction'
console.log(sunflower.match('because'))
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let RegExp=/\d+/
console.log(sentence.match(RegExp))
