// ALl links disabled
document.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  })
})

// On scroll change header class
window.onscroll = function() {
  if(document.documentElement.scrollTop >=150 || document.body.scrollTop >=150) {
    document.querySelector('header').classList.add('scrolled-c');
  } else {
    document.querySelector('header').classList.remove('scrolled-c');  
  }
}

// Reveal
function reveal() {
  var elements = document.querySelectorAll("[data-reveal][data-reveal='true']");
  var length = elements.length;

  for(var count = 0; count < length; count++) {
    var offsetParentTop = 0;
    var temp = elements[count];
  do {
    if(!isNaN(temp.offsetTop)) {
      offsetParentTop += temp.offsetTop;
    }
  } while (temp = temp.offsetParent)
    var pageYOffset = window.pageYOffset;
    var viewportHeight = window.innerHeight;

    if(offsetParentTop > pageYOffset && offsetParentTop < pageYOffset + viewportHeight) {
      elements[count].classList.add('active')
    }
  }
}

reveal();
window.addEventListener("resize", reveal, false);
window.addEventListener("scroll", reveal, false);

// Form input on focus
document.querySelectorAll('input').forEach(function(input){
  input.addEventListener('focus', function(e) {
    e.target.previousElementSibling.classList.add('active')
  })
})

// Form input on focus out
document.querySelectorAll('input').forEach(function(input){
  input.addEventListener('focusout', function(e) {
    if(!e.target.value.length) {
      console.log(e.target.value)
      e.target.previousElementSibling.classList.remove('active')
    }
  })
})

// Form submit disabled
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault()
})

//Mobile menu Button
document.querySelector('.header-mob-menu').addEventListener('click', function() {
  document.querySelector('.header-link-cont').classList.toggle('active')
  document.querySelector('html').classList.toggle('no-scroll')
})

//Mobile menu links
document.querySelectorAll('.header-link').forEach(function(button){
  button.addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('.header-link-cont').classList.remove('active')
    document.querySelector('html').classList.remove('no-scroll')
  })
})