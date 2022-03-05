$(function(){
  $submitBtn.on('submit',function(){
    Event.preventDefault();
    $('.ul').append('<li>');
  });
});