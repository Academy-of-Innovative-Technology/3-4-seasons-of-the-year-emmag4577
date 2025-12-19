/*
var winter;
var spring;
var summer;
var fall;

var winterImages;
var springImages;
var summerImages;
var fallImages;



function displayWinter() {

}


function displaySpring() {

}

function displaySummer() {

}

function displayFall() {

}


function displayAllSeasons() {
	displayWinter();


	
}
*/

document.addEventListener("DOMContentLoaded", (event) => {
  
  //creating variable for HTML
  let body = document.querySelector(".main");
  
  //array of objects of all teachers
  const principals = [
    { 
       name: "Ms. Lynch",
      email: "ms.lynch@aoiths.org",
      role: "Principal",
      color: "#706563"
  }
]

function render(arr) {
  arr.forEach(person => {
    body.innerHTML += `
    <div class="cardWrapper">
      <div class="card" style="background-color: ${person.color};">
      <div class="cardInfo">
        <h3>${person.name}</h3>
        <p>${person.role}</p>
        <p>${person.email}</p>
        </div>
      </div>
      </div>
    `;
  });
}

render(principals);

});