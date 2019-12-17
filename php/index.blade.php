@extends('frontend.layouts.app', ['title' => 'Aussie Premier'])

@section('content')
 <!-- banner start -->
  <div id="headerBannerControls" class="carousel slide content" data-ride="carousel" style="z-index: 1;">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./assets/img/img-homePage-banner.png" class="d-block hemePage-img" alt="1">
      </div>
      <div class="carousel-item">
        <img src="./assets/img/img-homePage-banner2.png" class="d-block hemePage-img" alt="2">
      </div>
      <div class="carousel-item">
        <img src="./assets/img/img-homePage-banner3.png" class="d-block hemePage-img" alt="3">
      </div>
    </div>
    <a class="carousel-control-prev" href="#headerBannerControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#headerBannerControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <!-- <div >
    <img class="hemePage-img" src="./assets/img/img-homePage-banner.png" alt="">
  </div> -->
  <!-- banner end -->
  <? /*
  <!-- content start -->
  <div class="container">
    <div style="z-index: -1;">
      <div class="mt-4 mb-2 text-center text-y-5-4-5 gray-800">News</div>
      <div class="d-flex justify-content-center mb-4">
        <div class="news-box">
          <div class="news-img"><img src="./assets/img/product/1.3.1-Honey.png" alt="news img"></div>
          <div class="news-content gray-700">
            <p class="text-r-2-5-2">ORGANIC LIGURIAN HONEY HAND & NAIL CREME 50ML</p>
            <p class="text-r-1-4-1">INTENSELY RICH ORGANIC HONEY AND JOJOBA OIL NOURISH THE DELICATE SKIN OF YOUR HANDS
              SOFT AND PAMPERED.</p>
            <p class="text-r-1-4-1">THE MELLOW, SUBTILE SWEETNESS OF PURE LIGURIAN HONEY IS INFUSED WITH THE COMPLEX
              VANILLA AND FRUIT-DRIVEN SCENTS OF ITALIAN BLOOD ORANGES.</p>
            <p class="text-r-1-5-1">The first 30 people helping us to answer the questionnaire and will <span
                class="ap-orange-600">get 1 for Free !</span></p>
            <a class="news-box-btn text-r-1-4-1"
              href="https://docs.google.com/forms/d/e/1FAIpQLSePaYFVV2JFuxIJoUF-CHcRWIUI297DfU2RAffyebOpzY20lw/viewform?vc=0&c=0&w=1"
              target="_blank">Answer Question</a>
          </div>
        </div>
      </div>
    </div>
  </div>
*/?>

@endsection
@push('script')

<script>


</script>
@endpush
