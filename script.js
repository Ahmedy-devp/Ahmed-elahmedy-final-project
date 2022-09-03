$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin:30,
        loop:true,
        nav:true, 
        navText:[`<i class="fa-solid fa-arrow-left-long"></i>` , `<i class="fa-solid fa-arrow-right-long"></i>` ],
        responsive : {
            
            0:{
                items:1
            },
            992 :{
                items:2
            }
        }
    });
  });

