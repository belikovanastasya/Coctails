$(document).ready(function () {
	var tabArray = $('.tab-number');
	var scrollArrow = $('.scroll');
	var count = +($(tabArray[0]).attr('data-number'));
	/* variable for benefits tab*/
	var sliderDown = $('#arrow-down-icon');
	var sliderUp = $('#arrow-up-icon');
	var slids = $('.slider ul');
	var countSlider = 0;

	/* variable for reasons tab*/
	var next = $('#next');
	var prev = $('#prev');
	var slideNumber = 0;
	var slidsReasons = $('.slide');
	var activeTab = $('.nav');
/* variable for Scroll wheel event*/
	var scrollNumber = 0;
	
	/*scroll pages on wheel scroll*/
	function addOnWheel(elem, handler) {
      if (elem.addEventListener) {
        if ('onwheel' in document) {
          // IE9+, FF17+
          elem.addEventListener("wheel", handler);
        } else if ('onmousewheel' in document) {
          // устаревший вариант события
          elem.addEventListener("mousewheel", handler);
        } else {
          // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
          elem.addEventListener("MozMousePixelScroll", handler);
        }
      } else { // IE8-
        text.attachEvent("onmousewheel", handler);
      }
    }

    
    addOnWheel(wrapper, function(e) {

      var delta = e.deltaY || e.detail || e.wheelDelta;
     
      if (delta > 0) {scrollNumber += 100}
      else {scrollNumber -= 100}

      var activeSlide = scrollNumber/100;
  
  	scrollTabs(activeSlide);

      e.preventDefault();
    });


	tabArray.click(showTabs);

	scrollArrow.click(function (e) {
		e.preventDefault();
		scrollTabs(count);
		count++;
	})

	sliderDown.click(function(e){
		e.preventDefault();
		if((countSlider+1) < slids.length ){
		slider(countSlider+1);
		countSlider++	
		}
	})
	
	sliderUp.click(function(e){
		e.preventDefault();
		if((countSlider-1)>=0){
			countSlider--;
			slider(countSlider);
		}
		
	})


	next.click(function(e){
		e.preventDefault();
		if((slideNumber+1) < slidsReasons.length ){
		sliderReasons(slideNumber+1);
		slideNumber++	
		}
	})
	prev.click(function(e){
		e.preventDefault();
		if((slideNumber-1)>=0){
			slideNumber--;
			sliderReasons(slideNumber);
		}
		
	})
	activeTab.click(function(e){
		e.preventDefault();
		var currentSlide = +($(this).attr('data-slide'));
		sliderReasons(currentSlide);

	})


	if ($(tabArray[1]).attr('data-number') === '2') {
		borderAnimate();
	}
	if ($(tabArray[2]).attr('data-number') === '3') {
		borderAnimateBenefits();

	}




	function scrollTabs(count) {
		var count = count;
		var tab = $($('.block')[count]);
		var elem = $(tabArray[count]);
		show(elem, tab);
		checkSlide(count)
	
	}


	function checkSlide(count){
		if (count === 4) {
		partsAnimate();

	}

	}


	function showTabs(event) {
		event.preventDefault();
		var activeTab = +($(this).attr('data-number'));
		var tab = $('.block')[activeTab - 1];
		var elem = $(this);
		count = activeTab;
		show(elem, tab);
		checkSlide(activeTab-1)

	}

	function show(elem, tab) {
		elem.parent()
			.parent()
			.addClass('active')
			.siblings()
			.removeClass('active')
			.parents('div .container')
			.find(tab)
			.addClass('show animated fadeInDown')
			.siblings()
			.removeClass('show animated fadeInDown');
	}

	function slider(count){
		var currentSlide = $(slids[count]);
		currentSlide.addClass('active-slide animated fadeInDown')
		.siblings().removeClass('active-slide animated fadeInDown');
		$('.active-number').text(count+1)

	}

	function sliderReasons(count){
		var currentSlide = $(slidsReasons[count]);
		currentSlide.addClass('active-slide animated fadeInDown')
		.siblings().removeClass('active-slide animated fadeInDown');
		var currentTab = $(activeTab[count]);
		currentTab.addClass('active-tab').parent()
		.siblings()
		.children().removeClass('active-tab');
	}



	function borderAnimate() {
		var lineWrapOne = $('#wrap-one').children();
		var lineWrapTwo = $('#wrap-two').children();
		

		$(lineWrapOne[0]).addClass('animated-border-top whidth-border');
		$(lineWrapOne[1]).addClass('animated-border-right height-border');
		$(lineWrapOne[2]).addClass('animated-border-bottom whidth-border');
		$(lineWrapOne[3]).addClass('animated-border-left height-border');


		$(lineWrapTwo[0]).addClass('animated-border-top whidth-border-2');
		$(lineWrapTwo[1]).addClass('animated-border-right height-border-2');
		$(lineWrapTwo[2]).addClass('animated-border-bottom whidth-border-2');
		$(lineWrapTwo[3]).addClass('animated-border-left height-border-2');


	}
function borderAnimateBenefits(){

		var lineWrapThree = $('#wrap-three').children();
		$(lineWrapThree[0]).addClass('animated-border-top whidth-border-3');
		$(lineWrapThree[1]).addClass('animated-border-right height-border-3');
		$(lineWrapThree[2]).addClass('animated-border-bottom whidth-border-3');
		$(lineWrapThree[3]).addClass('animated-border-left height-border-3');
}
function partsAnimate(){
	$('#number-1').animate({width:50}, function(){
		$('#number-2').animate({width:50}, function(){
			$('#number-3').animate({width:50},function(){
				$('#number-4').animate({width:50},function(){
					$('#number-5').animate({width:50}, function(){
						$('#number-6').animate({width:50})
					})
				})
			})
		})
	})
	
}
})