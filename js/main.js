//login popup tonen
$(function() {
	$("#loginlink").click(function() {
			$("#loginformulier").fadeIn(700);
			$("#loginoverlay").fadeIn(700);
	});
	
	//login popup verbergen
	$("#closeloginlink").click(function() {
		$("#loginformulier").fadeOut(600);
		$("#loginoverlay").fadeOut(600);
	});
	
	
	
	
//Toevoegen aan Leesmap animatie	
//Bron: jQuery Fly to cart effect. A PEN BY Mahmoud Elmahdihttps
//url: codepen.io/elmahdim/pen/tEeDn
	$('#leesmaptoevoegen').on('click', function () {
        var leesmap = $('#leesmaplink');
        var image = $(".leesmap_image_1:visible").first();
        if (image) {
            var imgclone = image.clone()
                .offset({
                top: image.offset().top,
                left: image.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': image.height,
                    'width': image.width,
                    'z-index': '100'
            })
            .appendTo($('body'))
                .animate({
                'top': leesmap.offset().top + 10,
                    'left': leesmap.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                leesmap.effect("shake", {
                    times: 2
                }, 600);
            }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });
	
	
	
	
	
//Progressbar verhalen pagina's
//bronnen: http://jsfiddle.net/SnJXQ/61/
//view-source:https://tonnyloorbach.nl/over-mij (onderaan de pagina)

	$(window).scroll(function(event) {
		var paginaHeight = $(document).height();
		var viewHeight = window.innerHeight;

		paginaHeight = paginaHeight - viewHeight;
		
		var readPercentage = document.scrollingElement.scrollTop || document.documentElement.scrollTop;

		readPercentage = (readPercentage/paginaHeight)*100;
		readPercentage = readPercentage+'%';
		
		//progressbar updaten
		$('#progressbar').css('width', readPercentage);
	});

});





$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});