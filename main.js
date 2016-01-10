var myArray = ['A','B','C','D','E','F','G'];

for(i = 0; i < 50; i++) {
  var randomIndex = Math.floor(Math.random() * myArray.length);
  document.write(myArray[randomIndex]);
}


