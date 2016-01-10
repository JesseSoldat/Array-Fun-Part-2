//Random Section
var random = document.getElementById('random');


var myArray = ['A','B','C','D','E','F','G'];
var newArray =  [];

for(i = 0; i < 50; i++) {
  var randomIndex = Math.floor(Math.random() * myArray.length);
  random.innerHTML += myArray[randomIndex];  
  newArray.push(myArray[randomIndex]);
}
//Sort Section
var sorted = document.getElementById('sorted');

newArray.sort();
text = newArray.join('');

sorted.innerHTML = text;

//Occurrence Section  
var a = text.match(/A/gi).length;
var b = text.match(/B/gi).length;
var c = text.match(/C/gi).length;
var d = text.match(/D/gi).length;
var e = text.match(/E/gi).length;
var f = text.match(/F/gi).length;
var g = text.match(/G/gi).length;

var amount = [a,b,c,d,e,f,g];


letters = document.getElementById('letters');

for(i = 0; i < amount.length; i++) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(myArray[i]+': '+amount[i]));
  letters.appendChild(li);
 }

//Spice Section - each time clone a new copy of our original array and splice out a random letter to display
var splice = document.getElementById('splice');

var times = ['1st: ','2nd: ','3rd: ','4th: ','5th: ','6th: ','7th: ']


for(i = 0; i < myArray.length; i++) {
    var clone = [];
    for(int = 0; int < myArray.length; int++) {
      clone.push(myArray[int]);
    }

    randomIndex = Math.floor(Math.random() * clone.length);
    var randomSplice = clone.splice(randomIndex, 1);
    // console.log(times[i]+randomSplice);
    var list = document.createElement("li");
    list.appendChild(document.createTextNode(times[i]+randomSplice));
    splice.appendChild(list);
}


//Remove one Letter randomly at a time until we are left with only one
onlyOne = document.getElementById('onlyOne');

function randomRemainder() {
  for(i = 0; i < 6; i++) {

    randomIndex = Math.floor(Math.random() * myArray.length);
    myArray.splice(randomIndex, 1);
    
    var list = document.createElement("li");
    list.appendChild(document.createTextNode(myArray.join(" ")));
    onlyOne.appendChild(list);
  }
}
randomRemainder();

//Array Prototype
var javaScript = ['jquery','angular','backbone','react','underscore','ember','node','lodash']
var languages = ['French','Spanish','Japanese','Thai','Chinese','Swahili']

var prototype1 = document.getElementById('prototype1');
var prototype2 = document.getElementById('prototype2');


Array.prototype.randomSplice = function(num) {
  var randomIndex = Math.floor(Math.random() * this.length);
  var randomSplice = this.splice(randomIndex, num);
  console.log(this);
  return randomSplice;
}
// console.log(javaScript.randomSplice(1));
prototype1.innerHTML = javaScript.randomSplice(1);
prototype2.innerHTML = languages.randomSplice(1);



var prototype3 = document.getElementById('prototype3');


Array.prototype.randomValue = function() {
  var randomIndex = Math.floor(Math.random() * this.length);
  var randomValue = this[randomIndex];
  return randomValue;
}
prototype3.innerHTML = languages.randomValue();









