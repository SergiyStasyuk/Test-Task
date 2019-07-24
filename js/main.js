$(function() {
    $('#photos').click(function() {
    	$('.articles').addClass('hidden');
    	$('#about').removeClass('active');
    	$('#photos').addClass('active');
    	$('.categories').removeClass('hidden');
    })
    $('#about').click(function() {
    	$('.articles').removeClass('hidden');
    	$('#about').addClass('active');
    	$('#photos').removeClass('active');
    	$('.categories').addClass('hidden');
    })
});