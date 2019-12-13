@extends('frontend.layouts.app', ['title' => 'Aussie Premier'])

@section('content')
<style>
    .update-product {
    padding: 4px 10px;
    border-radius: 2px;
    margin-left: 20px;
    cursor: pointer;
    width: 100%;
    border: solid 1px #fefefe;
    background-color: #707070;
    color: #fefefe;
    text-decoration: none;
  }
  .update-product:hover{
    text-decoration: none;
    color: #fefefe;
    background-color: #414141;
  }
  .remove-product:hover{
    text-decoration: none;
    color: #fefefe;
    background-color: #414141;
  }
    </style>
  <div class="container mt-4 mb-4">
    <!-- cart form start -->
    <div class=" cart-border">
      
        <div id=" ">
          <!-- SECTION 1 -->
          <h4></h4>
          <section>
            <!-- content start -->
            <div class="d-flex justify-content-center">
              <div class="col-11 text-r-1-3-1 gray-800">
                <h3 class="mb-4 text-r-4-4-4 gray-700">Step 1. Check Out</h3>
                <!-- product start -->
                <h5 class="mb-4 text-r-3-4-3 gray-900">Products</h5>
                <div class="mb-4">
                    <? if(count($items)==0){?>
                    <div>
                    <hr size="8px" align="center" width="100%">
                  </div>
                    <div class="product row d-flex justify-content-between">
                    <div class="product-image col-lg-2 col-md-2 col-sm-2">
                      
                    </div>
                    <div class="product-details">
                      <div class="product-title product-title text-r-1-4-1">Your Shopping Cart is empty</div>
                      
                    </div>
                    
                  </div>
                    
                  <!-- card end -->
                  <div>
                    <hr size="8px" align="center" width="100%">
                  </div>
                    <? }?>
              <? foreach($items as $item){?>
                    <form id="form_<?=$item['rowId']?>" action="{!! route('shoppingCart::frontUpdateCart', ['rowId'=>$item['rowId']]) !!}" method="Post">
                        {!! csrf_field() !!}
                  {!! method_field('POST') !!}
                  <div class="product row d-flex justify-content-between">
                    <div class="product-image col-lg-2 col-md-2 col-sm-2">
                      <img src="<?=$item['image_url']?>">
                    </div>
                    <div class="product-details">
                      <div class="product-title product-title text-r-1-4-1">{{ $item['cat_name']}}</div>
                      <p class="product-description">
                        <div> {{ $item['name'] }}</div>
                        
                      </p>
                    </div>
                    <div class="product-quantity">Quantity:
                      <input type="number" name="qty" value="<?=$item['qty']?>" min="1" max="5" style="width: 180px">
                    </div>
                    <div class="product-price"><?= moneyFormat($item['price'])?></div>
                    <div class="product-removal">
                      <a class="remove-product" href='{!! $item['remove_url'] !!}'>
                        Remove
                      </a>
                        <a class="update-product" href="#" onclick="$('#form_<?=$item['rowId']?>').submit()">
                        Update
                      </a>
                    </div>
                    
                    <div class="product-line-price"><?= moneyFormat($item['total'])?></div>
                  </div>
                        </form>
                  <!-- card end -->
                  <div>
                    <hr size="8px" align="center" width="100%">
                  </div>
              <? }?>
                  <!-- card start -->
                
                  <!-- price start -->
                  <div class="totals">
                  <div class="totals-item totals-item-total d-flex justify-content-between  text-r-2-4-2">
                      <label>Grand Total</label>
                      <div class="totals-value" id="cart-total">{{ moneyFormat($subTotal) }}</div>
                    </div>
                      <? if((new App\Http\Controllers\CartItemController)->hasDiscount()){?>
                      <div class="totals-item totals-item-total d-flex justify-content-between  text-r-2-4-2">
                          <label>Total After Discount(<?=(new App\Http\Controllers\CartItemController)->discountRate()?>%)</label>
                      <div class="totals-value" id="cart-total">{{ moneyFormat($total) }}</div>
                    </div>
                      <? }?>
                    <div class="totals-item d-flex justify-content-between">
                      <label>Shipping</label>
                      <div class="totals-value" id="cart-shipping">Free shipping for buying over $1000.00. <br>All delivery services will be delivered by SF express, buyers shall pay for the delivery charges upon delivery. </div>
                    </div>
                    
                  </div>
                  <!-- price end -->
                </div>
                <!-- product end -->
                <div>
                  <hr size="8px" align="center" width="100%">
                </div>
                <? if(count($items)>0){?>
                <form id="form_payment_method" action="{!! route('shoppingCart::frontUpdateMethod') !!}" method="Post">
                        {!! csrf_field() !!}
                  {!! method_field('POST') !!}
                <!-- payment start -->
                <div class="form-group mb-4 text-r-3-4-3 gray-900 form-inline" >
                  <label for="payment_method" class="mr-2">Payment Method : </label>
                  <select class="form-control" id="payment_method" name='payment_method'  required>
                    <option value='' disabled >Select Payment Method</option>
                    <option value="Paypal" <?=$payment_method=='Paypal'?'selected="selected"':''?>>Paypal</option>
                    <option value="Bankin" <?=$payment_method=='Bankin'?'selected="selected"':''?>>Bank-in</option>
                  </select>
                </div>
                <!-- payment end -->
                <div>
                  <hr size="8px" align="center" width="100%">
                </div>
                </form>
                <? }?>
              </div>
            </div>
            <div class="col-11 text-r-1-3-1 gray-800 m-2 p-4 ">
            </div>
            <!-- btn next start -->
            
            <div class="d-flex justify-content-end">
                
                
                <? if(count($items)>0){?>
              <div class="summary-checkout">
                <a href="#" class="col-2 cart-btn gray-btn text-r-3-4-3" onclick="$('#form_payment_method').submit()">NEXT</a>
              </div>
                  <? }?>
            </div>
            
          
            <!-- btn next wnd -->
            <!-- content end -->
          </section>
        </div>
    
    </div>
    <!-- cart form end -->
  </div>
 
  

@endsection
@section('scripts')
<script>
 
//        $("#changeOption").click(function(){
//            if($("#qty").val()<1){
//                alert("No product selected");
//            }else{
//                $("#cartForm").submit();
//            }
//        });
//        
//    });
    </script>
@endSection