document.addEventListener("DOMContentLoaded", function(event) {
  /**
  * Header mobile menu
  */
  const mob = {};
  mob.body = document.querySelector('body');
  mob.html = document.querySelector('html');
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
      e.preventDefault();
      e.stopPropagation();
      this.classList.toggle("active");
    });
  });
  mob.dropDownElements.forEach((dropDownElement) => {
    dropDownElement.addEventListener('click', function(e){
      e.preventDefault();
      this.classList.toggle("active");
    });
  });

  document.addEventListener('click', function(e){
    if ( !mob.mobMenu.contains(e.target) ) {
      hideMobileMenu();
    }

  });

  function hideMobileMenu(){
    mob.mobMenu.style.display = "none";
    mob.sandwichBtn.classList.remove('active');
    mob.sandwichBtn.classList.remove('sandwich-x');
    mob.sandwichBtn.classList.add('sandwich-open');
    mob.body.style.cssText = ` overflow-y: auto;  position: inherit;`;
  }

  function showMobileMenu(){
    mob.sandwichBtn.classList.add("active");
    mob.sandwichBtn.classList.remove('sandwich-open');
    mob.sandwichBtn.classList.add('sandwich-x');
    mob.mobMenu.style.display = "flex";
    mob.body.style.cssText = ` overflow-y: hidden; position: fixed;`;
  }

  /**
  * Footer mobile menu
  */
  mob.mobFootBtn = document.querySelector('.js-mob-foot-btn');
  mob.mobFootNav = document.querySelector('.js-foot-nav');
  mob.mobFootBtn.addEventListener('click', function(){
    mob.mobFootBtn.classList.toggle('active');
    mob.mobFootNav.classList.toggle('active');
  });
});

