
jQuery( function ( $ ) {
    //#region ToTop
    let toTop = $(".to-top");
    var windowScroll = $(window);
    windowScroll.on("scroll", function(){
        200 < windowScroll.scrollTop() ? toTop.addClass("show") : toTop.removeClass("show");
    });
    toTop.on("click", function(e){
        e.preventDefault(),
        $("html, body").animate({
            scrollTop: 100
        },100);
    });
    //#endregion
    $( document ).on( 'click', '.quantity .minus, .quantity .plus', function ( e ) {
      let target = $( e.target ),
          qty    = target.closest( '.quantity' ).find( '.input-text.qty' ),
          min, max, step, value;

      if ( qty.length ) {
          min  = qty.attr( 'min' ) || 0;
          max  = qty.attr( 'max' ) || 0;
          step = qty.attr( 'step' ) || 1;
          min  = parseInt( min );
          max  = parseInt( max );
          step = parseInt( step );
          value = parseInt( qty.val() );

          if ( target.is( '.plus' ) ) {
              value += step;
          } else {
              value -= step;
          }

          value = Math.max( min, value );
          if ( max ) {
              value = Math.min( max, value );
          }

          qty.val( value ).change();
      }
    });
    // #region Cart Menu & Small Menu\\

    var cartMenu = $(".cart-menu-full");
    var cart = $(".minicart-wrap");
    var cartMenuOverlay = $(".cart-menu-overlay");
    var body = $("body");
    var cartBtnClose = $(".btn-close-custom");
    var smallMenu = $(".menu-sm-full");
    var smallMenuCloseBtn = $(".menu-sm-full .button-close")
    var smallMenuOpenBtn = $(".small-menu-open-btn");
        

    cart.on("click", function(){

        cartMenu.addClass("open");
        cartMenuOverlay.addClass("open");
        body.addClass("body-overflow-hidden");
    });

    
    cartBtnClose.on("click", function(){
        cartMenu.removeClass("open");
        cartMenuOverlay.removeClass("open");
        body.removeClass("body-overflow-hidden");
    });

    cartMenuOverlay.on("click", function(){
        cartMenu.removeClass("open");
        smallMenu.removeClass("open-menu");
        cartMenuOverlay.removeClass("open");
        body.removeClass("body-overflow-hidden");
    });

    smallMenuOpenBtn.on("click", function(){

        smallMenu.addClass("open-menu");
        cartMenuOverlay.addClass("open");
        body.addClass("body-overflow-hidden");
    });

    
    smallMenuCloseBtn.on("click", function(){
        smallMenu.removeClass("open-menu");
        cartMenuOverlay.removeClass("open");
        body.removeClass("body-overflow-hidden");
    });
  
      // #endregion Cart Menu & Small Menu End \\
    // #region Cart Menu & Small Menu\\

    var cartMenu = $(".cart-menu-full");
    var cart = $(".minicart-wrap");
    var cartMenuOverlay = $(".cart-menu-overlay");
    var body = $("body");
    var cartBtnClose = $(".btn-close-custom");
    var smallMenu = $(".menu-sm-full");
    var smallMenuCloseBtn = $(".menu-sm-full .button-close")
    var smallMenuOpenBtn = $(".small-menu-open-btn");
    

    cart.on("click", function(){

        cartMenu.addClass("open");
        cartMenuOverlay.addClass("open");
        body.addClass("body-overflow-hidden");
    });

    
    cartBtnClose.on("click", function(){
        cartMenu.removeClass("open");
        cartMenuOverlay.removeClass("open");
        body.removeClass("body-overflow-hidden");
    });

    cartMenuOverlay.on("click", function(){
        cartMenu.removeClass("open");
        smallMenu.removeClass("open-menu");
        cartMenuOverlay.removeClass("open");
        body.removeClass("body-overflow-hidden");
    });

    smallMenuOpenBtn.on("click", function(){

        smallMenu.addClass("open-menu");
        cartMenuOverlay.addClass("open");
        body.addClass("body-overflow-hidden");
    });

   
    smallMenuCloseBtn.on("click", function(){
        smallMenu.removeClass("open-menu");
        cartMenuOverlay.removeClass("open");
        body.removeClass("body-overflow-hidden");
    });

// #endregion Cart Menu & Small Menu End \\


    const dummyData = [
        {
        id:1,
        image: "href/hgjh/svbfjh/", 
        title: "favorites tapicka" , 
        }
    ]; 
    const AddFavorites = (e) => {
        e.preventDefault();
        const stringyData = JSON.stringify(dummyData);
        window.localStorage.setItem("favorites" , stringyData );
    }
    let favoriteBtn = $("#favorite").on("click" , AddFavorites);

    const getFavorites = () => {
        // e.preventDefault();
        const stringyData = window.localStorage.getItem("favorites");
        let resultData ; 

        if(stringyData){
            resultData = JSON.parse(stringyData); 
        }

        return resultData.length ; 
    }

    $("#getWishlist").html(`<p>${getFavorites()}</p>`);




    //Home Slider
    let arrowIconLeft = '<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\'><svg height="50px" id="Layer_1" style="enable-background:new 0 0 50 50;" version="1.1" viewBox="0 0 512 512" width="50px" color="#fff" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "/></svg>';

    let slides = document.querySelectorAll('.slide-ana div');
    let slideSayisi = slides.length;


    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    prev.innerHTML = arrowIconLeft;
    next.innerHTML = arrowIconLeft;
    next.querySelector('svg').style.transform = 'rotate(180deg)';


    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform = "translateX("+100*(index)+"%)";
    }
    let loop = 0 + 1000*slideSayisi;

    function goNext(){
        loop++;
                for (let index = 0; index < slides.length; index++) {
                    const element = slides[index];
                    element.style.transform = "translateX("+100*(index-loop%slideSayisi)+"%)";
                }
    }

    function goPrev(){
        loop--;
                for (let index = 0; index < slides.length; index++) {
                    const element = slides[index];
                    element.style.transform = "translateX("+100*(index-loop%slideSayisi)+"%)";
                }
    }

    next.addEventListener('click',goNext);
    prev.addEventListener('click',goPrev);
    document.addEventListener('keydown',function(e){
        if(e.code === 'ArrowRight'){
            goNext();
        }else if(e.code === 'ArrowLeft'){
            goPrev();
        }
    });



} );