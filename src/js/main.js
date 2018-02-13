document.addEventListener("DOMContentLoaded", function(event) {
  /**
  * Mobile menu
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
      this.classList.add("active");
      mob.mobMenu.style.display = "flex";
      //stop scroll propagation
    //  mob.html.style.cssText = `margin-right: 4px;`;
      mob.body.style.cssText = `

        overflow-y: hidden;
        position: fixed;`;
      //  top: ${-mob.windowScrollY}px;`;
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
     // e.preventDefault();
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
  //  mob.html.style.cssText = `margin-right: 0;`;
    mob.body.style.cssText = `

      overflow-y: scroll;
      position: inherit;`;
  //  window.scroll(0, mob.windowScrollY);
  }

;
});

