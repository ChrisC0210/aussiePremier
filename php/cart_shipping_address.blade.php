@extends('frontend.layouts.app', ['title' => 'Aussie Premier'])

@section('content')
  <div class="container mt-4 mb-4">
    <!-- cart form start -->
    <div class=" ">
      <form class="cart-border" action="{!! route('shoppingCart::frontShippingUpdate') !!}" name="shipping_form" method="POST">
              {!! csrf_field() !!}
                  {!! method_field('POST') !!}
        <div id="">
          <!-- SECTION 2 -->
          <h4></h4>
          <section>
            <!-- content start -->
            <div class="d-flex justify-content-center">
              <div class="col-12 text-r-1-3-1 gray-800">
                <h3 class="mb-4 text-r-4-4-4 gray-700">Step 2. Shipping & Billing</h3>
                <!-- content start -->
                <div class="pt-4 pb-4">
                  
                    <div class="d-flex justify-content-center">
                      <div class="container row">
                        
                        <div class="col-lg-6 col-sm-12">
                          <p>Shipping Address</p>
                          <section class="gray-600 text-r-1-3-1">
                            
                            <div class="form-group">
                              <label for="contact_name">Contact Name *</label>
                              <input name="contact_name" value="{{ $data['contact_name']}}" maxlength="255" type="text"  class="form-control" id="contact_name" placeholder=" " required>
                            </div>
                            <div class="form-group">
                              <label for="contact_email">Contact Email *</label>
                              <input name="contact_email" value="{{ $data['contact_email']}}" maxlength="255" type="text"  class="form-control" id="contact_email" placeholder=" " required>
                            </div>
                            
                            <div class="form-group">
                              <label for="contact_mobile">Mobile * </label>
                              <input type="text" class="form-control" id="contact_mobile" name="contact_mobile" placeholder=" " required value="{{ $data['contact_mobile'] }}">
                            </div>
                           
                            <div class="form-group">
                              <label for="country">Country</label>
                              Hong Kong
                            </div>
                            <div class="form-group">
                              <label name="region_id" for="region_id">Region</label>
                              <select class="form-control" id="region_id" name="region_id" required>
                                <option value="" >Select Your Region</option>
                                <? foreach(\App\Region::where('country_id', 88)->get() as $region){?>
                                <option value="<?=$region->region_id?>" <?=$region->region_id=$data['region_id']?'selected="selected"':''?>><?=$region->label_eng?></option>
                                <? }?>
                                
                              </select>
                            </div>
                            
                            <div class="form-group">
                              <label for="address_1">Address 1</label>
                               <input type="text" class="form-control" id="address_1" name="address_1" placeholder=" " required value="{{ $data['address_1'] }}" required>
                            </div>
                              <div class="form-group">
                              <label for="address_1">Address 2</label>
                               <input type="text" class="form-control" id="address_2" name="address_2" placeholder=" " required value="{{ $data['address_2'] }}">
                            </div>
                              <div class="form-group">
                              <label for="address_1">Address 3</label>
                               <input type="text" class="form-control" id="address_3" name="address_3" placeholder=" " required value="{{ $data['address_3'] }}">
                            </div>
                          </section>
                          
                          <div class=" ">
                              <section class="gray-600 text-r-1-3-1">
                              Already a member?
                              Please go to <a href="{!! route('member::showLoginForm', ['r'=>1]) !!}">here</a>
                              </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                </div>
                <!-- content end -->
                <!-- btn next start -->
                <div class="d-flex justify-content-between">
                    <? /*
                  <button type="button" class="col-2 cart-btn gray-btn text-r-3-4-3" data-toggle="modal"
                    data-target="#becomeMember">
                    NEXT
                  </button>*/?>
                    <a  href="{!! route('shoppingCart::frontShowCartListing') !!}" class="col-2 cart-btn gray-btn text-r-3-4-3">
                    Prev
                  </a>
                    <button type="submit" class="col-2 cart-btn gray-btn text-r-3-4-3">
                    NEXT
                  </button>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="becomeMember" tabindex="-1" role="dialog"
                  aria-labelledby="becomeMemberTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="becomeMemberTitle">
                          Not a member yet?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        Become Our member then you can keep shopping.
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">NO, thanks</button>
                        <a href="./login.html" class="btn btn-primary">Become a Member</a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- btn next end-->
                <!-- content end -->
				</div>
				</div>
          </section>
        </div>
      </form>
    </div>
    <!-- cart form end -->
  </div>
@endsection
