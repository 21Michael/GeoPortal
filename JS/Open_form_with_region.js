export let Open_form_with_region = function(){
	'use strict';
	let html = document.querySelector("html");
	let templateWindow_region = document.querySelector(".templateWindow_region");
	let svg_map = document.querySelector(".interactiveMap_svg");
	let region_dimBlock = document.querySelector(".region_dimBlock");
	let open_form = document.querySelectorAll(".open_form");
	let regionTemplate = document.querySelector('.region_template').content.querySelector('.region_wrappTemplate');
	let obj = [ 
	    {name: "Одесская область" },										
		{name: "Днепропетровская область"},
		{name: "Черниговская область"},
		{name: "Kharkov region"},	
		{name: "Житомирская область" },										
		{name: "Полтавская область"},
		{name: "Херсонская область"},
		{name: "Киевская область"},	
		{name: "Запорожская область" },										
		{name: "Луганская область"},
		{name: "Донецкая область"},
		{name: "Винницкая область"},	
		{name: "Кировоградская область" },										
		{name: "Николаевская область"},
		{name: "Сумская область"},
		{name: "Львовская область"},	
		{name: "Черкасская область" },										
		{name: "Хмельницкая область"},
		{name: "Волынская область"},
		{name: "Ровенская область"},	
		{name: "Ивано-Франковская область" },										
		{name: "Тернопольская область"},
		{name: "Закарпатская область"},
		{name: "Черновицкая область"},
		{name: "Луцкая область"}
		];

		let remove_tabindex_func = () => {
			open_form.forEach((e) => { e.innerHTML = e.innerHTML.replace(/tabindex="0"/g,"tabindex=\"-1\"");});
		};
		let add_tabindex_func = () => {open_form.forEach((e) => { e.innerHTML = e.innerHTML.replace(/tabindex="-1"/g,"tabindex=\"0\"");})};

		let remove_form_func = (event) => {	
			event.preventDefault();
			templateWindow_region.removeChild(templateWindow_region.firstChild);	
		};

	 	let open_template_func = (event) => {
	  		event.preventDefault();
	  		let name =  event.target.outerHTML.match(/(?<=text=")[^"]+/gi);//при добавлении класса открытия формы к новому елементу добавь добавь сюда название области из события
			let render = function(i) {
	  			let temp = false;
	 			obj.forEach((elem)=>{if(elem.name.replace(" ","") == i) {
	 				temp = regionTemplate.cloneNode(true);
	 	 			temp.querySelector('.region-header').textContent = elem.name; 
	 	 	}
	 			});
	 			return temp;
			};

			let fragment = document.createDocumentFragment();
	 			fragment.append(render(name));
		 		templateWindow_region.append(fragment);  	  
		};


	class section_menu{
	    handleEvent(event) {
	      switch(event.type) {
	        case 'click':
	       		if( event.target.classList.contains("interactiveMap_path") && window.drugger)//при добавлении класса открытия формы к новому елементу добавь ему класс "open_form"
	        	  	{	
	        			open_template_func(event); 
	         			remove_tabindex_func(); 
	         			html.style.overflow = "hidden";
	         			break;
	        	    }
	        	else if(event.target.classList == "region_dimBlock" || event.target.classList == "region_closeButton")
					{
						remove_form_func(event);
						add_tabindex_func(); 
						html.style.overflow = "auto";
						break;
					}
				else{
						break;
					}
	        case 'keydown':
				if(event.currentTarget.classList){
	          		if(event.currentTarget.classList.contains("open_form") && event.keyCode === 13)
	          			{ 
	          				open_template_func(event); 
	          				remove_tabindex_func();
	          				html.style.overflow = "hidden";
	          			 	break;
	          		    }
	            }
	          	else if(event.keyCode === 27)
	          		{  
	          			remove_form_func(event);
	   					add_tabindex_func();
	   					html.style.overflow = "auto";
	   					break;
	          		}
	          	else{
						break;
					}
	      }
	    }
		
	};

	let Section_Menu = new section_menu();

	svg_map.addEventListener("click", Section_Menu);//mouse click open
	svg_map.addEventListener("keydown", Section_Menu);//button click open

	templateWindow_region.addEventListener("click", Section_Menu);//mouse click close
	document.addEventListener("keydown", Section_Menu);//button click close (Esc)
};



