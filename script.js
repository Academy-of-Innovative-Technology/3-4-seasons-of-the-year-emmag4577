document.addEventListener("DOMContentLoaded", (event) => {
  
  //creating variable for HTML
  let springInsert = document.getElementById("rowSpring");
  let summerInsert = document.getElementById("rowSummer");
  let fallInsert = document.getElementById("rowFall");
  let winterInsert = document.getElementById("rowWinter");
  
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
	  image: "https://files.catbox.moe/nb8wz2.jpg"
  }
]
const summer = [
   { 
	  month: "june",
      season: "summer",
	  image: "https://files.catbox.moe/jjjd8z.jpeg"
  },
  { 
	  month: "july",
      season: "summer",
	  image: "https://files.catbox.moe/runemr"
  },
  { 
	  month: "august",
      season: "summer",
	  image: "https://files.catbox.moe/fe8312"
  }
]
const autumn = [
   { 
	  month: "september",
      season: "autumn",
	  image: "https://files.catbox.moe/iryrjz"
  },
  { 
	  month: "october",
      season: "autumn",
	  image: "https://files.catbox.moe/6rxbd7.jpg"
  },
  { 
	  month: "november",
      season: "autumn",
	  image: "https://files.catbox.moe/vassv7.jpg"
  }
]
  const winter = [
{ 
	  month: "december",
      season: "winter",
	  image: "https://files.catbox.moe/5doy8b.jpg"
  },
  { 
	  month: "january",
      season: "winter",
	  image: "https://files.catbox.moe/68e1fb.jpg"
  },
  { 
	  month: "feburary",
      season: "winter",
	  image: "https://files.catbox.moe/czkggs.jpg"
  }
  ]

  function render(arr, container) {
  arr.forEach(item => {
    container.innerHTML += `
      <div class="itemInfo">
        <h3>${seasons.month}</h3>
        <p>${seasons.season}</p>
        <img src="${seasons.image}">
        </div>
    `;
  });

}
  render(spring, springInsert);
  render(summer, summerInsert);
  render(autumn, fallInsert);
  render(winter, winterInsert);

});