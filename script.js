document.addEventListener("DOMContentLoaded", () => {

  let springInsert = document.getElementById("rowSpring");
  let summerInsert = document.getElementById("rowSummer");
  let fallInsert = document.getElementById("rowFall");
  let winterInsert = document.getElementById("rowWinter");

  const spring = [
    {
       month: "March", 
       season: "Spring", 
       image: "https://files.catbox.moe/r00a9n.jpg" 
      },
    { 
      month: "April",
      season: "Spring", 
      image: "https://files.catbox.moe/cxibqq" 
    },
    { 
      month: "May", 
      season: "Spring", 
      image: "https://files.catbox.moe/nb8wz2.jpg" 
    }
  ];

  const summer = [
    { 
      month: "June", 
      season: "Summer", 
      image: "https://files.catbox.moe/jjjd8z.jpeg" 
    },
    { 
      month: "July", 
      season: "Summer", 
      image: "https://files.catbox.moe/runemr" 
    },
    { 
      month: "August", 
      season: "Summer", 
      image: "https://files.catbox.moe/fe8312" 
    }
  ];

  const autumn = [
    { 
      month: "September", 
      season: "Fall", 
      image: "https://files.catbox.moe/iryrjz" 
    },
    { 
      month: "October", 
      season: "Fall", 
      image: "https://files.catbox.moe/6rxbd7.jpg" 
    },
    { 
      month: "November", 
      season: "Fall", 
      image: "https://files.catbox.moe/vassv7.jpg" 
    }
  ];

  const winter = [
    { 
      month: "December", 
      season: "Winter", 
      image: "https://files.catbox.moe/5doy8b.jpg" 
    },
    { 
      month: "January", 
      season: "Winter", 
      image: "https://files.catbox.moe/68e1fb.jpg" 
    },
    { 
      month: "February", 
      season: "Winter", 
      image: "https://files.catbox.moe/czkggs.jpg"
     }
  ];

  function render(arr, container) {
    arr.forEach(item => {
      container.innerHTML += `
        <div class="itemInfo">
          <h4>${item.month}</h4>
          <img src="${item.image}" class="img-fluid rounded">
        </div>
      `;
    });
  }

  render(spring, springInsert);
  render(summer, summerInsert);
  render(autumn, fallInsert);
  render(winter, winterInsert);

});
