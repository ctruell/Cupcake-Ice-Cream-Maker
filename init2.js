import {data} from './data/data.js';
import {icecream} from './data/icecream.js';

window.onload = function() {
	let selects = document.getElementById("selects");
    let selects2 = document.getElementById("selects2");

    //1. Create the select elements which options will be loaded from the data and icecream objects
    let flavorSelect = document.createElement("select");
    flavorSelect.setAttribute("id", data[this.value]); //second parameter should not be hardcoded should be loaded from data above
    selects.appendChild(flavorSelect);
    
    let frostingSelect = document.createElement("select");
    frostingSelect.setAttribute("id", data[this.value]); //second parameter should not be hardcoded should be loaded from data above
    selects.appendChild(frostingSelect);
    
    let fillingSelect = document.createElement("select");
    fillingSelect.setAttribute("id", data[this.value]); //second parameter should not be hardcoded should be loaded from data above
    selects.appendChild(fillingSelect);

    let typeSelect = document.createElement("select");
    typeSelect.setAttribute("id", icecream[this.value]); //second parameter should not be hardcoded should be loaded from data above
    selects2.appendChild(typeSelect);

    let fSelect = document.createElement("select");
    fSelect.setAttribute("id", icecream[this.value]); //second parameter should not be hardcoded should be loaded from data above
    selects2.appendChild(fSelect);
    
    let toppingSelect = document.createElement("select");
    toppingSelect.setAttribute("id", icecream[this.value]); //second parameter should not be hardcoded should be loaded from data above
    selects2.appendChild(toppingSelect);   

    //2. Load the options for the select using a for..in loop 
    for (let cupcake in data) {
        flavorSelect.options.add(new Option(cupcake, cupcake));
    }

    for (let type in icecream) {
        typeSelect.options.add(new Option(type, type));
    }

    //loading select options onchange, outputing images based on choices and sotring data in local storage
    flavorSelect.onchange = function() {
    	window.localStorage.setItem("flavor", (flavorSelect.value).toLowerCase());
        if(this.selectedIndex < 1) {
            frostingSelect.length = 1;
            fillingSelect.length = 1;
            return;
        }
        frostingSelect.length = 0;
        fillingSelect.length = 1;
        for (let frosting in data[this.value]) {
            frostingSelect.options.add(new Option(frosting, frosting));
        }
        changeImage((flavorSelect.value).toLowerCase());
    };
    
    frostingSelect.onchange = function() {
    	window.localStorage.setItem("frosting", (frostingSelect.value).toLowerCase());
        if(this.selectedIndex < 1) {
            fillingSelect.length = 1;
            return;
        }
        fillingSelect.length = 0;
        for (let filling in data[this.previousSibling.value][this.value]) {
            fillingSelect.options.add(new Option(filling, filling));
        }
        changeImage((flavorSelect.value).toLowerCase() + (frostingSelect.value).toLowerCase());
    }

    fillingSelect.onchange = function() {
    	window.localStorage.setItem("filling", (fillingSelect.value).toLowerCase());
    	changeImage((flavorSelect.value).toLowerCase() + (frostingSelect.value).toLowerCase() + (fillingSelect.value).toLowerCase());
        //printing choices to screen
    	let summary = document.getElementById("choices");
    	let par = document.createElement("p");
    	par.setAttribute("id", "choices");
    	document.getElementById("choices").innerHTML = "You ordered a " + window.localStorage.getItem("flavor") + " cupcake with " + window.localStorage.getItem("frosting") + " frosting and a " + window.localStorage.getItem("filling") + " filling.";
    }

    typeSelect.onchange = function() {
        window.localStorage.setItem("type", (typeSelect.value).toLowerCase());
        if(this.selectedIndex < 1) {
            fSelect.length = 1;
            toppingSelect.length = 1;
            return;
        }
        fSelect.length = 0;
        toppingSelect.length = 1;
        for (let flavor2 in icecream[this.value]) {
            fSelect.options.add(new Option(flavor2, flavor2));
        }
        changeImage((typeSelect.value).toLowerCase());
    };
    
    fSelect.onchange = function() {
        window.localStorage.setItem("flavor2", (fSelect.value).toLowerCase());
        if(this.selectedIndex < 1) {
            toppinggSelect.length = 1;
            return;
        }
        toppingSelect.length = 0;
        for (let topping in icecream[this.previousSibling.value][this.value]) {
            toppingSelect.options.add(new Option(topping, topping));
        }
        changeImage((typeSelect.value).toLowerCase() + (fSelect.value).toLowerCase());
    }

    toppingSelect.onchange = function() {
        window.localStorage.setItem("topping", (toppingSelect.value).toLowerCase());
        changeImage((typeSelect.value).toLowerCase() + (fSelect.value).toLowerCase() + (toppingSelect.value).toLowerCase());
        //printing choices to screen
        let summary = document.getElementById("choices2");
        let par = document.createElement("p");
        par.setAttribute("id", "choices2");
        document.getElementById("choices2").innerHTML = "You ordered a " + window.localStorage.getItem("flavor2") + " " +  window.localStorage.getItem("type") + " ice cream with " + window.localStorage.getItem("topping") + " on top.";
    }
}

//redirects to error page if script produces any errors
window.onerror = function() {
	window.location.href = "error.html";
}

//function for displaying images
function changeImage(str) {
	let div = document.getElementById("img");
	let img = document.createElement("img");
	if (div.hasChildNodes() === false) {
		img.setAttribute("src", "./media/" + str + ".png");
		div.appendChild(img);
	}
	else {
		//let img2 = document.createElement("img");
		img.setAttribute("src", "./media/" + str + ".png");
		div.removeChild(div.childNodes[0]);
		div.appendChild(img);
	}
}