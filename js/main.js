$(document).ready(function() {
  const carousel = $('.carousel');
  const carouselItemWidth = carousel.find('.carousel-item').outerWidth(true);

  $('.next').on('click', function() {
    carousel.animate({ scrollLeft: '+=' + carouselItemWidth }, 300);
  });

  $('.prev').on('click', function() {
    carousel.animate({ scrollLeft: '-=' + carouselItemWidth }, 300);
  });
});
function toggleMenu() {
  var menu = document.querySelector('.menu');
  var contentArea = document.querySelector(".each__section");
  var CrossBtn = document.querySelector(".close-btn");


  menu.classList.toggle('active');
  contentArea.classList.toggle('activeContent');
  CrossBtn.classList.toggle('CrossBtn');

}

function closeMenu() {
  var menu = document.querySelector('.menu');
  var contentArea = document.querySelector(".each__section");
  var CrossBtn = document.querySelector(".close-btn");

  

  menu.classList.remove('active');
  contentArea.classList.remove('activeContent');
  CrossBtn.classList.toggle('CrossBtn');

} 
$(function () {
  $(".navParent").hover(function () {
    $(".navChild").stop().slideToggle("slow");
  });
  $(".navChild").hover(function () {
    $(this).css("display", "block");
  });
});
$(".center").slick({
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  centerPadding: "0px",
  speed: 500,
  variableWidth: true,
});
$(".center").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
  }
);
$(".center").on("afterChange", function (event, slick, currentSlide) {
});
$(".selling-cards").slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});


$(".brand-slider").slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300,
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// suggestions
$(".sggestion-slider").slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300,
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

new DataTable('#example');


function toggleNotificationList() {
  const notificationList = document.getElementById('notificationList');
  notificationList.style.display = notificationList.style.display === 'none' ? 'block' : 'none';
}

$(document).ready(function() {
  $(".main-form").submit(function(event) {
    
    // Prevent the default form submission
    event.preventDefault();

    // Clear any existing error messages
    $(".error-message").remove();

    // Check each input field for empty values
    $(".main-form input").each(function() {
      if ($(this).val().trim() === "") {
        // If the field is empty, display an error message
        $(this).after("<p class='error-message'>This field is required.</p>");
      }
    });

    // You can also add specific validation for file input here
    // For example, checking if the file is uploaded or the file type is correct

    // If there are no empty fields, you can proceed with form submission
    if ($(".error-message").length === 0) {
      this.submit(); // Uncomment this line to proceed with form submission
    }
  });
});

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

