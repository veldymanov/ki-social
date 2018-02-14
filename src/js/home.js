document.addEventListener("DOMContentLoaded", function(event) {
  // Footer mobile menu
  const home = {};
  home.mobFootBtn = document.querySelector('.js-mob-foot-btn');
  home.mobFootNav = document.querySelector('.js-foot-nav');

  home.mobFootBtn.addEventListener('click', function(){
    home.mobFootBtn.classList.toggle('active');
    home.mobFootNav.classList.toggle('active');
  });
});