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
//upload user img => userInfo.html
// STEP 1: select element and register change event
const imagePreview = document.querySelector('[data-target="image-preview"]');
const spinner = document.querySelector('[data-target="spinner"]');
const fileUploader = document.querySelector('[data-target="file-uploader"]');
fileUploader.addEventListener("change", handleFileUpload);

async function handleFileUpload(e) {
  try {
    const file = e.target.files[0];
    setUploading(true);
    if (!file) return;

    const beforeUploadCheck = await beforeUpload(file);
    if (!beforeUploadCheck.isValid) throw beforeUploadCheck.errorMessages;

    const arrayBuffer = await getArrayBuffer(file);
    const response = await uploadFileAJAX(arrayBuffer);
    
    alert("File Uploaded Success");
    showPreviewImage(file);
  } catch (error) {
    alert(error);
    console.log("Catch Error: ", error);
  } finally {
    e.target.value = '';  // reset input file
    setUploading(false);
  }
}

// STEP 2: showPreviewImage with createObjectURL
// If you prefer Base64 image, use "FileReader.readAsDataURL"
function showPreviewImage(fileObj) {
  const image = URL.createObjectURL(fileObj);
  imagePreview.src = image;
}

// STEP 3: change file object into ArrayBuffer
function getArrayBuffer(fileObj) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    // Get ArrayBuffer when FileReader on load
    reader.addEventListener("load", () => {
      resolve(reader.result);
    });

    // Get Error when FileReader on error
    reader.addEventListener("error", () => {
      reject("error occurred in getArrayBuffer");
    });

    // read the blob object as ArrayBuffer
    // if you nedd Base64, use reader.readAsDataURL
    reader.readAsArrayBuffer(fileObj);
  });
}

// STEP 4: upload file throguth AJAX
// - use "new Uint8Array()"" to change ArrayBuffer into TypedArray
// - TypedArray is not a truely Array,
//   use "Array.from()" to change it into Array
function uploadFileAJAX(arrayBuffer) {
  // correct it to your own API endpoint
  return fetch("https://jsonplaceholder.typicode.com/posts/", {
    headers: {
      version: 1,
      "content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      imageId: 1,
      icon: Array.from(new Uint8Array(arrayBuffer))
    })
  })
    .then(res => {
      if (!res.ok) {
        throw res.statusText;
      }
      return res.json();
    })
    .then(data => data)
    .catch(err => console.log("err", err));
}

// STEP 5: Create before upload checker if needed
function beforeUpload(fileObject) {
  return new Promise(resolve => {
    const validFileTypes = ["image/jpeg", "image/png"];
    const isValidFileType = validFileTypes.includes(fileObject.type);
    let errorMessages = [];

    if (!isValidFileType) {
      errorMessages.push("You can only upload JPG or PNG file!");
    }

    const isValidFileSize = fileObject.size / 1024 / 1024 < 2;
    if (!isValidFileSize) {
      errorMessages.push("Image must smaller than 2MB!");
    }

    resolve({
      isValid: isValidFileType && isValidFileSize,
      errorMessages: errorMessages.join("\n")
    });
  });
}

function setUploading(isUploading) {
  if (isUploading === true) {
    spinner.classList.add("opacity-1");
  } else {
    spinner.classList.remove("opacity-1");
  }
}

function imageIsLoaded() { 
  alert(this.src);  // blob url
  // update width and height ...
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
  //$('#needs-validation').validate()
  //
  //qty = chainSelect('select#qty', '#changeOptiont');
  //Select Quantity > add to cart > change header cart number
  $("select#qty").change(function() {
    var selectedQty = $(this)
      .children("option:selected")
      .val();
    //alert("You have selected the qty - " + selectedQty);
    $("a.add-to-cart").click(function(event) {
      setTimeout(function() {
        $("a.cart > span").addClass("counter");
        $("a.cart > span.counter").text(selectedQty);
      }, 400);
      event.preventDefault();
    });
  });
//add jq step
// Initialize wizard
$("#example-basic").steps({
  headerTag: "h3",
  bodyTag: "section",
  transitionEffect: "slideLeft",
  autoFocus: true
});

//jq end
});