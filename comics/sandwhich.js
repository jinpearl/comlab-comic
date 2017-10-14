var sandwich = []; // reversed order
var selectedBread = "";
var selectedCondiment = "";
var selectedMeat = "";
var SelectedCheese = "";


function onBread1Clicked() {
 sandwich.push("bread1");
 selectedBread = "bread1";
 reloadSandwich();
}

function onToasterClick() {
 var toastedArea = document.getElementById("toastedArea");
 if (selectedBread == "bread1") {
  toastedArea.innerHTML = "<img src='whitebread.png' />";
 } else (selectedBread == "bread2") {
  toastedArea.innerHTML = "<img src='rye.png' />";
 } else (selectedBread == "bread1") {
  toastedArea.innerHTML = "<img src='whitebread.png' />";
}




//condiments

function onMayoClick() {
 selectedCondiment = "mayo";
 reloadCondiment();
}

function onMustardClick() {
  selectedCondiment = "mustard";
  reloadCondiment();
}

function onJellyClick() {
  selectedCondiment = "jelly";
  reloadCondiment();
}

function onPeanutbutterClick() {
  selectedCondiment = "peanutbutter";
  reloadCondiment();
}

function reloadCondiment() {
 var condimentArea = document.getElementById("condimentArea");
 if (selectedCondiment == "mayo") {
    condimentArea.innerHTML = "<img src='mayo.png' />";
 } else if (selectedCondiment == "mustard") {
  condimentArea.innerHTML = "<img src='mustard.png' />"; 
} else if (selectedCondiment == "jelly")
  condimentArea.innerHTML = "<img src='jelly.png' />" {
}else (selectedCondiment == "peanutbutter")
  condimentArea.innerHTML = "<img src='peanutbutter.png' />"
}


//Cheeses
function onCheeseClicked() {
 sandwich.push("cheese"); // sandwich = ["cheese"]; again note this is reversed order
 reloadSandwich();
}

function onPepperjackClick() {
  selectedCheese = "Pepperjack";
  reloadCheese();
}

function onSwissClick(){
  selectedCheese = "swiss";
  reloadCheese();
}

function onAmericanClick(){
  selectedCheese = "american";
  reloadCheese();
}

function onMozzarellaClick(){
  selectedCheese = "mozzarella"
  reloadCheese();
}

function reloadCheese() {
  var cheeseArea = document.getElementById("cheeseArea");
   if (selectedCheese == "Pepperjack") {
      cheeseArea.innerHTML = "<img src='pepperjack.png' />";
   } else if (selectedCheese == "swiss") {
    cheeseArea.innerHTML = "<img src='swiss.png' />"; 
  } else if (selectedCheese == "american")
    cheeseArea.innerHTML = "<img src='american.png' />" {
  }else (selectedCheese == "mozzarella")
    cheeseArea.innerHTML = "<img src='mozzarella.png' />"
  }

//meats
function onMeatClicked(){
  sandwhich.push("meat");
  reloadSandwhich();
}

function onChickenClick(){
  selectedMeat = "Chicken";
  reloadMeat();
}

function onTurkeyClick(){
  selectedMeat = "turkey";
  reloadMeat();
}

function onRoastbeefClick(){
  selectedMeat = "roastbeef"
  reloadMeat();
}

function onMarshmallowClick(){
  selectedMeet = "marshmallow"
  reloadMeat()
}

function onHamClick(){
  selectedMeat = "ham"
  reloadMeat();
}

function reloadMeat(){}
  var meatArea = document.getElementById("meatArea");
   if (selectedMeat == "chicken") {
      meatArea.innerHTML = "<img src='chicken.png' />";
   } else if (selectedMeat == "turkey") {
    meatArea.innerHTML = "<img src='turkey.png' />"; 
  } else if (selectedMeat == "roastbeef")
    meatArea.innerHTML = "<img src='roastbeef.png' />" {
  }else if (selectedMeat == "ham")
    meatArea.innerHTML = "<img src='ham.png' />"
  } else (selectedMeat) = ("marshmallow") {
    meatArea.innerHTML ="<img src='marshmallow.png"
  }

function reloadSandwich() {
 var sandwichMakingArea = document.getElementById("sandwichMakingArea");
 sandwichMakingArea.innerHTML = "";
 var tempSandwich = sandwich.slice(); // copies array so that we don't modify the old one
 tempSandwich.push(tempSandwich[0]);
 for (var i = 0; i < tempSandwich.length; i++) {
  var element = document.createElement("img");
  if (tempSandwich[i] == "bread") {
   element.src = "bread.jpg";
  } else if (tempSandwich[i] == "cheese")  {
   element.src = "cheese.jpg";
  }
  sandwichMakingArea.appendChild(element);
 }
}