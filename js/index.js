 $(document).ready(function() {
     $(window).scroll(function() {
       if ($(window).scrollTop() >= 200) {
             $('.mainHead').addClass('fixed-top');
            } 
        else {
               $('.mainHead').removeClass('fixed-top');
               }
          });



      $('.sc-menu').click(function() {
            $('.sc-navMenu').slideToggle('500')
        })



       $('.count').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        });
  $(function($) {
            var doAnimations = function() {

                var offset = $(window).scrollTop() + $(window).height(),
                    $animatables = $('.animatable');

                if ($animatables.length == 0) {
                    $(window).off('scroll', doAnimations);
                }

                $animatables.each(function(i) {
                    var $animatable = $(this);
                    if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                        $animatable.removeClass('animatable').addClass('animated');
                    }
                });
            };
            $(window).on('scroll', doAnimations);
            $(window).trigger('scroll');
        });
