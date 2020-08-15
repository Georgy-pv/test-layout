$(document).ready(function() {

    const searchHeader = document.querySelector('.header_search');
    const body = document.querySelector('body');

    
    searchHeader.addEventListener('click', function(e){
        e.stopPropagation();
        this.classList.add('header_search-active')
    });
    body.addEventListener('click', function(){
        searchHeader.classList.remove('header_search-active')
    });

    const searchFaq = document.querySelector('.faq_search-disabled');
    
    
    searchFaq.addEventListener('click', function(e){
        e.stopPropagation();
        this.classList.add('faq_search-active')
    })
    body.addEventListener('click', function(){
        searchFaq.classList.remove('faq_search-active')
    })





    $('.main-screen_slider').slick({
        nextArrow: false,
        prevArrow: false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        infinite: true
    });

    $('.for_family_content').slick({
        arrows: true,
        nextArrow:'<button class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        prevArrow: '<button class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    });
    
    $('.events_content').slick({
        arrows: true,
        nextArrow:'<button class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        prevArrow: '<button class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    });


});
