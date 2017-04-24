$(document).ready(function(){
var tabArray = $('.tab-number');
var scrollArrow = $('.scroll');
tabArray.click(showTabs);
var count = 1;
scrollArrow.click(function(e){
	e.preventDefault();
	scrollTabs(count);
	count++;
	
})

if ($(tabArray[1]).attr('data-number') === '2'){
	borderAnimate();
}


function scrollTabs(count){
	var count = count;
	var tab = $($('.block')[count]);
	console.log(tab);
}


function showTabs(event){
	event.preventDefault();
	var activeTab = +($(this).attr('data-number'));
	var tab = $('.block')[activeTab-1];
	$(this).parent()
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

function borderAnimate(){
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




})

	