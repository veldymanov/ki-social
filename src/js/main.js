document.addEventListener("DOMContentLoaded", function(event) {
    /**
    * Mobile menu
    */
   const mob = {};
   mob.sandwichBtn = document.querySelector('.js-sandwich');
   mob.mobMenu = document.querySelector('.js-head-nav');
   mob.body = document.querySelector('body');
   mob.windowScroll = '';

   function hideMobileMenu(){
    mob.mobMenu.style.display = "none";
    mob.sandwichBtn.classList.remove('active');
    //scroll propagation
    mob.body.style.cssText = `overflow-y: auto; position: inherit;`;
    window.scroll(0, mob.windowScrollY);
   }

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
       mob.body.style.cssText = `overflow-y: hidden;
                                  position: fixed;
                                  top: ${-mob.windowScrollY}px;`;
     }
   });

   document.addEventListener('click', function(e){
     const check = mob.mobMenu.contains(e.target);
     if ( !mob.mobMenu.contains(e.target) ) {
       hideMobileMenu();
     }
   });
});

