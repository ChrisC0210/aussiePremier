window.onscroll = function () { HeaderFixed() };

//sticky var
var header = document.getElementById("HeaderFixed");
//var sticky = header.offsetTop;
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
//
$(function() {
	$('#main-menu').smartmenus({
		subMenusSubOffsetX: 0,
		subMenusSubOffsetY: -5
	});
});
//jQuery Zoom
// $(function () {
//   $('#product-zoom').zoom();
// });
//
  // SmartMenus init
  $(function () {
    $('#main-menu').smartmenus({
      subMenusSubOffsetX: 1,
      subMenusSubOffsetY: -8
    });
  });

  // SmartMenus mobile menu toggle button
  $(function () {
    var $mainMenuState = $('#main-menu-state');
    if ($mainMenuState.length) {
      // animate mobile menu
      $mainMenuState.change(function (e) {
        var $menu = $('#main-menu');
        if (this.checked) {
          $menu.hide().slideDown(250, function () { $menu.css('display', ''); });
        } else {
          $menu.show().slideUp(250, function () { $menu.css('display', ''); });
        }
      });
      // hide mobile menu beforeunload
      $(window).bind('beforeunload unload', function () {
        if ($mainMenuState[0].checked) {
          $mainMenuState[0].click();
        }
      });
    }
  });
//jq end
});