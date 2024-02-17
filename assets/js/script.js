'use strict';
// For crolling nav👌
document.addEventListener('scroll',() =>{
  const nav=document.querySelector('nav');
  if(window.scrollY>0){
    nav.classList.add('scrolled');
  } else{
    nav.classList.remove('scrolled');
  }
});
// Highlight nav a when on section👌
// Problem is that happens a little bit lately... :(
let sec=document.querySelectorAll('section');
let links = document.querySelectorAll('nav a');
window.onscroll =()=>{
  sec.forEach(section=>{
    let top=window.scrollY;
    let offset= section.offsetTop;
    let height= section.offsetHeight;
    let id= section.getAttribute('id');
    if(top>=offset && top<offset+height){
      links.forEach(link =>{
        link.classList.remove('active');
        document.querySelector('nav a[href*='+ id +']').classList.add('active');
      })
    }
    else {
      document.querySelector('nav a[href*=' + id + ']').classList.remove('active');
    }
  })
};
