$(document).ready(function(){
var tabArray = $('.tab-number');
tabArray.click(showTabs);

if ($(tabArray[1]).attr('data-number') === '2'){
	borderAnimate();
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

	