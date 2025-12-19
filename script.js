document.addEventListener("DOMContentLoaded", (event) => {
  
  //creating variable for HTML
  let body = document.getElementById("#rowSpring");
  
  //array of objects of all spring months
  const spring = [
    { 
	  month: "march",
      season: "spring",
	  image: "https://files.catbox.moe/r00a9n.jpg"
  },
  { 
	  month: "april",
      season: "spring",
	  image: "https://files.catbox.moe/cxibqq"
  },
  { 
	  month: "may",
      season: "spring",
	  image: ""
  }
]
const summer = [
   { 
	  month: "june",
      season: "summer",
	  image: ""
  },
  { 
	  month: "july",
      season: "summer",
	  image: ""
  },
  { 
	  month: "august",
      season: "summer",
	  image: ""
  }
]
const autumn = [
   { 
	  month: "september",
      season: "autumn",
	  image: ""
  },
  { 
	  month: "october",
      season: "autumn",
	  image: ""
  },
  { 
	  month: "november",
      season: "autumn",
	  image: ""
  }
]
  const winter = [
{ 
	  month: "december",
      season: "winter",
	  image: ""
  },
  { 
	  month: "january",
      season: "winter",
	  image: ""
  },
  { 
	  month: "feburary",
      season: "winter",
	  image: ""
  }
  ]


function render(arr) {
  arr.forEach(seasons => {
    body.innerHTML += `
      <div class="itemInfo">
        <h3>${seasons.month}</h3>
        <p>${seasons.season}</p>
        <img src="${seasons.image}">
        </div>
    `;
  });
}

render(spring);
render(summer);
render(autumn);
render(winter);

});