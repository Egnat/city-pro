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

//CHANGE PHOTO
function change() { //Смена фоток при клике. В индекс штмл поставил onclick
  let newPhotoo = document.querySelector('.group1');
   newPhotoo.style.cursor = "pointer";
   if (newPhotoo.src.match("public/images/Group-656.png")) {
      newPhotoo.src = "public/images/change-1.png";
   }
   else {
      newPhotoo.src = "public/images/Group-656.png";
    }
    //alert('hi');
};

function changee() { //Смена фоток при клике. В индекс штмл поставил onclick
  let newPhotooo = document.querySelector('.group2');
   newPhotooo.style.cursor = "pointer";
   if (newPhotooo.src.match("public/images/Group-657.png")) {
      newPhotooo.src = "public/images/change-2.png";
   }
   else {
      newPhotooo.src = "public/images/Group-657.png";
    }
    //alert('hi');
};

function changeee() { //Смена фоток при клике. В индекс штмл поставил onclick
  let newPhoto = document.querySelector('.group3');
   newPhoto.style.cursor = "pointer";
   if (newPhoto.src.match("public/images/Group-658.png")) {
      newPhoto.src = "public/images/Group-660.png";
   }
   else {
      newPhoto.src = "public/images/Group-658.png";
    }
    //alert('hi');
};

function changeeee() { //Смена фоток при клике. В индекс штмл поставил onclick
  let newPhotoooo = document.querySelector('.group4');
   newPhotoooo.style.cursor = "pointer";
   if (newPhotoooo.src.match("public/images/Group-659.png")) {
      newPhotoooo.src = "public/images/change-4.png";
   }
   else {
      newPhotoooo.src = "public/images/Group-659.png";
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