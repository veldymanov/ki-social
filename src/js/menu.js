document.addEventListener("DOMContentLoaded", function(event) {
  const mob = {};
  mob.body = document.querySelector('body');
  mob.sandwichBtn = document.querySelector('.js-sandwich');
  mob.mobMenu = document.querySelector('.js-head-nav');
  mob.windowScroll = '';
  mob.dropDownElements = document.querySelectorAll('.js-drop-down');
  mob.dropDownMenuItemElements = document.querySelectorAll('.js-drop-down-menu-item');

  mob.sandwichBtn.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();

    mob.windowScrollY = window.scrollY;

    if ( this.classList.contains('active')) {
      hideMobileMenu();
    } else {
      showMobileMenu()
    }
  });

  // click instead of hover
  mob.dropDownMenuItemElements.forEach((dropDownMenuItemElement) => {
    dropDownMenuItemElement.addEventListener('click', function(e){
      if (window.innerWidth <= 900) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.toggle("active");
      }
    });
  });
  mob.dropDownElements.forEach((dropDownElement) => {
    dropDownElement.addEventListener('click', function(e){
      if (window.innerWidth <= 900) {
        e.preventDefault();
        this.classList.toggle("active");
      }
    });
  });

  document.addEventListener('click', function(e){
    if ( !mob.mobMenu.contains(e.target) && mob.sandwichBtn.classList.contains('active')) {
      hideMobileMenu();
    }
  });

  function hideMobileMenu(){
    mob.mobMenu.style.display = "none";
    mob.sandwichBtn.classList.remove('active');
    mob.sandwichBtn.classList.remove('sandwich-x');
    mob.sandwichBtn.classList.add('sandwich-open');
    mob.body.style.cssText = `overflow-y: auto;  position: inherit;`;
  }

  function showMobileMenu(){
    mob.sandwichBtn.classList.add("active");
    mob.sandwichBtn.classList.remove('sandwich-open');
    mob.sandwichBtn.classList.add('sandwich-x');
    mob.mobMenu.style.display = "flex";
    mob.body.style.cssText = ` overflow-y: hidden; position: fixed;`;
  }
});

