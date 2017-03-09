var curSlide = 0;
var rightFlag = false;
var leftFlag = false;
var scrollFlag = true;
var eventFlag = false;

(function ($) {
    speechVisible();
    speechCrossClose();
    redTextAnimcount();
    h2oAppear();
    redBoxOnScroll();
    menuS();
    fixedRemove();


    $(window).load(function () {
		$(".flexslider").fullpage({
			anchors: [
				'project'
			],
			slidesNavigation: true,
			scrollingSpeed: 700,
			fitToSection: true,
			fixedElements:".fixed-header",
			scrollBar: true,
			onLeave:function(index, nextIndex, direction){
				console.log(index, nextIndex, direction);
			},
			onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
				console.log(anchorLink, index, slideIndex, direction, nextSlideIndex);
				$(".slide.s"+slideIndex).removeClass("mousewheel");
				curSlide = nextSlideIndex;
				if (curSlide == 3 || curSlide == 4 || curSlide == 5 || curSlide == 6 || curSlide == 7 || curSlide == 8 || curSlide == 9 || curSlide == 10 || curSlide == 11) {
					scrollFlag = false;
					setTimeout(function(){
						eventFlag = true;
					},1000)
				}
			},
			afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
				console.log(anchorLink, index, slideAnchor, slideIndex);
				curSlide = slideIndex;
				if (curSlide == 0) {
					rightFlag = false;
					leftFlag = false;
				} else {
					rightFlag = true;
					leftFlag = true;					
				}
			}
		})
		$(".footer a").on("click",function(){
			$(".slide.s"+curSlide).addClass("mousewheel");
			eventFlag = false;
			setTimeout(function(){
				scrollFlag = true;
			},1000)
		})
		$(".footer p.title").on("click",function(){
			$(".slide.s"+curSlide).addClass("mousewheel");
			eventFlag = false;
			setTimeout(function(){
				scrollFlag = true;
			},1000)
		})
		$(window).on("mousewheel",function(event){
			if (eventFlag) {
				$(".slide.s"+curSlide).addClass("mousewheel");
				eventFlag = false;
				setTimeout(function(){
					scrollFlag = true;
				},1000)
			}
			if (scrollFlag) {
				if (event.deltaY > 0) {
					if (leftFlag) {
						$.fn.fullpage.moveSlideLeft();
					}
				} else {
					if (rightFlag) {
						$.fn.fullpage.moveSlideRight();
					}
				}
				if (curSlide == 0) {
					var $redBox = $('li.slide-1 div.speech-bubble');
					scrollFlag = false;
					if (event.deltaY < 0) {
						$redBox.animate({scrollTop:300},500,'linear',function(){
							rightFlag = true;
							scrollFlag = true;
						});
					} else {
						$redBox.animate({scrollTop:0},500,'linear',function(){
							scrollFlag = true;
						});
					}
				} 
			}
		})
		
    });


function speechVisible () {
    $(document).ready(function () {
        var $aroma = $('.inner .content .essence ul li');
        $aroma.on('click', function () {
			var label = $(this).data("id");
			$(this).parent().next().find("."+label)
				.addClass("small-speech-fadeIn")
                .addClass("animated")
                .removeClass("small-speech-fadeOut");
            $('.slide div.small-speech')
                .addClass("small-speech-fadeIn")
                .addClass("animated")
                .removeClass("small-speech-fadeOut");


        });
    });
}

    function speechCrossClose () {
        $(document).ready(function () {
            var $cross = $('.inner .content .essence div.small-speech-popup div.cross');
            $cross.on('click', function () {
			var $popup = $(this).parent();
                $popup
                    .addClass("small-speech-fadeOut")
                    .removeClass("small-speech-fadeIn");
				setTimeout(function(){
					$popup.removeClass("small-speech-fadeOut");
				},1000)
            });
        });
    }

    function redTextAnimcount () {
        $(document).ready(function () {
            var $cross = $('body div.wrapper div.flexslider.with-red-arrow ul.slides li.slide-12 div.inner div.footer p.description strong');
            $cross.on('click', function () {
                $cross
                    .addClass("flashing")
                    .addClass("animated");

            });
        });
    }


    function h2oAppear() {
        $(document).ready(function(){
            var $economyBtn = $('body > div > div > ul.slides > li.slide-12 > div > div.footer > a');

            $economyBtn.on('click', function(e){
                e.preventDefault();

                $('.h2o-atom').addClass('appear');
                $('.hho').removeClass('appear');

                setTimeout(function(){
                    $('.h2o-atom').removeClass('appear');
                    $('.hho').addClass('appear');
                },5000);
            });
        });

    }

function redBoxOnScroll () {
    $(window).ready(function () {
        var $redBox = $('body > div > div > ul.slides > li.slide-1 > div > div > div > div > div.speech-bubble'),
         $btn = $('body > div > div > ul.slides > li.slide-1 > div > div > div > div.scrl-btn');


        $btn.on('click', function(){

            if ($btn.hasClass('scrl-btn_rotate')) {
                    $redBox.scrollTop(0);
                    $btn.removeClass('scrl-btn_rotate');

            }
            else {
                    $redBox.scrollTop(300);
                    $btn.addClass('scrl-btn_rotate');

            }
        });

    });
}
function menuS () {
    $(document).ready(function () {
        $(".hamburger").click(function () {
            $(this).toggleClass("is-active");
            $("aside").toggleClass("aside_is-active");
            $("body > div.wrapper").toggleClass("aside_is-active--wrapper");

        });
    });
}

    function fixedRemove () {
        $(document).ready(function () {
            var $sizeS = $(screen).width("376");
            var $sizeM = $(window).size("768", "1024");
            var $fixHead = $("body > div.inner > div");
            e();
            function e() {
                if ($(window) <= $sizeS) {
                    $fixHead.removeClass("fixed-header");

                }
                else {

                }
            }
        });
    }


})(jQuery);

