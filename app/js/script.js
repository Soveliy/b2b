//cookies

  
$('.reviews__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed:15000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

$(".experts__slider").slick({
  dots:false,
  autoplay:true,
  autoplaySpeed:15000,

});



$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content",
    collapsible: true,
    active:false,
  });
} );


 

  $(function() {
    // Все вкладки с родителем `.js-list-item`.
    var $tabs = $('.tabs__list > .tabs__item');
    var $tabs__content = $(".tabs__content > .tabs__content-item")
    // Вешаем функцию обработчик на событие `click`.
    $tabs.on('click', function(event) {
      changeTab($(this).index());
    });
  
    // Индекс вкладки на которую будем переключаться.
    // Отсчет индексов в `javascript` ведется от нуля.
    // Если индекс равен 0, значит это первая вкладка.
    // Если индекс равен 1, значит это вторая вкладка.
    // Переключим вкладку на вторую ч/з три секунды.
    var timerId = setTimeout(changeTab, 3000, 1);
  
    // Функция смены текущей вкладки.
    function changeTab(index) {
      // $tabs.length - количество вкладок.
      // a % b – это остаток от деления a на b.
      index = index % $tabs.length;
      
      // Меняем класс у текущей вкладки.
      $tabs.removeClass('active').eq(index).addClass('active');
      $tabs__content.removeClass('active').eq(index).addClass('active');
  
      // Меняем фоновое изображение контейнера.
      
  
      
  
      // Очищаем предыдущий таймер, чтобы
      // не было зацикливаний при постоянных кликах.
      clearTimeout(timerId);
  
      // Переключим вкладку на следующую ч/з три секунды.
      // ++ - увеличиваем активную вкладку на единицу.
      timerId = setTimeout(changeTab, 10000, ++index);
    }
  });


  $(function() { 
    // Все вкладки с родителем `.js-list-item`.
    var $tabs = $('.presentation__button');
    var $tabs__content = $(".presentation__image-js")
    // Вешаем функцию обработчик на событие `click`.
    $tabs.on('click', function(event) {
      changeTab($(this).index());
    });
  
    // Индекс вкладки на которую будем переключаться.
    // Отсчет индексов в `javascript` ведется от нуля.
    // Если индекс равен 0, значит это первая вкладка.
    // Если индекс равен 1, значит это вторая вкладка.
    // Переключим вкладку на вторую ч/з три секунды.
    var timerId = setTimeout(changeTab, 3000, 1);
  
    // Функция смены текущей вкладки.
    function changeTab(index) {
      // $tabs.length - количество вкладок.
      // a % b – это остаток от деления a на b.
      index = index % $tabs.length;
      
      // Меняем класс у текущей вкладки.
      $tabs.removeClass('js-active').eq(index).addClass('js-active');
      $tabs__content.removeClass('js-active').eq(index).addClass('js-active');
  
      // Меняем фоновое изображение контейнера.
      
  
      
  
      // Очищаем предыдущий таймер, чтобы
      // не было зацикливаний при постоянных кликах.
      clearTimeout(timerId);
  
      // Переключим вкладку на следующую ч/з три секунды.
      // ++ - увеличиваем активную вкладку на единицу.
      timerId = setTimeout(changeTab, 10000, ++index);
    }
  });







var top_show = 500; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки
$(document).ready(function() {
  $(window).scroll(function () { // При прокрутке попадаем в эту функцию
    /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
    if ($(this).scrollTop() > top_show) $('.up-button').fadeIn();
    else $('.up-button').fadeOut();
  });
  $('.up-button').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
    /* Плавная прокрутка наверх */
    $('body, html').animate({
      scrollTop: 0
    }, delay);
  });
});




$(".numbox").mask("+7 (999) 999-99-99");


$(".basket-window__open-btn").click(function(){

  $(this).toggleClass("js-active");
  $(".basket-window").toggleClass("js-active");
 

});

$(".basket-window__close-btn").click(function(){

  $(".basket-window").toggleClass("js-active");
  $(".basket-window__open-btn").toggleClass("js-active");

});



  $(function(){
    $('a[href^="#"]').on('click', function(event) {
      // отменяем стандартное действие
      event.preventDefault();
      
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      /*
      * sc - в переменную заносим информацию о том, к какому блоку надо перейти
      * dn - определяем положение блока на странице
      */
      
      $('html, body').animate({scrollTop: dn}, 1000);
      
      /*
      * 1000 скорость перехода в миллисекундах
      */
    });
  });


 
  


  
  $(document).ready(function() {
  

    $(".call-btn__title").click(function(){
      $("#modal_call_back").arcticmodal();
    });
    
    $(".callback__checkbox a,.modal_text_but-js,.left_box_cookies a").click(function(){
      $("#modal_text_info").arcticmodal();
    });
    
});

$(document).ready(function() {
  $(".basket-window").delay(5000).show(300);
});



//cookies
$(function() {
// Проверяем запись в куках о посещении
// Если запись есть - ничего не происходит
if (!$.cookie('hide_cookies')) {
// если cookie не установлено появится окно
// с задержкой 5 секунд
var delay_popup = 1000;
setTimeout("document.querySelector('.fixed_cookies_block').style.display='grid'", delay_popup);
}
$.cookie('hide_cookies', true, {
// Время хранения cookie в днях
expires: 30,
path: '/'
});
});
// Закрытие полосы cookie
$('.fixed_cookies_block .close_cookies').click(function(){
$('.fixed_cookies_block').fadeOut();
});








$(window).load(function(){
  $("#twenty-twenty").twentytwenty({
  });
});



$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().parent().find('input');
    var count = parseInt($input.val()) - 1 + " шт.";
    count = count < 1 + " шт." ? 1 + " шт.": count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().parent().find('input');
    $input.val(parseInt($input.val()) + 1 + " шт.");
    $input.change();
    return false;
  });
});



$(".burger").click(function(){

  $(".burger").toggleClass("active");
  $(".header__menu").slideToggle(300);
  $(".header__menu").toggleClass("active");
  

});

  
  












$(window).on('resize', function(event){
	windowSize = $(window).width(); 
});




      

  $('.header__item-link').click(function(){
    var windowSize = $(window).width(); 
    if(windowSize < 1441){
      $(".header__menu").slideToggle(300);
      $(".header__menu").removeClass("active");
      $(".burger").removeClass("active");
    }
   
    
  });
  
