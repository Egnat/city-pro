const menuBtnn = document.querySelector('.hamburger-2');
const menuClosed = document.querySelector('.close-2');
const menuNavi = document.querySelector('.header-navigation-mob-2');

menuBtnn.addEventListener('click', () => {
 //menuNavi.classList.add('.header-navigation-mob-open');это нужно писать если делать по примеру ютюба , выезд меню сверху со свойством транслейт
 menuNavi.style.opacity = '1';//в примере был трансформ, я сделал опазити '1'
 //menuNavi.style.transform = 'translateY(-100%)';
 //alert('hi');
});

menuClosed.addEventListener('click', () => {
 //menuNav.classList.remove('.header-navigation-mob-open');это нужно писать если делать по примеру ютюба , выезд меню сверху со свойством транслейт 
 menuNavi.style.opacity = '0';//в примере был трансформ, я сделал опазити '0'
 //menuNavi.style.transform = 'translateY(0%)';
 //alert('hallo');
});

//https://www.youtube.com/watch?v=chJQofBSx94 ГАМБУРГЕР. МЕНЮ, 
//СПРЯТАННОЕ ПОД ПЛАШКОЙ ФРИЛАНСЕР ПО ЖИЗНИ