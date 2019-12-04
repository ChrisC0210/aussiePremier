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
//error
// Example starter JavaScript for disabling form submissions if there are invalid fields
// Upon load..
window.addEventListener('load', () => {
  // Grab all the forms
  var forms = document.getElementsByClassName('needs-validation');
  
  // Iterate over each one
  for (let form of forms) {
  
    // Add a 'submit' event listener on each one
    form.addEventListener('submit', (evt) => {
    
      // check if the form input elements have the 'required' attribute  
      if (!form.checkValidity()) {
        evt.preventDefault();
        evt.stopPropagation();
        console.log('Bootstrap will handle incomplete form fields');
      } else {
        // Since form is now valid, prevent default behavior..
        evt.preventDefault();
        console.info('All form fields are now valid...');
      }
      
      form.classList.add('was-validated');
      
    });
    
  }
});
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
  //modal show
  // $(function (){
  //   if ($('.modal')) {
  //     //$('.main-nav').hide();
  //     $('.main-nav').addClass('navNone');
  //   } else {
  //     //$('.main-nav').show();
  //     $('.main-nav').removeClass('navNone');
  //   }
  //   });
  //
  // $(function () {
  //   if ($('#forgotPW').hasClass('show').modal('toggle')) {
  //     $('.main-nav').addClass('navNone');
  //   } else {
  //     //$('.main-nav').show();
  //     $('.main-nav').removeClass('navNone');
  //   }    
  // });
  //
  //error msg
  $('#needs-validation').validate()
  //jq end

});
//