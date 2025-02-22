"use strict";

//tabs

$( function() {
    $( "#tabs" ).tabs();
  } );

  //carousel from a jquery library,
$(function(){
    var front = $('.Front'),
        others = ['Left', 'Right'];
    
    $('.Carousel').on('click', '.Items', function() {
      var $this = $(this);
      
      $.each(others, function(i, cl) {
        if ($this.hasClass(cl)) {
          front.removeClass('Front').addClass(cl);
          front = $this;
          front.addClass('Front').removeClass(cl);
        }
      });
    });
  });

    
  /* SLIDER SOURCE CODE https://codepen.io/jurbank/pen/AGNwxK*/

  var $slide = $('.slide'),
    $slideGroup = $('.slide-group'),
    $bullet = $('.bullet');

var slidesTotal = ($slide.length - 1),
    current = 0,
    isAutoSliding = true;

$bullet.first().addClass('current');

var clickSlide = function() {
  //stop auto sliding
  window.clearInterval(autoSlide);
  isAutoSliding = false;

  var slideIndex = $bullet.index($(this));

  updateIndex(slideIndex);
};

var updateIndex = function(currentSlide) {
  if(isAutoSliding) {
    if(current === slidesTotal) {
      current = 0;
    } else {
      current++;
    }
  } else {
      current = currentSlide;
  }

  $bullet.removeClass('current');
  $bullet.eq(current).addClass('current');

  transition(current);
};

var transition = function(slidePosition) {
    $slideGroup.animate({
      'top': '-' + slidePosition + '00%'
    });
};

// album picker 

function clickButton1(){ // button 1
    document.querySelector("#product1").classList.toggle("currentItem");


    if(document.querySelector("#product1").classList.toggle("currentItem")== false){
        document.querySelector("#product1").classList.toggle("currentItem")
    }

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton2(){ // button 2
    document.querySelector("#product2").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== true){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton3(){ // button 3
    document.querySelector("#product3").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== true){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}


function clickButton4(){ // button 4
    document.querySelector("#product4").classList.toggle("hiddenItem"); 

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== true){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}


function clickButton5(){ // button 5
    document.querySelector("#product5").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== true){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton6(){ // button 6
    document.querySelector("#product6").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== true){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton7(){ // button 7
    document.querySelector("#product7").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== true){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton8(){ // button 8
    document.querySelector("#product8").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== true){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton9(){ // button 9
    document.querySelector("#product9").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== true){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton10(){ // button 10
    document.querySelector("#product10").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== true){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton11(){ // button 11
    document.querySelector("#product10").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== true){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton12(){ // button 12
    document.querySelector("#product10").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== true){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton13(){ // button 13
    document.querySelector("#product10").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== true){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton14(){ // button 14
    document.querySelector("#product10").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== true){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton15(){ // button 15
    document.querySelector("#product10").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== true){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton16(){ // button 16
    document.querySelector("#product10").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== true){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton17(){ // button 17
    document.querySelector("#product10").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== true){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== false){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton18(){ // button 18
    document.querySelector("#product10").classList.toggle("hiddenItem");

    if(document.querySelector("#product2").classList.toggle("hiddenItem")== false){
        document.querySelector("#product2").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product3").classList.toggle("hiddenItem")== false){
        document.querySelector("#product3").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product4").classList.toggle("hiddenItem")== false){
        document.querySelector("#product4").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product5").classList.toggle("hiddenItem")== false){
        document.querySelector("#product5").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product6").classList.toggle("hiddenItem")== false){
        document.querySelector("#product6").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product7").classList.toggle("hiddenItem")== false){
        document.querySelector("#product7").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product8").classList.toggle("hiddenItem")== false){
        document.querySelector("#product8").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product9").classList.toggle("hiddenItem")== false){
        document.querySelector("#product9").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product10").classList.toggle("hiddenItem")== false){
        document.querySelector("#product10").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product11").classList.toggle("hiddenItem")== false){
        document.querySelector("#product11").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product12").classList.toggle("hiddenItem")== false){
        document.querySelector("#product12").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product13").classList.toggle("hiddenItem")== false){
        document.querySelector("#product13").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product14").classList.toggle("hiddenItem")== false){
        document.querySelector("#product14").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product15").classList.toggle("hiddenItem")== false){
        document.querySelector("#product15").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product16").classList.toggle("hiddenItem")== false){
        document.querySelector("#product16").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product17").classList.toggle("hiddenItem")== false){
        document.querySelector("#product17").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#product18").classList.toggle("hiddenItem")== true){
        document.querySelector("#product18").classList.toggle("hiddenItem")
    }
}

function clickButton19(){ // button 19 project 1
    document.querySelector("#projectOne").classList.toggle("currentItem");


    if(document.querySelector("#projectOne").classList.toggle("hiddenItem")== true){
        document.querySelector("#projectOne").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#projectTwo").classList.toggle("hiddenItem")== false){
        document.querySelector("#projectTwo").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#projectThree").classList.toggle("hiddenItem")== false){
        document.querySelector("#projectThree").classList.toggle("hiddenItem")
    }
    }

function clickButton20(){ // button 20 project 2 
    document.querySelector("#projectTwo").classList.toggle("hiddenItem");

    if(document.querySelector("#projectTwo").classList.toggle("hiddenItem")== true){
        document.querySelector("#projectTwo").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#projectThree").classList.toggle("hiddenItem")== false){
        document.querySelector("#projectThree").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#projectOne").classList.toggle("hiddenItem")== false){
        document.querySelector("#projectOne").classList.toggle("hiddenItem")
    }
}

function clickButton21(){ // button 21 project 3 
    document.querySelector("#projectThree").classList.toggle("hiddenItem");

    if(document.querySelector("#projectOne").classList.toggle("hiddenItem")== false){
        document.querySelector("#projectOne").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#projectTwo").classList.toggle("hiddenItem")== false){
        document.querySelector("#projectTwo").classList.toggle("hiddenItem")
    }

    if(document.querySelector("#projectThree").classList.toggle("hiddenItem")== true){
        document.querySelector("#projectThree").classList.toggle("hiddenItem")
    }

}


    
// functions end

//product switcher buttons
document.getElementById("btn1").addEventListener("click",clickButton1);
document.getElementById("btn2").addEventListener("click",clickButton2);
document.getElementById("btn3").addEventListener("click",clickButton3);
document.getElementById("btn4").addEventListener("click",clickButton4);
document.getElementById("btn5").addEventListener("click",clickButton5);
document.getElementById("btn6").addEventListener("click",clickButton6);
document.getElementById("btn7").addEventListener("click",clickButton7);
document.getElementById("btn8").addEventListener("click",clickButton8);
document.getElementById("btn9").addEventListener("click",clickButton9);
document.getElementById("btn10").addEventListener("click",clickButton10);
document.getElementById("btn11").addEventListener("click",clickButton11);
document.getElementById("btn12").addEventListener("click",clickButton12);
document.getElementById("btn13").addEventListener("click",clickButton13);
document.getElementById("btn14").addEventListener("click",clickButton14);
document.getElementById("btn15").addEventListener("click",clickButton15);
document.getElementById("btn16").addEventListener("click",clickButton16);
document.getElementById("btn17").addEventListener("click",clickButton17);
document.getElementById("btn18").addEventListener("click",clickButton18);
document.getElementById("btn19").addEventListener("click",clickButton19);
document.getElementById("btn20").addEventListener("click",clickButton20);
document.getElementById("btn21").addEventListener("click",clickButton21);

$bullet.on( 'click', clickSlide);

var autoSlide = window.setInterval(updateIndex, 3500);
