var sandwich = []; // reversed order
var selectedBread = "";
var selectedCondiment = "";

function onBread1Clicked() {
	sandwich.push("bread1");
	selectedBread = "bread1";
	reloadSandwich();
}

function onBread2Clicked() {
	sandwich.push("bread2");
	selectedBread = "bread2";
	reloadSandwich();
}

function onBread3Clicked() {
	sandwich.push("bread3");
	selectedBread = "bread3";
	reloadSandwich();
}

function onBread4Clicked() {
	sandwich.push("bread4");
	selectedBread = "bread4";
	reloadSandwich();
}

function onToasterClick() {
	var toastedArea = document.getElementById("toastedArea");
	if (selectedBread == "bread1") {
		toastedArea.innerHTML = "<img src='whitebread.png' />";
	} else (selectedBread == "bread2") {
		toastedArea.innerHTML = "<img src='rye.png' />";
	} else (selectedBread == "bread3") {
		toastedArea.innerHTML = "<img src='wheatbread.png' />";
	} else (selectedBread == "bread4") {
		toastedArea.innerHTML = "img src='ciabatta.png' />";
	}

}

function onMayoClick() {
	selectedCondiment = "mayo";
	reloadCondiment();
}

function reloadCondiment() {
	var condimentArea = document.getElementById("condimentArea");

	if (selectedCondiment == "mayo") {
		condimentArea.innerHTML = "<img src='mayo.jpg' />";
	}
}

function onCheeseClicked() {
	sandwich.push("cheese"); // sandwich = ["cheese"]; again note this is reversed order
	reloadSandwich();
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