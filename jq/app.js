alert ( "js is working");

$(document).ready(function (){

  console.log("working")

  $("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(3500)
      .next()
      .fadeIn(3500)
      .end()
      .appendTo('#slideshow');
  },  3000);



});
