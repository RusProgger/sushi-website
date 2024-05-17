$(document).ready(function(){
    var slider = $('.bxslider').bxSlider({
        mode: 'horizontal',
        auto: true,
        autoControls: false,
        stopAutoOnClick: true,
        pause: 4000,
        onSlideAfter: function($slideElement, oldIndex, newIndex){
            if (newIndex === slider.getSlideCount() - 1) {
                setTimeout(function() {
                    slider.goToSlide(0);
                }, 3500);
            }
        }
    });

    $(window).resize(function(){
        var slideWidth = $(window).width();
        slider.reloadSlider({ slideWidth: slideWidth });
    });
});
