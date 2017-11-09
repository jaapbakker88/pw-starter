$('.modal-button').on('click', function(e){
  e.preventDefault();
  $('.modal').toggleClass('is-active');
  $("body").addClass("modal-open");
});

$('.modal-close').on('click', closeModal);
$('.modal-background').on('click', closeModal);

function closeModal(e){
  e.preventDefault();
  $(this).parents('.modal').toggleClass('is-active');
  $("body").removeClass("modal-open");
}