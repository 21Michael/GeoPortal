import {Interactive_map} from  "D:/Development/GeoPortal/JS/Interactive_map.js";
import {navigation} from  "D:/Development/GeoPortal/JS/Nav_bar.js";
import {Open_form_with_region} from  "D:/Development/GeoPortal/JS/Open_form_with_region.js";

Interactive_map();
navigation();
Open_form_with_region();

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});



let i =0,
cursBlock =  document.getElementById("coords1");
 let interactive_map =  document.querySelector(".interactiveMap_wrapper"),
  	 main = document.getElementById("main"),
  	 diagrams = document.getElementById("diagrams");
  	
window.addEventListener("scroll", _.debounce((evt)=>{
	cursBlock.textContent = "+scale = " +(pageYOffset);
	if((main.offsetHeight*0.3) < pageYOffset && pageYOffset < 1292){
		interactive_map.setAttribute("style",`		
			width: 95%;
			height: 95%;
			transform: matrix(1,0,0,1,0,0);
			`);
	}
	else if((main.offsetHeight*0.3) > pageYOffset){
		interactive_map.setAttribute("style", `
			width: 1035px;
			height: 710px;
			transform: matrix(1,0,0,1,0,-150);
			`);
	}
	else if(pageYOffset > 1292){
		interactive_map.setAttribute("style", `
			width: 1035px;
			height: 710px;
			transform: matrix(1,0,0,1,0,+150);
			`);
	}
},100));








const interactiveMap = document.querySelector(".interactiveMap__selectionList");
const inputFieldArr = document.querySelectorAll('.chosen-value');
const dropdown = document.querySelector('.value-list');

console.log(typeof dropdownArray);




let liClick = function(dropdownArray, inputField){
	dropdownArray.forEach(item => {
  		item.addEventListener('click', (evt) => {
    		inputField.value = item.textContent;
   			dropdownArray.forEach(dropdown => {
        		dropdown.classList.add('closed');
    		});
  		});
	});
};	
let inputInput = function(dropdownArray, inputField, valueArray){
	inputField.addEventListener('input', () => {
		  let inputValue = inputField.value.toLowerCase();
		  let valueSubstring;
		  if (inputValue.length > 0) {
		    for (let j = 0; j < valueArray.length; j++) {
		      if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
		        dropdownArray[j].classList.add('closed');
		      } else {
		        dropdownArray[j].classList.remove('closed');
		      }
		    }
		  } else {
		    for (let i = 0; i < dropdownArray.length; i++) {
		      dropdownArray[i].classList.remove('closed');
		    }
		  }
	});
};
let inputFocus = function(dropdownArray, inputField){
	inputField.addEventListener('focus', () => {
	    inputField.placeholder = 'Type to filter';
	   
	    dropdownArray.forEach(dropdown => {
	    	dropdown.classList.remove('closed');
  		});
	});
};

inputFieldArr.forEach((inputField)=>{
	let valueArray = [], dropdownArray = [];
	dropdownArray = [... inputField.nextElementSibling.querySelectorAll('li')];
	dropdownArray.forEach(item => {
 		valueArray.push(item.textContent);
	});

	liClick(dropdownArray, inputField);
	inputInput(dropdownArray, inputField, valueArray);
	inputFocus(dropdownArray, inputField);
});
	


