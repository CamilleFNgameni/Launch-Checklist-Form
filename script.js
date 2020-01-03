window.addEventListener('load', function(){
   let form = document.querySelector("form");
   form.addEventListener("submit",function(event){
      event.preventDefault();

      let allFieldsFilled = false;
      let validInput = false;
      let readyForLaunch =true;
      let pilot = document.querySelector("input[name=pilotName]");
      let copilot = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let fuel;
      let cargo;
     
      if(pilot.value===""||copilot.value===""||fuelLevel.value===""||cargoMass.value===""){
         alert("All fields are required");
         allFieldsFilled = false;
      }
      else{
         allFieldsFilled = true;
      }

      if(allFieldsFilled){
         fuel = Number(fuelLevel.value);
         cargo = Number(cargoMass.value);
         if(isNaN(fuel)||isNaN(cargo)){
            alert("Fuel and Cargo need to be a number");
         }
         else{
            validInput = true;
         }
      }
   
if(validInput){
   document.getElementById("faultyItems").style.visibility = "visible";
   document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready`;

   document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot.value} is ready`;
   if(fuel>10000){
      document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";

   }else{
      document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
      readyForLaunch = false;
   }
   if(cargo<10000){
      document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
   }
   else{
      document.getElementById("cargoStatus").innerHTML = "Cargo mass too much for launch";
      readyForLaunch = false;
   }
   if(readyForLaunch){
      document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
      document.getElementById("launchStatus").style.color = "green";
   }else{
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"; 
      document.getElementById("launchStatus").style.color = "red";  
   }
}
else{
   document.getElementById("faultyItems").style.visibility = "hidden";
   document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch"; 
   document.getElementById("launchStatus").style.color = "black"; 
}

      

     

   });

});


fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
   response.json().then( function(json) {
      const div = document.getElementById("missionTarget");
      let n = Math.floor(Math.random()*6);
      div.innerHTML = `<h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[n].name}</li>
         <li>Diameter: ${json[n].diameter}</li>
         <li>Star: ${json[n].star}</li>
         <li>Distance from Earth: ${json[n].distance}</li>
         <li>Number of Moons: ${json[n].moons}</li>
      </ol>
      <img src="${json[n].image}">`;
   });
});
