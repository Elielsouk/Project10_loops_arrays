function count_To_Ten() {  //This is a While loop counting to ten.
  var Digit = "";
  var X = 1;
  while (X < 11) {
    Digit += "<br>" + X;
    X++;
  }
  document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
//Here I used the method of loop with example of fruits.
var Fruits = ["Oranges", "Grapefruits", "Bananas", "Avocado", "Blueberry", "Mango", "Peach"];
var Content = "";
var Y;
function for_Loop() {
  for (Y = 0; Y < Fruits.length; Y++) {
    Content += Fruits[Y] + "<br>";
  }
  document.getElementById("List_of_Fruits").innerHTML = Content;
}
//using Array method
function dog_pics() {
  var Dog_Picture = [];
  Dog_Picture[0] = "sleeping";
  Dog_Picture[1] = "sleeping";
  Dog_Picture[2] = "sleeping";
  Dog_Picture[3] = "sleeping";
  document.getElementById("Dog").innerHTML = "In this picture, the dog is " +
  Dog_Picture[2] + ".";
}

var X = 82;  //I using Let and Var example.
document.write(X);
{
  let X = 33;
  document.write("<br>" + X);
}
document.write("<br>" + X);