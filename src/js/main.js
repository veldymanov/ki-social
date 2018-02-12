document.addEventListener("DOMContentLoaded", function(event) {
  /**
  * Mobile menu
  */
  const mob = {};
  mob.sandwichBtn = document.querySelector('.js-sandwich');
  mob.mobMenu = document.querySelector('.js-head-nav');
  mob.body = document.querySelector('body');
  mob.windowScroll = '';
  mob.dropDownElements = document.querySelectorAll('.js-drop-down');

  mob.sandwichBtn.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();

    mob.windowScrollY = window.scrollY;

    if ( this.classList.contains('active')) {
      hideMobileMenu();
    } else {
      this.classList.add("active");
      mob.mobMenu.style.display = "flex";
      //stop scroll propagation
      mob.body.style.cssText = `overflow-y: hidden; position: fixed; top: ${-mob.windowScrollY}px;`;
    }
  });

  // click instead of hover
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

    const mobbb = e.target;
    //if () {}
  });

  function hideMobileMenu(){
    mob.mobMenu.style.display = "none";
    mob.sandwichBtn.classList.remove('active');
    //scroll propagation
    mob.body.style.cssText = `overflow-y: auto; position: inherit;`;
    window.scroll(0, mob.windowScrollY);
  }

;
});

