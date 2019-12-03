//header
window.onscroll = function() {headerFixed()};
      
var header = document.getElementById("header-shadow");
//var searchToggle = document.getElementById("searchToggle");
var sticky = header.offsetTop;

function headerFixed() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    //searchToggle.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    //searchToggle.classList.remove("sticky");
  }
}
//searchToggle 
function searchToggle() {
  var searchBoxOpen = document.getElementById('searchBoxOpen');
  if (searchBoxOpen.style.display === "none") {
    searchBoxOpen.style.display = "block";
  } else {
    searchBoxOpen.style.display = "none";
  }
}
//jq start
$(document).ready(function () {
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