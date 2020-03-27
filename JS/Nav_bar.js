export let navigation =  function(){
	
	let navigation_list = document.querySelector(".navigation_list"),	
	 	firstNavElement = navigation_list.firstElementChild;
	
	firstNavElement.classList.add("navigation_focus");

		navigation_list.addEventListener("click", function(evt){
			firstNavElement = evt.target.closest("li");
		});
		navigation_list.addEventListener("mouseover",(evt)=>{

			firstNavElement.classList.remove("navigation_focus");
		});
		
		navigation_list.addEventListener("mouseout",(evt)=>{
			firstNavElement.classList.add("navigation_focus");
		
		});
		
		
};