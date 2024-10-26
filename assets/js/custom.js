AOS.init();

$(document).ready(function($) {
	// Declare the body variable
	var $body = $("body");

	// Function that shows and hides the sidebar cart
	$(".cart-button, .close-button, #sidebar-cart-curtain").click(function(e) {
		e.preventDefault();
		
		// Add the show-sidebar-cart class to the body tag
		$body.toggleClass("show-sidebar-cart");

		// Check if the sidebar curtain is visible
		if ($("#sidebar-cart-curtain").is(":visible")) {
			// Hide the curtain
			$("#sidebar-cart-curtain").fadeOut(500);
		} else {
			// Show the curtain
			$("#sidebar-cart-curtain").fadeIn(500);
		}
	});
	
	// Function that adds or subtracts quantity when a 
	// plus or minus button is clicked
	$body.on('click', '.plus-button, .minus-button', function () {
		// Get quanitity input values
		var qty = $(this).closest('.qty').find('.qty-input');
		var val = parseFloat(qty.val());
		var max = parseFloat(qty.attr('max'));
		var min = parseFloat(qty.attr('min'));
		var step = parseFloat(qty.attr('step'));

		// Check which button is clicked
		if ($(this).is('.plus-button')) {
			// Increase the value
			qty.val(val + step);
		} else {
			// Check if minimum button is clicked and that value is 
			// >= to the minimum required
			if (min && min >= val) {
				// Do nothing because value is the minimum required
				qty.val(min);
			} else if (val > 0) {
				// Subtract the value
				qty.val(val - step);
			}
		}
	});
});

$('#banner-slider').owlCarousel({
  navigation : true,
     loop:true,
        nav:true,
        responsive: {
         0: {
           items: 1
         },
         576: {
           items: 1
         },
         768: {
           items: 1
         },
         1000: {
           items: 1
         }
       }
 })

 const $dropdown = $(".dropdown");
 const $dropdownToggle = $(".dropdown-toggle");
 const $dropdownMenu = $(".dropdown-menu");
 const showClass = "show";
 $(window).on("load resize", function() {
   if (this.matchMedia("(min-width: 768px)").matches) {
     $dropdown.hover(
       function() {
         const $this = $(this);
         $this.addClass(showClass);
         $this.find($dropdownToggle).attr("aria-expanded", "true");
         $this.find($dropdownMenu).addClass(showClass);
       },
       function() {
         const $this = $(this);
         $this.removeClass(showClass);
         $this.find($dropdownToggle).attr("aria-expanded", "false");
         $this.find($dropdownMenu).removeClass(showClass);
       }
     );
   } else {
     $dropdown.off("mouseenter mouseleave");
   }
 });

 window.document.onkeydown = function (e) {
   if (!e) {
     e = event;
   }
   if (e.keyCode == 27) {
     lightbox_close();
   }
 }
 function lightbox_open() {
   var lightBoxVideo = document.getElementById("VisaChipCardVideo");
   document.getElementById('light').style.display = 'block';
   document.getElementById('fade1').style.display = 'block';
   lightBoxVideo.play();
 }
 function lightbox_close() {
   var lightBoxVideo = document.getElementById("VisaChipCardVideo");
   document.getElementById('light').style.display = 'none';
   document.getElementById('fade1').style.display = 'none';
   lightBoxVideo.pause();
 }
 
 $('#blog-slider').owlCarousel({
   loop: true,
   margin: 26,
   nav: true,
   responsive: {
     0: {
       items: 1
     },
     576: {
       items: 2
     },
     768: {
       items: 3
     },
     1000: {
       items: 3
     }
   }
 })
 
 $('#customer-slider').owlCarousel({
   loop: true,
   margin: 24,
   nav: true,
   responsive: {
     0: {
       items: 1
     },
     576: {
       items: 2
     },
     767: {
       items: 1
     },
     992: {
       items: 2
     },
     1000: {
       items: 2
     }
   }
 })
 
 var btn = $('#button');
 $(window).scroll(function () {
   if ($(window).scrollTop() > 300) {
     btn.addClass('show');
   } else {
     btn.removeClass('show');
   }
 });
 btn.on('click', function (e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: 0
   }, '300');
 });
 
 $(window).on('load', function () {
   // Preloader
   $('.loader').fadeOut();
   $('.loader-mask').delay(350).fadeOut("slow");
 });
 
 $('.count').each(function () {
  $(this).prop('Counter',0).animate({
  Counter: $(this).text()
  }, {
  duration: 3300,
  easing: 'swing',
  step: function (now) {
   $(this).text(Math.ceil(now));
  }
  });
  });
/**
 * Progress bar animation by Hakan Havutcuoglu
 * https://codepen.io/havutcuoglu/pen/abMdvoq
 * This notice MUST stay intact in JS files and SCRIPT tags for free and legal usege.
 */

$(document).ready(function(){
	progress_bar();
});

