//jq start
$(document).ready(function () {
    $("#wizard").steps({
      headerTag: "h4",
      bodyTag: "section",
      transitionEffect: "fade",
      enableAllSteps: true,
      transitionEffectSpeed: 500,
      onStepChanging: function (event, currentIndex, newIndex) {
        if (newIndex === 1) {
          $('.steps ul').addClass('step-2');
        } else {
          $('.steps ul').removeClass('step-2');
        }
        if (newIndex === 2) {
          $('.steps ul').addClass('step-3');
        } else {
          $('.steps ul').removeClass('step-3');
        }
  
        if (newIndex === 3) {
          $('.steps ul').addClass('step-4');
          $('.actions ul').addClass('step-last');
        } else {
          $('.steps ul').removeClass('step-4');
          $('.actions ul').removeClass('step-last');
        }
        return true;
      },
      labels: {
        finish: "Order again",
        next: "Next",
        previous: "Previous"
      }
    });
    // Custom Steps Jquery Steps
    $('.wizard > .steps li a').click(function () {
      $(this).parent().addClass('checked');
      $(this).parent().prevAll().addClass('checked');
      $(this).parent().nextAll().removeClass('checked');
    });
    // Custom Button Jquery Steps
    $('.forward').click(function () {
      $("#wizard").steps('next');
    })
    $('.backward').click(function () {
      $("#wizard").steps('previous');
    })
    // Checkbox
    $('.checkbox-circle label').click(function () {
      $('.checkbox-circle label').removeClass('active');
      $(this).addClass('active');
    });
  //
  /* Set rates + misc */
  var taxRate = 0.05;
  var shippingRate = 15.00;
  var fadeTime = 300;


  /* Assign actions */
  $('.product-quantity input').change(function () {
    updateQuantity(this);
  });

  $('.product-removal button').click(function () {
    removeItem(this);
  });


  /* Recalculate cart */
  function recalculateCart() {
    var subtotal = 0;

    /* Sum up row totals */
    $('.product').each(function () {
      subtotal += parseFloat($(this).children('.product-line-price').text());
    });

    /* Calculate totals */
    var tax = subtotal * taxRate;
    var shipping = (subtotal > 0 ? shippingRate : 0);
    var total = subtotal + tax + shipping;

    /* Update totals display */
    $('.totals-value').fadeOut(fadeTime, function () {
      $('#cart-subtotal').html(subtotal.toFixed(2));
      $('#cart-tax').html(tax.toFixed(2));
      $('#cart-shipping').html(shipping.toFixed(2));
      $('#cart-total').html(total.toFixed(2));
      if (total == 0) {
        $('.checkout').fadeOut(fadeTime);
      } else {
        $('.checkout').fadeIn(fadeTime);
      }
      $('.totals-value').fadeIn(fadeTime);
    });
  }


  /* Update quantity */
  function updateQuantity(quantityInput) {
    /* Calculate line price */
    var productRow = $(quantityInput).parent().parent();
    var price = parseFloat(productRow.children('.product-price').text());
    var quantity = $(quantityInput).val();
    var linePrice = price * quantity;
    var productQuantityEl = document.querySelector(".product-quantity");

    /* Update line price display and recalc cart totals */
    productRow.children('.product-line-price').each(function () {
      $(this).fadeOut(fadeTime, function () {
        $(this).text(linePrice.toFixed(2));
        recalculateCart();
        $(this).fadeIn(fadeTime);
      });
    });
  }


  /* Remove item from cart */
  function removeItem(removeButton) {
    /* Remove row from DOM and recalc cart total */
    var productRow = $(removeButton).parent().parent();
    productRow.slideUp(fadeTime, function () {
      productRow.remove();
      recalculateCart();
    });
  }
  //jq end
});