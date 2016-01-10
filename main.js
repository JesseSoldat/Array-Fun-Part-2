var random = document.getElementById('random');
var sorted = document.getElementById('sorted');

var myArray = ['A','B','C','D','E','F','G'];
var newArray =  [];

for(i = 0; i < 50; i++) {
 
  var randomIndex = Math.floor(Math.random() * myArray.length);
 
 
  random.innerHTML += myArray[randomIndex];  
  newArray.push(myArray[randomIndex]);
}

 newArray.sort();
 text = newArray.join('');

 sorted.innerHTML = text;

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





