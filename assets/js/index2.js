'use strict';
var dropdownBtn = document.querySelectorAll('.dropdown');
let iconDrop = null;
let lastOpened = null; //Add this for toggling dropdown

dropdownBtn.forEach(btn => btn.addEventListener('click', function() {
  var dropCont = this.nextElementSibling;
  let icon = this.querySelector('.icon-right');
  icon.classList.toggle("down");
  dropCont.classList.toggle("show");

  //Add this for toggling dropdown
  if (lastOpened && lastOpened !== dropCont)
    lastOpened.classList.remove("show");
  lastOpened = dropCont;

  if (iconDrop && iconDrop !== icon)
    iconDrop.classList.remove("down");
  iconDrop = icon;
}));

document.addEventListener('scroll',() =>{
  const nav=document.querySelector('header');
  if(window.scrollY>0){
    nav.classList.add('scrolled');
  } else{
    nav.classList.remove('scrolled');
  }
});
