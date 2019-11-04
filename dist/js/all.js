window.onscroll = function () { HeaderFixed() };

//sticky var
var header = document.getElementById("HeaderFixed");
var sticky = header.offsetTop;
//sticky function
function HeaderFixed() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//jq start
$(document).ready(function () {
//search bar
$("#searchbar .search-label").on("click", function(e){
  e.preventDefault();
  $("#searchbar").toggleClass("collapsed");
});//click
//
});
//jq end