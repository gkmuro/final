$(".slider").slider({

    // animation speed
    speed: 1000,
  
    // animation delay
    delay: 3000,
  
    // autoplay
    autoplay: true,
  
    // pause on hover
    pauseonhover: true,
  
    // shows navigation
    navigation: true,
  
    // shows pagination
    pagination: true,
  
    // or 'thumbnail'
    paginationType: 'dots',
  
    // initial slide
    initialslide: 1,
  
    // width/height
    width: '100%',
    height: 'auto',
  
    // or right
    direction: 'left',
  
    // is responsive
    responsive: true,
  
    // custom navigation buttons
    buttons: {
      prev: "<div class='prev slider-buttons'><span>&#8249;</span></div>",
      next: "<div class='next slider-buttons'><span>&#8250;</span></div>"
    }
    
  });