


    if (window.innerWidth > 768) {
        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
      

            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.querySelector(".navbar").style.height = "50px";
                document.querySelector("#navLogo").style.width = "150px";
                document.querySelectorAll('.navbar .nav-item a').forEach(function(item){
                    item.style.fontSize = '0.77rem';
                })


            } else {
                document.querySelector(".navbar").style.height = "70px";
                document.querySelector("#navLogo").style.width = "200px";
                document.querySelectorAll('.navbar .nav-item a').forEach(function(item){
                    item.style.fontSize = '0.9rem';
                })
            }
        }
    }


    /* SCROLL BUTON */
    
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});



// number count for stats, using jQuery animate
$(window).scroll(countNumbers);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function countNumbers(){
    if (isScrolledIntoView($("#counter-stats")) && !viewed) {
      viewed = true;

      $('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 1500,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  

});

    }
}
