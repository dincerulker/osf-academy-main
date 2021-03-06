/* Current Year 
*******************************************************/

document.getElementById("current-year").innerHTML = new Date().getFullYear();

/* Current Year for mobile
*******************************************************/
document.getElementById("current-year-m").innerHTML = new Date().getFullYear();

/* Slick Carousel  
*******************************************************/
$(document).ready(function () {
  $('.slider-slick').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  });
});


/* Populer Items 
*******************************************************/

var product_list;

$.ajax({
  type: 'GET',
  url: './popular_items.json',
  dataType: 'json',
  async: false,
  success: function (list) {
    product_list = list;
  }
});

$(document).ready(function () {

  let itemsNumber = 0;

  $(".load-more").click(function () {

    if (itemsNumber < product_list.length) {
      $(".products-four:last")
        .after('<div class="row my-5 products-four">');

      for (let i = itemsNumber; i < itemsNumber + 4; i++) {
          
        if (i < product_list.length) {
          $(".products-four:last")
            .append('<div class="col-md-3 item-hover item-container">');
          $(".item-container:last")
            .append('<div class="card card-hover h-100 card-container">');
          $(".card-container:last")
            .append('<img src=" ' + product_list[i].url + ' " class="card-img-top bg-dark h-100 item-img" alt="populer-items">');
          $(".item-img:last")
            .after('<div class="card-body text-center item-card-bottom">');
          $(".item-card-bottom:last")
            .append('<p class="card-text item-name">' + product_list[i].product_name + '</p>');
          $(".item-name:last")
            .after('<p class="card-text item-price">' + product_list[i].price + '</p>');
          $(".item-card-bottom:last")
            .after('<div class="item-cover py-5">');
          $(".item-cover:last")
            .append('<div class="my-5 py-5 hover-icons">');
          $(".hover-icons:last")
            .append('<a class="mx-3 plus-icon"><i class="fas fa-plus-circle fa-5x"></i></a>');
          $(".plus-icon:last")
            .after('<a class="mx-3 heart-icon"><i class="fab fa-gratipay fa-5x text-danger"></i></a>');
        } else {
          break;
        }
      }
      itemsNumber += 4;
    }
  });
});

/* SLIDER FOR PRODUCTS MOBILE
*******************************************************/
$('.mobile-item-slider-m').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 2000,
  prevArrow: false,
  nextArrow: false
});



/* Featured Product Slick
*******************************************************/

$(function () {
  $('.featured-item').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '.prev_arrow',
    nextArrow: '.next_arrow'
  });
});

/* Featured Product Slick for Mobile
*******************************************************/
$(function() {
  $('.featured-item-mobile').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 5000,
      prevArrow: '.prev_arrow-m',
      nextArrow: '.next_arrow-m'
    });
});

/* Cart Badge Count
*******************************************************/
let cartCount = parseInt($('.cart-badge').text());

if (localStorage.getItem('cartCount')) {
  cartCount = parseInt(localStorage.getItem('cartCount')); // Get old count from cookie
  $('.cart-badge').text(cartCount);
}
/* Plus Icon Button */
$('.plus-icon').on({
  'click': function () {
    cartCount += 1;
    $('.cart-badge').text(cartCount);
    localStorage.setItem('cartCount', cartCount); // Saved card count from cookies
  }
});

/* Populer Items Buy Now Button */
$('.item-buy').on({
  'click': function () {
    cartCount += 1;
    $('.cart-badge').text(cartCount);
    localStorage.setItem('cartCount', cartCount);
  }
});

$('.item-buy-m').on({
  'click': function () {
    cartCount += 1;
    $('.cart-badge').text(cartCount);
    localStorage.setItem('cartCount', cartCount);
  }
});

$('.plus-icon-m').on({
  'click': function(){
    cartCount += 1;
    $('.cart-badge').text(cartCount);
    localStorage.setItem('cartCount', cartCount);
  }
});



/* Wish Badge Count
*******************************************************/
let wishCount = parseInt($('.wish-badge').text());

if (localStorage.getItem('wishCount')) {
  wishCount = parseInt(localStorage.getItem('wishCount')); // Get old count from cookie
  $('.wish-badge').text(wishCount);
}

$('.heart-icon').on({
  'click': function () {
    wishCount += 1;
    $('.wish-badge').text(wishCount);
    localStorage.setItem('wishCount', wishCount);
  }
});

$('.heart-icon-m').on({
  'click': function(){
    wishCount += 1;
    $('.wish-badge').text(wishCount);
    localStorage.setItem('wishCount', wishCount);
  }
});

/* Show - Hide Password
*******************************************************/
$(document).ready(function () {

  $("#show_hide_password a").on('click', function (event) {

    event.preventDefault();

    if ($('#show_hide_password input').attr("type") == "text") {

      $('#show_hide_password input').attr('type', 'password');
      $('#show_hide_password i').addClass("fa-eye-slash");
      $('#show_hide_password i').removeClass("fa-eye");

    } else if ($('#show_hide_password input').attr("type") == "password") {

      $('#show_hide_password input').attr('type', 'text');
      $('#show_hide_password i').removeClass("fa-eye-slash");
      $('#show_hide_password i').addClass("fa-eye");

    }
  });
});

/* Cookies Policy
*******************************************************/
const cookieContainer = document.querySelector(".cookie-section");
const acceptCookies = document.querySelector(".accept-cookies");

$(document).ready(function () {
  $(window).on('load', function () {
    setTimeout(function () { $('.cookie-section').modal('show'); },
      5000);
  });
});

acceptCookies.addEventListener("click", () => {
  localStorage.setItem("cookieDisplay", "true");
  Cookies.set("cookiesSet", "true");
  $('.cookie-section').modal('hide');
});

if (!localStorage.getItem("cookieDisplay")) {
  setTimeout(() => {
    cookieContainer.classList.add("active");
  }, 5000);
}

