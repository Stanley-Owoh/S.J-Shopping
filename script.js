//FOR SLIDE
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slider').forEach(slider => {
    const container = slider.parentElement;
    const next = container.querySelector('.nextBtn');
    const back = container.querySelector('.backBtn');

    if (!next || !back) return;

    next.addEventListener('click', () => {
      slider.scrollBy({ left: 260, behavior: 'smooth' });
    });

    back.addEventListener('click', () => {
      slider.scrollBy({ left: -260, behavior: 'smooth' });
    });
  });
});


//DROPDOWN
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");
  menuBtn.style.fontSize = ""

  // Toggle menu open/close
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // stop click from triggering the close event
    menu.classList.toggle("hidden");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("hidden")) {
      // if menu is open...
      const isClickInsideMenu = menu.contains(e.target);
      const isClickOnBtn = menuBtn.contains(e.target);

      if (!isClickInsideMenu && !isClickOnBtn) {
        menu.classList.add("hidden");
      }
    }
  });


  /* VERIFY LOGIN CODE */
  function verify() {
    const confirm = document.getElementById("message")
    const passmsg = document.getElementById("passmsg")
    const verifyaccount = document.getElementById("verifyaccount")
    const verifyEmail = document.getElementById("email").value.trim();
    const checkPassword = document.getElementById("password").value;


    confirm.style.color = "red";
    confirm.style.fontSize = "13px";
    passmsg.style.color = "red";
    passmsg.style.fontSize = "13px";


    // CHECK EMAIL
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailPattern.test(verifyEmail)) {
        confirm.innerHTML = "Please use a valid Gmail address";
        return;
    }

    // CHECK PASSWORD
    if (checkPassword.length < 6) {
        passmsg.innerHTML = "Password should be exactly 6 characters";
        return;
    }

    // VERIFY ACCOUNT
    verifylogin.innerHTML = "Welcome Back!";
    verifylogin.style.color = "green";

setTimeout(() => {
        window.location.href = "Store.html";
    }, 1000);

    setTimeout(() => {
        window.location.href = "Store.html";
    }, 1000);
    }