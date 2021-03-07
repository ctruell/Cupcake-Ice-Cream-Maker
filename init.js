import {data} from './data/data.js';
import {doughnut} from './data/icecream.js';

window.onload = function() {
	let selects = document.getElementById("selects");
	let select = document.createElement("select");
	select.setAttribute("id", data[this.value]); //second parameter should not be hardcoded should be loaded from data above
    selects.appendChild(select);

    //create selects
	for (let cupcake in data) {
		select.options.add(new Option(cupcake, cupcake));
	}
    
    /*let frostingSelect = document.createElement("select");
    frostingSelect.setAttribute("id", "frosting"CollegeProgram[this.nextSibling.value]); //second parameter should not be hardcoded should be loaded from data above
    selects.appendChild(frostingSelect);
    
    let fillingSelect = document.createElement("select");
    fillingSelect.setAttribute("id", "filling"); //second parameter should not be hardcoded should be loaded from data above
    selects.appendChild(fillingSelect);*/

    //2. Load the options for the select using a for..in loop 
    /*for (let cupcake in data) {
        select.options.add(new Option(cupcake, cupcake));
    }*/

    select.onchange = function() {
    	window.localStorage.setItem("flavor", (select.value).toLowerCase());
    	console.log(select.value);
    	console.log(data[this.value]);
        if(this.selectedIndex < 1) {
            select.length = 1;
            return;
        }
        select.length = 0;
        for (let frosting in data[this.value]) {
            select.options.add(new Option(frosting, frosting));
        }
        changeImage((select.value).toLowerCase());
    };
    
    /*frostingSelect.onchange = function() {
    	window.localStorage.setItem("frosting", (frostingSelect.value).toLowerCase());
        if(this.selectedIndex < 1) {
            fillingSelect.length = 1;
            return;
        }
        fillingSelect.length = 0;
        for (let filling in data[this.previousSibling.value][this.value]) {
            fillingSelect.options.add(new Option(filling, filling));
        }
        //removeImage();
        changeImage((flavorSelect.value).toLowerCase() + (frostingSelect.value).toLowerCase());
    }

    fillingSelect.onchange = function() {
    	window.localStorage.setItem("filling", (fillingSelect.value).toLowerCase());
    	//removeImage();
    	changeImage((flavorSelect.value).toLowerCase() + (frostingSelect.value).toLowerCase() + (fillingSelect.value).toLowerCase());
    	let summary = document.getElementById("choices");
    	let par = document.createElement("p");
    	par.setAttribute("id", "choices");
    	document.getElementById("choices").innerHTML = "You ordered a " + window.localStorage.getItem("flavor") + " cupcake with " + window.localStorage.getItem("frosting") + " frosting and a " + window.localStorage.getItem("filling") + " filling.";
    }*/
}

/*window.onerror = function() {
	window.location.href = "error.html";
}*/

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

function removeImage() {
	div.removeChild(img);
}