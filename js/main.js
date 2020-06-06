
function myFunction(x) {
  x.classList.toggle("header__btn-active");
};

$(function () {
  $('.header__btn').on('click', function () {

    $('.list').slideToggle();
    $('.header__btn').addClass('.header__btn-active');
  });

});


