var slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls

function plusSlides(n) {
    var newIndex = slideIndex + n;
    showSlides(newIndex);
}

// Thumbnail image controls

function currentSlide(e) {

 var thumbnailItem = e.target.closest(".thumbnail-item");

 if (thumbnailItem) {
   showSlides(parseInt(thumbnailItem.getAttribute("data-action")));
 }
}

document
 .getElementsByClassName("thumbnail-items")[0]
 .addEventListener("click", currentSlide);

function showSlides(n) {
 var i;
 var slides = document.getElementsByClassName("mySlides");
 var thumbnailItems = document.getElementsByClassName("thumbnail-item");

 if (n === slideIndex) {
   return;
 } else {
   slideIndex = n;
 }

 if (n > slides.length) {
   slideIndex = 1;
 }

 if (n < 1) {
   slideIndex = slides.length;
 }

 for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";
 }

 for (i = 0; i < thumbnailItems.length; i++) {
   thumbnailItems[i].className = thumbnailItems[i].className.replace(
     " active",

     ""
   );
 }

 if (slides.length) {
   slides[slideIndex - 1].style.display = "block";
 }

 if (thumbnailItems.length) {
   thumbnailItems[slideIndex - 1].className += " active";
 }

}