

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
  themeToggler.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--theme-color", color);
  };
});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
// Form submission handler
document.querySelectorAll("form").forEach((form) => {
  form.onsubmit = (e) => {
    e.preventDefault(); 

   
    const inputs = form.querySelectorAll("input, select");
    let allFilled = true;

    inputs.forEach((input) => {
      if (
        input.type !== "submit" &&
        (input.value.trim() === "" || input.value === "Choose an Event" || input.value === "Choose a Domain ")
      ) {
        allFilled = false; 
      }
    });

    if (!allFilled) {
      const validationModal = document.getElementById("validationModal");
      validationModal.style.display = "flex";

     
      document.getElementById("closeValidationModal").onclick = () => {
        validationModal.style.display = "none";
      };
      return; 
    }

  
    const successModal = document.getElementById("successModal");
    successModal.style.display = "flex";

    // Clear all input fields and dropdowns in the form
    inputs.forEach((input) => {
      if (input.type === "text" || input.type === "email" || input.type === "tel") {
        input.value = ""; 
      } else if (input.tagName.toLowerCase() === "select") {
        input.selectedIndex = 0; 
      }
    });

    
    document.getElementById("closeSuccessModal").onclick = () => {
      successModal.style.display = "none";
    };
  };
});