function progress_bar() {
	var speed = 30;
	var items = $('.progress_bar').find('.progress_bar_item');
	
    items.each(function() {
        var item = $(this).find('.progress');
        var itemValue = item.data('progress');
        var i = 0;
        var value = $(this);
		
        var count = setInterval(function(){
            if(i <= itemValue) {
                var iStr = i.toString();
                item.css({
                    'width': iStr+'%'
                });
                value.find('.item_value').html(iStr +'%');
            }
            else {
                clearInterval(count);
            }
            i++;
        },speed);
    });
}
 
 
 $('#index2-customer-slider').owlCarousel({
   loop:true,
   margin:26,
   nav:true,
   navText: ["<i class='fas fa-arrow-left d-flex align-items-center justify-content-center'></i>", "<i class='fas fa-arrow-right d-flex align-items-center justify-content-center'></i>"],
   responsive:{
       0:{
           items:1
       },
       768:{
         items:2
       },
       992:{
           items:3
       },
       1000:{
           items:3
       }
   }
 })
 
 function Marquee(selector, speed) {
   const parentSelector = document.querySelector(selector);
   const clone = parentSelector.innerHTML;
   const firstElement = parentSelector.children[0];
   let i = 0;
   let marqueeInterval;
 
   parentSelector.insertAdjacentHTML("beforeend", clone);
   parentSelector.insertAdjacentHTML("beforeend", clone);
 
   function startMarquee() {
     marqueeInterval = setInterval(function () {
       firstElement.style.marginLeft = `-${i}px`;
       if (i > firstElement.clientWidth) {
         i = 0;
       }
       i = i + speed;
     }, 0);
   }
 
   function stopMarquee() {
     clearInterval(marqueeInterval);
   }
 
   parentSelector.addEventListener("mouseenter", stopMarquee);
   parentSelector.addEventListener("mouseleave", startMarquee);
 
   startMarquee();
 }
 
 var marqueeelement = document.querySelector(".marquee");
 if (typeof marqueeelement != "undefined" && marqueeelement != null) {
   window.addEventListener("load", () => Marquee(".marquee", 0.3));
 }
 var marquee_projectelement = document.querySelector(".marquee_project");
 if (
   typeof marquee_projectelement != "undefined" &&
   marquee_projectelement != null
 ) {
   window.addEventListener("load", () => Marquee(".marquee_project", 0.3));
 }
 
 $(document).ready(function() {
 
   var counters = $(".count");
   var countersQuantity = counters.length;
   var counter = [];
   
   for (i = 0; i < countersQuantity; i++) {
     counter[i] = parseInt(counters[i].innerHTML);
   }
   
   var count = function(start, value, id) {
     var localStart = start;
     setInterval(function() {
       if (localStart < value) {
         localStart++;
         counters[id].innerHTML = localStart;
       }
     }, 40);
   }
   
   for (j = 0; j < countersQuantity; j++) {
     count(0, counter[j], j);
   }
   });
   
   
   



 
   /**************************************/
//    var tag = document.createElement("script");
//  tag.src = "https://www.youtube.com/iframe_api";
 
//  var firstScriptTag = document.getElementsByTagName("script")[0];
//  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
//  // Get video ID
//  var vidId = document.getElementById("player").dataset.id;
 
//  // Build the player
//  var player;
//  function onYouTubeIframeAPIReady() {
//    player = new YT.Player("player", {
//      height: "390",
//      width: "640",
//      videoId: vidId,
//      events: { onReady: onPlayerReady }
//    });
//  }
 
 // ==== Variables for popup
 var modal = document.querySelector(".modal"),
   close = document.querySelector(".close-modal"),
   root = document.getElementsByTagName("html")[0];
 
 // Do stuff when player is ready
 function onPlayerReady(event) {
   document.querySelector(".play-video").addEventListener("click", function () {
     modal.classList.add("show-modal");
 
     // Play video
     setTimeout(function () {
       event.target.playVideo();
     }, 100);
   });
 
   // Close if outside box is clicked
   window.addEventListener("click", function (e) {
     if (e.target === modal) {
       modal.classList.remove("show-modal");
       root.classList.remove("no-scroll");
       event.target.pauseVideo();
     }
   });
 
   // Close if close button is clicked
   close.addEventListener("click", function () {
     modal.classList.remove("show-modal");
     root.classList.remove("no-scroll");
     event.target.pauseVideo();
   });
 }
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");
function toggleModal() {
    modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
if(trigger){

  trigger.addEventListener("click", toggleModal);
}
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");

if(btnContainer){
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

$(document).ready(function(){
  $(".hide-blog").slice(0, 3).show();
  if($(".hide-blog:hidden").length == 0) {
  $("#loadMore").css("display","none");
  }
  else {
  if($(".hide-blog").length > 3){
      $("#loadMore").css("display","inline-block");
  }
  else if($(".hide-blog").length <= 3){
      $("#loadMore").css("display","none");
  }
  }
  $("#loadMore").on("click", function(e){
  e.preventDefault();
  $(".hide-blog:hidden").slice(0, 3).slideDown();
  if($(".hide-blog:hidden").length == 0) {
      $("#loadMore").css("display","none");
  }
  else {
      if($(".hide-blog").length > 3){
      $("#loadMore").css("display","inline-block");
      }
      else if($(".hide-blog").length <= 3){
      $("#loadMore").css("display","none");
      }
  }
});
})