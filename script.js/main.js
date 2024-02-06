//const newPhoto = document.querySelector('.newPhoto_group3');// при отключении пропадают все функции в js, не ясно почему, кроме слайдера  и акордионса
/*newPhoto.addEventListener('click', function loop(event) {
  event.stopPropagation();//чтоб событие не всплывало 
  const newPhoto = document.querySelector('.newPhoto_group3 img');
    newPhoto.style.cursor = "pointer";
  if (newPhoto !== null) { // если элемент найден
    newPhoto.setAttribute('src', 'public/images/Group-660.png');
    return true;
  } else { // иначе он не найден
    return false;
  }
});

newPhoto.addEventListener('mousemove', function loop(event) {
  event.stopPropagation();//чтоб событие не всплывало 
  const newPhoto = document.querySelector('.newPhoto_group3 img');
    newPhoto.style.cursor = "pointer";
  if (newPhoto !== null) { // если элемент найден
    newPhoto.setAttribute('src', 'public/images/Group-658.png');
    return true;
  } else { // иначе он не найден
    return false;
  }
});*/
////////////////////////////////////////////

//OPEN OVERLAY
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

//CHANGE PHOTO SECTION SERVICES
function change() { //Смена фоток при клике. В индекс штмл поставил onclick
  let newPhotoo = document.querySelector('.group1');
   newPhotoo.style.cursor = "pointer";
   if (newPhotoo.src.match("images/Group-656.png")) {
      newPhotoo.src = "images/change-1.png";
   }
   else {
      newPhotoo.src = "images/Group-656.png";
    }
    //alert('hi');
};

function changee() { //Смена фоток при клике. В индекс штмл поставил onclick
  let newPhotooo = document.querySelector('.group2');
   newPhotooo.style.cursor = "pointer";
   if (newPhotooo.src.match("images/Group-657.png")) {
      newPhotooo.src = "images/change-2.png";
   }
   else {
      newPhotooo.src = "images/Group-657.png";
    }
    //alert('hi');
};

function changeee() { //Смена фоток при клике. В индекс штмл поставил onclick
  let newPhoto = document.querySelector('.group3');
   newPhoto.style.cursor = "pointer";
   if (newPhoto.src.match("images/Group-658.png")) {
      newPhoto.src = "images/Group-660.png";
   }
   else {
      newPhoto.src = "images/Group-658.png";
    }
    //alert('hi');
};

function changeeee() { //Смена фоток при клике. В индекс штмл поставил onclick
  let newPhotoooo = document.querySelector('.group4');
   newPhotoooo.style.cursor = "pointer";
   if (newPhotoooo.src.match("images/Group-659.png")) {
      newPhotoooo.src = "images/change-4.png";
   }
   else {
      newPhotoooo.src = "images/Group-659.png";
    }
    //alert('hi');
};

//CHANGE PHOTO SECTION SERVICES - TABLIT
function changeeeee() { //Смена фоток при клике. В индекс штмл поставил onclick
  let newPhotooooo = document.querySelector('.group1-services');
   newPhotooooo.style.cursor = "pointer";
   if (newPhotooooo.src.match("images/Group-656.png")) {
      newPhotooooo.src = "images/change-1.png";
   }
   else {
      newPhotooooo.src = "images/Group-656.png";
    }
    //alert('hi');
};

function changeeeeee() { //Смена фоток при клике. В индекс штмл поставил onclick
  let newPhotoooooo = document.querySelector('.group2-services');
   newPhotoooooo.style.cursor = "pointer";
   if (newPhotoooooo.src.match("images/Group-657.png")) {
      newPhotoooooo.src = "images/change-2.png";
   }
   else {
      newPhotoooooo.src = "images/Group-657.png";
    }
    //alert('hi');
};

function changeeeeeee() { //Смена фоток при клике. В индекс штмл поставил onclick
  let newPhotooooooo = document.querySelector('.group3-services');
   newPhotooooooo.style.cursor = "pointer";
   if (newPhotooooooo.src.match("images/Group-658.png")) {
      newPhotooooooo.src = "images/Group-660.png";
   }
   else {
      newPhotooooooo.src = "images/Group-658.png";
    }
    //alert('hi');
};

function changeeeeeeee() { //Смена фоток при клике. В индекс штмл поставил onclick
  let newPhotoooooooo = document.querySelector('.group4-services');
   newPhotoooooooo.style.cursor = "pointer";
   if (newPhotoooooooo.src.match("images/Group-659.png")) {
      newPhotoooooooo.src = "images/change-4.png";
   }
   else {
      newPhotoooooooo.src = "images/Group-659.png";
    }
    //alert('hi');
};

//SLIDER-PORTFOLIO
let slideIndex = 1;
        
function positionSlides(n) {
  showSlides(slideIndex += n);
} 

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  //let dots = document.getElementsByClassName("dot");  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
/*for (let i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}*/
  slides[slideIndex -1].style.display = "flex";//"block"  
  //dots[slideIndex -1].className += " active";
}

showSlides(slideIndex);

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

btnPrev.addEventListener("click", () => {positionSlides(-1);});
btnNext.addEventListener("click", () => {positionSlides(1);});

//SLIDER-HEADER
let slideeIndex = 1;
        
function positionsSlidess(n) {
  showsSlidess(slideeIndex += n);
} 

function currentsSlidee(n) {
  showsSlidess(slideeIndex = n);
}

