$(document).ready(function () {
  $('.offer__link').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.offers__item').toggleClass('hover');
  });
});
