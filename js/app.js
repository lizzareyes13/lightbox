//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

//when thumbnail is clicked:
//set the src of image inside overlay to be the same as src of a clicked
//set the content of the h3 in the overlay to be the same as img alt
//show overlay

$("#image-gallery a").on("click", function(){
  e.preventDefault();
  $("#overlay img").attr("src", $(this).attr("href"));
  $("#overlay").fadeIn();
  var imgCaption = $(this).find("img").attr("alt");
  $("#overlay h3").html();
});
$("#overlay").on("click", function(){
  $("#overlay").fadeOut();
});
