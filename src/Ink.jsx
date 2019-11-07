import React from 'react';
import './Ink.css';
import $ from 'jquery';

function Ink() {

    $(document).ready( function() {
 
	

        var width = 100,
            perfData = window.performance.timing, 
            EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
            time = ((EstimatedTime/1000)%50) * 100
    
    
        var PercentageID = $(".percentage"),
                start = 0,
                end = 100,
                durataion = time;
                animateValue(PercentageID, start, end, durataion);
    
        function animateValue(id, start, end, duration) {
    
            var range = end - start,
              current = start,
              increment = end > start? 1 : -1,
              stepTime = Math.abs(Math.floor(duration / range)),
              obj = $(id);
    
    
            var timer = setInterval(function() {
                current += increment;
                $(obj).text(current);
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }
        
    
        
        setTimeout(function(){
            $('.preloader').fadeOut();
            
            $('.cd-transition-layer').addClass('closing').delay(1000).queue(function(){
                $(this).removeClass("visible closing opening").dequeue();
            });
            
        }, time);
            
        
    
    
        $(document).on("click", "a:not(.lightbox)", function () {
            var newUrl = $(this).attr("href");
            if (!newUrl || newUrl[0] === "#") {
                location.hash = newUrl;
                return;
            }
            $("html").fadeOut(function () {
                location = newUrl;
            });
            return false;
        });
        
    
        var paget = $(".page-title .title").text();
    
        $( ".page-title").append("<span></span>");
        $( ".page-title span").append(paget);
    
    
        
        $('.blog-post .blog-link').hover(function(){
            $(this).parent('.content-outter').parent('.blog-post').toggleClass('mousef');
            $(this).parent('.blog-post').toggleClass('mousef');
        });
     
    });  
    
    $(window).load( function() {
     
    
    function smokeeffect () { 
        var modalTrigger = $('.nav-icon'),
            transitionLayer = $('.cd-transition-layer'),
            transitionBackground = transitionLayer.children(),
            modalWindow = $('.full-menu');
    
        var frameProportion = 1.78, 
            frames = 25, 
            resize = false;
    
        setLayerDimensions();
        $(window).on('resize', function(){
            if( !resize ) {
                resize = true;
                (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
            }
        });
    
        modalTrigger.on('click', function(event){   
            event.preventDefault();
            transitionLayer.addClass('visible opening');
            var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
            setTimeout(function(){
                modalWindow.addClass('visible');
            }, delay);
        });
    
        modalWindow.on('click', '.modal-close', function(event){
            event.preventDefault();
            transitionLayer.addClass('closing');
            modalWindow.removeClass('visible');
            transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
                transitionLayer.removeClass('closing opening visible');
                transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
            });
        });
    
        function setLayerDimensions() {
            var windowWidth = $(window).width(),
                windowHeight = $(window).height(),
                layerHeight, layerWidth;
    
            if( windowWidth/windowHeight > frameProportion ) {
                layerWidth = windowWidth;
                layerHeight = layerWidth/frameProportion;
            } else {
                layerHeight = windowHeight*1.2;
                layerWidth = layerHeight*frameProportion;
            }
    
            transitionBackground.css({
                'width': layerWidth*frames+'px',
                'height': layerHeight+'px',
            });
    
            resize = false;
        }
    
    }
    smokeeffect()
         function homeh() {
            var hometext = $('.main')
    
            hometext.css({
                "height": $(window).height() + "px"
            });
        }
        homeh();
        $(window).resize(homeh);
    
    
        $( ".page-menu li:not(.social) a, .portfolio_filter ul li a").append( "<span></span>" );
    
        $('.nav-icon').on("click", function(){
                $(this).toggleClass('modal-close');
        });
     
     
         
    }); 
    
    return (
    <main>
<header>
	<div className="logo float-left">
		<a href="">MODERN</a>
	</div> 
	<div className="nav-icon float-right">
		<span></span>
		<span></span>
		<span></span>
	</div>
</header>

<div className="full-menu">
	<div className="fullmenu-content">
		<ul className="page-menu">
			<li><a className="active" href="index-2.html">Home</a></li>
			<li><a href="">About</a></li>
			<li><a href="">Blog Posts</a></li>
			<li><a href="">Contact</a></li>
			<li><a href="#">Buy Now</a></li>
			<li className="social">
				<a href="#"><img src="icons/social/twitter.svg" alt=""/></a>
				<a href="#"><img src="icons/social/dribbble.svg" alt=""/></a>
				<a href="#"><img src="icons/social/instagram.svg" alt=""/></a>
				<a href="#"><img src="icons/social/send.svg" alt=""/></a>
			</li>
		</ul>
	</div>
	<a href="#0" className="modal-close">Close</a>
</div>
<div className="cd-transition-layer visible opening"> 
	<div className="bg-layer"></div>
</div>

<div className="wrapper">
 
<section className="main">
	<div className="main-content">
        <span className="hello">Hello Everyone!</span>
		<h1 className="main-title">I'm Adil Ahmed and Creative<br/>
		Interactive Developer & UX Designer.</h1>
		<div className="social">
			<a href="#"><img src="icons/social/twitter.svg" alt=""/></a>
			<a href="#"><img src="icons/social/instagram.svg" alt=""/></a>
			<a href="#"><img src="icons/social/dribbble.svg" alt=""/></a>
			<a href="#"><img src="icons/social/send.svg" alt=""/></a>
		</div>
	</div>
	 </section>
     </div>
    </main>
    );
}

export default Ink;