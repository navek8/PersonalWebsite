var lnStickyNavigation;

$(document).ready(function()
{	
	applyHeader();
	applyNavigation(); 
	applyResize();
});

function applyHeader()
{
	$('.jumbotron').css({ height: ($(window).height()) +'px' });
}	

function applyResize()
{
	$(window).on('resize', function() 
	{  
		$('.jumbotron').css({ height: ($(window).height()) +'px' });
	}); 
}

/* NAVIGATION FUNCTIONS */


function applyNavigation()
{
	applyClickEvent();
	applyNavigationFixForPhone();
/*	applyScrollSpy();
	applyStickyNavigation();*/
}

function applyClickEvent()
{
	    $('.nav li a').click(function(e) {

        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
        $('html, body').animate(
		{
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 400);
    });
}

function applyNavigationFixForPhone()
{
	$('.navbar li a').click(function(event) 
	{
		$('.navbar-collapse').removeClass('in').addClass('collapse');
	});
}

function applyScrollSpy()
{
	$('#navbar-example').on('activate.bs.scrollspy', function() 
	{
		window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
	});
}

function applyStickyNavigation()
{
	lnStickyNavigation = $('.scroll-down').offset().top + 20;
	
	$(window).on('scroll', function() 
	{  
		stickyNavigation();  
	});  
	
	stickyNavigation();
}

function stickyNavigation()
{         
	if($(window).scrollTop() > lnStickyNavigation) 
	{   
		$('body').addClass('fixed');  
	} 
	else 
	{  
		$('body').removeClass('fixed');   
	}  
}