function showsSlidess(n) {
  let slidess = document.getElementsByClassName("mySlidess");
  let dots = document.getElementsByClassName("dot");  
  if (n > slidess.length) {slideeIndex = 1}    
  if (n < 1) {slideeIndex = slidess.length}
for (let i = 0; i < slidess.length; i++) {
  slidess[i].style.display = "none";
}
for (let i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
  slidess[slideeIndex -1].style.display = "block";//"flex"  
  dots[slideeIndex -1].className += " active";
}

showsSlidess(slideeIndex);

/*const btnPrevv = document.querySelector(".btn-prev-header");
const btnNextt = document.querySelector(".btn-next-header");

btnPrevv.addEventListener("click", () => {positionsSlidess(-1);});
btnNextt.addEventListener("click", () => {positionsSlidess(1);});*/

//SLIDER SERVICES TABLET
let slideeeIndex = 1;
        
function positionssSlidesss(n) {
  showssSlidesss(slideeeIndex += n);
} 

function currentssSlideee(n) {
  showssSlidesss(slideeeIndex = n);
}

function showssSlidesss(n) {
  let slidesss = document.getElementsByClassName("mySlidesss");
  let dotss = document.getElementsByClassName("dott");  
  if (n > slidesss.length) {slideeeIndex = 1}    
  if (n < 1) {slideeeIndex = slidesss.length}
for (let i = 0; i < slidesss.length; i++) {
  slidesss[i].style.display = "none";
}
for (let i = 0; i < dotss.length; i++) {
  dotss[i].className = dotss[i].className.replace(" active", "");
}
  slidesss[slideeeIndex -1].style.display = "flex";//"block"  
  dotss[slideeeIndex -1].className += " active";
}

showssSlidesss(slideeeIndex);

/*const btnPrevv = document.querySelector(".btn-prev-adventages");
const btnNextt = document.querySelector(".btn-next-adventages");

btnPrevv.addEventListener("click", () => {positionssSlidesss(-1);});
btnNextt.addEventListener("click", () => {positionssSlidesss(1);});*/

//SLIDER PORTFOLIO TABLET
let slideeeeIndex = 1;
        
function positionsssSlidessss(n) {
  showsssSlidessss(slideeeeIndex += n);
} 

function currentsssSlideeee(n) {
  showsssSlidessss(slideeeeIndex = n);
}

function showsssSlidessss(n) {
  let slidessss = document.getElementsByClassName("mySlidessss");
  let dotsss = document.getElementsByClassName("dottt");  
  if (n > slidessss.length) {slideeeeIndex = 1}    
  if (n < 1) {slideeeeIndex = slidessss.length}
for (let i = 0; i < slidessss.length; i++) {
  slidessss[i].style.display = "none";  
}
for (let i = 0; i < dotsss.length; i++) {
  dotsss[i].className = dotsss[i].className.replace(" active", "");
}
  slidessss[slideeeeIndex-1].style.display = "flex";//block
  dotsss[slideeeeIndex-1].className += " active";
}

showsssSlidessss(slideeeeIndex);

/*const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

btnPrev.addEventListener("click", () => {positionSlides(-1);});
btnNext.addEventListener("click", () => {positionSlides(1);});*
*/


//GAMBURGER https://www.youtube.com/watch?v=CQL8B3wRBA0

/*$(function () {
  $('.hamburger').click(function () {
   $('.header-navigation-mob').toggleClass('.show-menu')
  })
});*/  //no working

//https://www.youtube.com/watch?v=ZOa2k0jySh8&list=PLVTUJUbFu7UeD0HL7zOgkoe7fu_n0chaA&index=8
const menuBtn = document.querySelector('.hamburger');
const menuClose = document.querySelector('.close');
const menuNav = document.querySelector('.header-navigation-mob');

menuBtn.addEventListener('click', () => {
 //menuNav.classList.add('.header-navigation-mob-open');это нужно писать если делать по примеру ютюба , выезд меню сверху со свойством транслейт и в css тоже нужно сделать запись, у меня сделана в медиазапросе 768, но отключена
 menuNav.style.opacity = '1';//в примере был трансформ, я сделал опазити '1'
 //menuNav.style.transform = 'translateY(-100%)';
});

menuClose.addEventListener('click', () => {
 //menuNav.classList.remove('.header-navigation-mob-open');это нужно писать если делать по примеру ютюба , выезд меню сверху со свойством транслейт 
 menuNav.style.opacity = '0';//в примере был трансформ, я сделал опазити '0'
 //menuNav.style.transform = 'translateY(0%)';
});

/*const menuBtnn = document.querySelector('.hamburger-2');
const menuClosed = document.querySelector('.close-2');
const menuNavi = document.querySelector('.header-navigation-mob-2');

menuBtnn.addEventListener('click', () => {
 //menuNavi.classList.add('.header-navigation-mob-open');это нужно писать если делать по примеру ютюба , выезд меню сверху со свойством транслейт
 menuNavi.style.opacity = '1';//в примере был трансформ, я сделал опазити '1'
 //menuNavi.style.transform = 'translateY(-100%)';
 alert('hi');
});

menuClosed.addEventListener('click', () => {
 //menuNavi.classList.remove('.header-navigation-mob-open');это нужно писать если делать по примеру ютюба , выезд меню сверху со свойством транслейт 
 menuNavi.style.opacity = '0';//в примере был трансформ, я сделал опазити '0'
 //menuNavi.style.transform = 'translateY(0%)';
 alert('hallo');
});*/

//https://www.youtube.com/watch?v=chJQofBSx94 ГАМБУРГЕР. МЕНЮ, 
//СПРЯТАННОЕ ПОД ПЛАШКОЙ ФРИЛАНСЕР ПО ЖИЗНИ