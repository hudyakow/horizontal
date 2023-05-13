gsap.registerPlugin(ScrollTrigger);

$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor, #circularcursor2').css({
        left: e.pageX + 0 + 'px',
        top: e.pageY + 0 + 'px'
      });
    })
  });

