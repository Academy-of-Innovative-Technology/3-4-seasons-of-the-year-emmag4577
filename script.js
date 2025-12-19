document.addEventListener("DOMContentLoaded", (event) => {
  
  //creating variable for HTML
  let body = document.getElementById("#rowSpring");
  
  //array of objects of all spring months
  const spring = [
    { 
	  month: "",
      season: "",
	  image: ""
  },
  { 
	  month: "",
      season: "",
	  image: ""
  },
  { 
	  month: "",
      season: "",
	  image: ""
  }
]
const summer = [
   { 
	  month: "",
      season: "",
	  image: ""
  },
  { 
	  month: "",
      season: "",
	  image: ""
  },
  { 
	  month: "",
      season: "",
	  image: ""
  }
]
const autumn = [
   { 
	  month: "",
      season: "",
	  image: ""
  },
  { 
	  month: "",
      season: "",
	  image: ""
  },
  { 
	  month: "",
      season: "",
	  image: ""
  }
]
  const winter = [
{ 
	  month: "",
      season: "",
	  image: ""
  },
  { 
	  month: "",
      season: "",
	  image: ""
  },
  { 
	  month: "",
      season: "",
	  image: ""
  }
  ]


function render(arr) {
  arr.forEach(person => {
    body.innerHTML += `
      <div class="itemInfo">
        <h3>${person.month}</h3>
        <p>${person.season}</p>
        <img src="${person.image}">
        </div>
    `;
  });
}

render(spring);
render(summer);
render(autumn);
render(winter);

});