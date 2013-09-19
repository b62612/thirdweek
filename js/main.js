/*  Ejiroghene Efevberha
 	VFW 1309
 	Web App Part 3 (Project 3)
	Talent Scout Assistant App */

window.addEventListener("DOMContentLoaded", function(){
localStorage.key(0);
			function $(x){
					var theElement = document.getElementById(x);
					return theElement;
			}		
			// create select field elements and populate with options
			function makeCart(){
					var formTag = document.getElementsByTagName("form"),
						selectLi = $("select"),
						makeSelect = document.createElement("select");
						makeSelect.setAttribute("id", "agegrades");					
						for(var i=0, j=ageGrades.length; i<j; i++){
							var makeOption = document.createElement("option");
							var optText = ageGrades[i];
								makeOption.setAttribute("value", optText);
								makeOption.innerHTML = optText;
								makeSelect.appendChild(makeOption);
						}
					selectLi.appendChild(makeSelect);
			}
			function getRadioActive(){
					var radios = document.forms[0].position;
						for(var i=0; i<radios.length; i++){
							if(radios[i].checked){
							positionValue = radios[i].value;
						}
					}
			}
			function getCheckboxActive(){
					if($("urgency").checked){
						urgencyValue = $("urgency").value;
					}else{
						urgencyValue = "No";
					}		
			}		
			function switchControls(n){
					switch (n){
							case "on":
									$("playerForm").style.display = "none";
									$("clearAll").style.display = "inline";
									$("showAll").style.display = "none";
									$("addNew").style.display = "inline";				
							break;
							case "off":
									$("playerForm").style.display = "block";
									$("clearAll").style.display = "inline";
									$("showAll").style.display = "inline";
									$("addNew").style.display = "none";
									$("items").style.display = "none";
							break;					
					default:
					return false;
					}
			}			
			function submitData(key){
					if(!key){
					var id = Math.floor(Math.random()*10000000001);	
					}else{
						id = key;
					}
									
			getRadioActive();
			getCheckboxActive();
			positionValue;
			urgencyValue ;					
					var item 			= {};
						item.agegrade	= ["Age Category:", $("agegrades").value];
						item.firstname	= ["First Name:", $("firstname").value];
						item.lastname	= ["Last Name:", $("lastname").value]; 
						item.email		= ["Agent Email:", $("email").value];  
						item.phone		= ["Agent Phone:", $("phone").value];
						item.position 	= ["Field Position:", positionValue];
						item.urgency 	= ["Urgent:", urgencyValue];
						item.rating 	= ["Player Rating:", $("rating").value];
						item.date 		= ["Observation Date:", $("date").value];
						item.notes 		= ["Notes:", $("notes").value];				
			localStorage.setItem(id, JSON.stringify(item));	
			alert("Player Saved!");
			}			
			function getData(){
					switchControls("on");
							if(localStorage.length === 0){
							alert("There is no data in your local drive");
							}
					var makeDiv = document.getElementById("items");
					if (makeDiv) {
						makeDiv.innerHTML = "";
						} else {
						makeDiv = document.createElement("div");
						makeDiv.setAttribute("id", "items");
						}
					var makeDiv = document.createElement("div");
						makeDiv.setAttribute("id", "items");
					var makeList = document.createElement("ul");
						makeDiv.appendChild(makeList);
						document.body.appendChild(makeDiv);
					$("items").style.display = "block";			
				for(var i=0, d=localStorage.length; i<d; i++){
					var collectList = document.createElement("li");
					var newList = document.createElement("li");								
								makeList.appendChild(collectList);			
					var key = localStorage.key(i);
					var value = localStorage.getItem(key);
					var dataObj = JSON.parse(value);
					var makeSubList = document.createElement("ul");
						collectList.appendChild(makeSubList);
				
				for(var n in dataObj){
					var makeSubli = document.createElement("li");
						makeSubList.appendChild(makeSubli);
					var subText = dataObj[n][0]+" "+dataObj[n][1];
						makeSubli.innerHTML = subText;
						makeSubList.appendChild(newList);
						}	
			addItemLink(localStorage.key(i), newList); 						
				}		
			}
			function addItemLink(key, newList) {
		
					var editLink = document.createElement("a");
						editLink.href = "#";
						editLink.key = key;
					var editText = "Edit Player";
						editLink.addEventListener("click", editItem);
						editLink.innerHTML = editText;
						newList.appendChild(editLink);

			//add line break
					var lineBreakTag = document.createElement("br");
					newList.appendChild(lineBreakTag);

					var deleteLink = document.createElement("a");
						deleteLink.href = "#";
						deleteLink.key = key;
					var deleteText = "Delete Player";
						deleteLink.addEventListener("click", deletePlayer);
						deleteLink.innerHTML = deleteText;
						newList.appendChild(deleteLink);
			}	

			function editItem(){
					var value = localStorage.getItem(this.key);
					var item =JSON.parse(value);

			switchControls("off");

						$("agegrades").value = item.agegrade[1];
						$("firstname").value = item.firstname[1];
						$("lastname").value = item.lastname[1];
						$("email").value = item.email[1];
						$("phone").value = item.phone[1];
					var radios = document.forms[0].position;
				for(var i =0; i<radios.length; i++){
						if(radios[i].value == "forward" && item.position[1] == "forward"){
						  radios[i].setAttribute("checked", "checked");
						}else if(radios[i].value == "midfield" && item.position[1] == "midfield"){
						  radios[i].setAttribute("checked", "checked");
						}else if (radios[i].value == "defense" && item.position[1] == "defense"){
						  radios[i].setAttribute("checked", "checked");
						}
					}
					if(item.urgency[1] == "Yes"){$("agegrades").setAttribute("checked", "checked")
					}
						$("rating").value = item.rating[1];
						$("date").value = item.date[1];
						$("notes").value = item.notes[1];
						submit.removeEventListener("click", submitData);
						$("submit").value = "Edit Player";
					var editSubmit = $("submit");

					editSubmit.addEventListener("click", validate);
					editSubmit.key = this.key;
			}
			function deletePlayer(){
					var question = confirm("Are you sure you want to delete player data?");
					if (question){
						localStorage.removeItem(this.key);
						window.location.reload();
					}else{
						alert("Player data was NOT deleted.");
					}
			}	
			function clearLocal(){
					if(localStorage.length === 0){
					  alert("There is no entry to clear");
					}else{
					  localStorage.clear();
					  alert("All players are deleted");
			window.location.reload();
			return false;
					}		
			}	
			function validate(e){
					var getCart = $("agegrades");
					var getFirstName = $("firstname");
					var getLastName = $("lastname");
					var getEmail = $("email");
						errHandler.innerHTML = "";
						getCart.style.border = "1px solid black";
						getFirstName.style.border = "1px solid black";
						getLastName.style.border = "1px solid black";
						getEmail.style.border = "1px solid black";

					var errMessages = [];

					if (getCart.value === "-- Age Category --"){
					var cartError = "Please select an age category";
						getCart.style.border = "1px solid red";
						errMessages.push(cartError);
					}
					if (getFirstName.value === ""){
					var firstNameError = "Please enter first name";
						getFirstName.style.border = "1px solid red";
						errMessages.push(firstNameError);
					}
					if (getLastName.value === ""){
					var lastNameError = "Please enter last name";
						getLastName.style.border = "1px solid red";
						errMessages.push(lastNameError);
					}
					var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
					if(!(regEx.exec(getEmail.value))){
					var emailError = "please enter correct email format";
						getEmail.style.border = "1px solid red";
						errMessages.push(emailError);
					}
					if(errMessages.length >= 1){
				for(var i=0, j=errMessages.length; i<j; i++){
					var txt = document.createElement("li");
						txt.innerHTML = errMessages[i];
						errHandler.appendChild(txt);
					}
			e.preventDefault();
			return false;
			}else{
			submitData(this.key);
			}

			}
					var ageGrades = ["-- Age Category --", "U-17", "U-23", "Over 23"],
 						errHandler = $("allerrors");						
						makeCart();			
						for (i=0, j=localStorage.length; i<j; i++){
					var dataKey = localStorage.key(i);
					var dataValue = localStorage.getItem(dataKey);
						console.log(dataKey + ": " + dataValue);
						}
					var showAll = $("showAll");
						showAll.addEventListener("click", getData);
					var clearAll = $("clearAll");
						clearAll.addEventListener("click", clearLocal);
					var submit = $("submit");
						submit.addEventListener("click", validate);
});