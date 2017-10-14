var sandwich = []; // reversed order
var selectedBread = "";
var selectedCondiment = "";


// this is for breads
function hover1() {
	document.getElementById("bread1").style.display = "block"
}

function noHover1() {
	document.getElementById("bread1").style.display = "none"
}

function onBread1Clicked() {
	sandwich.push("bread1");
	selectedBread = "bread1";
	reloadSandwich();
}

function onToasterClick() {
	var toastedArea = document.getElementById("toastedArea");
	if (selectedBread == "bread1") {
		toastedArea.innerHTML = "<img src='whitebread.png' />";
	}
}

		function hover2() {
			document.getElementById("bread2").style.display = "block"
		}

		function noHover2() {
			document.getElementById("bread2").style.display = "none"
		}
				
				function hover3() {
					document.getElementById("bread3").style.display = "block"
				}

				function noHover3() {
					document.getElementById("bread3").style.display = "none"
				}

						function hover4() {
							document.getElementById("bread4").style.display = "block"
						}

						function noHover4() {
							document.getElementById("bread4").style.display = "none"
						}



// this is for spreads
function hover5() {
	document.getElementById("spread1").style.display = "block"
}

function noHover5() {
	document.getElementById("spread1").style.display = "none"
}

		function hover6() {
			document.getElementById("spread2").style.display = "block"
		}

		function noHover6() {
			document.getElementById("spread2").style.display = "none"
		}
						
				function hover7() {
					document.getElementById("spread3").style.display = "block"
				}

				function noHover7() {
					document.getElementById("spread3").style.display = "none"
				}

						function hover8() {
							document.getElementById("spread4").style.display = "block"
						}
								
						function noHover8() {
							document.getElementById("spread4").style.display = "none"
						}

// this is for cheeses
function hover9() {
	document.getElementById("cheese1").style.display = "block"
}

function noHover9() {
	document.getElementById("cheese1").style.display = "none"
}

		function hover10() {
			document.getElementById("cheese2").style.display = "block"
		}

		function noHover10() {
			document.getElementById("cheese2").style.display = "none"
		}
						
				function hover11() {
					document.getElementById("cheese3").style.display = "block"
				}

				function noHover11() {
					document.getElementById("cheese3").style.display = "none"
				}

						function hover12() {
							document.getElementById("cheese4").style.display = "block"
						}
								
						function noHover12() {
							document.getElementById("cheese4").style.display = "none"
						}
// this is for veg
function hover13() {
	document.getElementById("veg1").style.display = "block"
}

function noHover13() {
	document.getElementById("veg1").style.display = "none"
}

		function hover14() {
			document.getElementById("veg2").style.display = "block"
		}

		function noHover14() {
			document.getElementById("veg2").style.display = "none"
		}
						
				function hover15() {
					document.getElementById("veg3").style.display = "block"
				}

				function noHover15() {
					document.getElementById("veg3").style.display = "none"
				}

// this is for fill
function hover16() {
	document.getElementById("fill1").style.display = "block"
}

function noHover16() {
	document.getElementById("fill1").style.display = "none"
}

		function hover17() {
			document.getElementById("fill2").style.display = "block"
		}

		function noHover17() {
			document.getElementById("fill2").style.display = "none"
		}
						
				function hover18() {
					document.getElementById("fill3").style.display = "block"
				}

				function noHover18() {
					document.getElementById("fill3").style.display = "none"
				}

						function hover19() {
							document.getElementById("fill4").style.display = "block"
						}
								
						function noHover19() {
							document.getElementById("fill4").style.display = "none"
						}