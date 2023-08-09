$(document).ready(function(){
   
    $(".navbar-toggler>span").on("click",function(){
        $(this).addClass("hide").siblings().removeClass("hide")
    })

$(".nav-link").each(function(){
  $(this).on("click",function(){
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
  })
});



// function navscrolling(){
//   $('.navbar-collapse ul li ').each(function(){
         
//          if($(window).scrollTop()>=$($(this).data('class')).offset().top-1){
//              $(this).addClass('active').siblings().removeClass('active');
//          }
 
//      });
 
// }
// navscrolling();
// $(window).on('scroll',function(){
 
//  navscrolling();
 
  
// });

$(".videoAgency .title").on("click",function(){
    $(".videojs").fadeIn(500);
    $("body").css("overflow","hidden");
})
$(".videojs .fa-times").on("click",function(){
    
    $(".videojs").fadeOut(500);
    $("body").css("overflow","auto");
})

//carousel
var slidecount=1;  
$(".slide-point span").on("click",function(){

    $(this).addClass("active").siblings().removeClass("active");

  $(".slide-"+$(this).data("class")).fadeIn(400);
  $(".slide-"+$(this).data("class")).siblings().fadeOut(200);
  slidecount=$(this).data("class");
});
$(".slide-arrow").each(function(){
    $(this).on("click",function(){
       
        if($(this).hasClass("next")){
            if(slidecount<2){
                slidecount++;
            }else{
                slidecount=1;
            }
            
        }else{
            if(slidecount>1){
                slidecount--;
            }else{
                slidecount=2;
            }
            
        }
        $(".point"+slidecount).click();


        
    })
})
setInterval(() => {
  $(".next").click();
}, 7000);
$(".btn-down").mouseenter(function(){
   console.log("l")
    setTimeout(() => {
      $(this).find("i").css("transform","translateY(30px)")
      $(this).find("i").animate({
        opacity:0
      },50);
    }, 100);
    setTimeout(() => {
      $(this).find("i").css("transform","translateY(-50px)")
      $(this).find("i").animate({
        opacity:1
      },50);
    }, 250);
    setTimeout(() => {
      $(this).find("i").css("transform","translateY(0)")
    }, 400);
    
    
  
  
})

//service

$('.responsive').slick({
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        
       
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
             dots: true
          
        }
      },{

          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }}
      
     
    ]
  });



$(".big-circle").mouseenter(function(){
    var i=0;
    var k=1;
    var big=setInterval(() => {
        $(this).animate({
            width:"+=15",
            height:"+=15"
        },50)
        $(this).css({"border":"0px solid rgba(198, 156, 109,"+k+")"}).animate({
            'borderWidth':"9px"
            
        },50)
        
            $(this).find(".icon").animate({
                width:"-=2",
                height:"-=2"
            },50)
        
      
        i++;
        k=k-0.2;
        if(i==6){
            clearInterval(big)
        }
    }, 100);
})

$(".big-circle").mouseleave(function(){
    var i=0;
    
    var big=setInterval(() => {
        $(this).animate({
            width:"-=15",
            height:"-=15",
            
        },50)
       
        $(this).find(".icon").animate({
            width:"+=2",
            height:"+=2"
        },50)
      
       
        i++;
    
        if(i==6){
            clearInterval(big);
        }
    }, 100);
})




 








// //work

// $(".work ul li").each(function(){
//     $(this).on("click",function(){

//         $(this).addClass("active").siblings().removeClass("active");
//         $(".work .determine").removeClass("showall design mobile video photography").addClass($(this).data("class"))
  

//     })
// });
// $(".mouseoverlay").css({
//     width:$(".work .div1").width()-20+"px",
//     height:$(".work .div1").height()-20+"px",
    
// })
// $(window).resize(function(){
//     $(".mouseoverlay").css({
//         width:$(".work .div1").width()-20+"px",
//         height:$(".work .div1").height()-20+"px",
        
//     })
// })

// $('.slick-appear').slick({
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows:false,
//   dots: true,
//   autoplay: true,
//   autoplaySpeed: 5000,
// });

// $('.determine').mousemove(function(){
    
//     $(".mouseoverlay").removeClass("display")
//     $('.determine .div').each(function(){
      
//         if($(this).is(":hover")){
            
//             if(!($(this).hasClass("hover"))){
//                 $(".mouseoverlay").offset({
//                     left:$(this).offset().left+10,
//                     top:$(this).offset().top+10
//                 })
//                  $(".mouseoverlay h4").html($(this).data("text"));
//                  $(".mouseoverlay i").removeClass().addClass($(this).data("icon"));
//                  $(".mouseoverlay h4").removeClass().addClass($(this).data("heading"));
//                $(this).addClass("hover").siblings().removeClass("hover");
//                $(this).addClass("opacity").siblings().removeClass("opacity");
//             }
             
//         }
//     })
// })
// $('.determine .div').each(function(){
      
//   $(this).hover(function(){
//     $(".mouseoverlay").removeClass("display")
//       if(!($(".mouseoverlay").hasClass("hover"))){
//           $(".mouseoverlay").offset({
//               left:$(this).offset().left+10,
//               top:$(this).offset().top+10
//           })
//            $(".mouseoverlay h4").html($(this).data("text"));
//            $(".mouseoverlay i").removeClass().addClass($(this).data("icon"));
//            $(".mouseoverlay h4").removeClass().addClass($(this).data("heading"));
//          $(this).addClass("hover").siblings().removeClass("hover");
//          $(this).addClass("opacity").siblings().removeClass("opacity");
//       }
       
//   })
// })

// $('.determine').mouseleave(function(){
//     $(".mouseoverlay").addClass("display");
//     $('.determine .div').each(function(){
//         $(this).removeClass("opacity")
//     })
// })



// $(".mouseoverlay").on("click",function(){
//   setTimeout(() => {
//     $(".appear").fadeIn(1000);
//   }, 500);
//   if($(".mouseoverlay h4").hasClass("title")){
//     $(".nameofproject").html("title")
//     $(".showimage").addClass("show").siblings().removeClass("show")
//   }
//   if($(".mouseoverlay h4").hasClass("gallary")){
//    $(".nameofproject").html("gallary")
//    $(".slick-appear").addClass("show").siblings().removeClass("show")
//  }
//  if($(".mouseoverlay h4").hasClass("videotube")){
//    $(".youtube").addClass("show").siblings().removeClass("show");
//    $(".nameofproject").html("youtube")
//  }
// })
// $(".appear,.fa-times").on("click",function(){
//   $(".appear").fadeOut(1000,function(){
//          $(".slick-appear").addClass("show");
//   });
 
// })
// $(".appear .work-inform").on("click",function(e){
//   e.stopPropagation();
// })


// var countspan1=parseInt($(".count1").html());
// var countspan2=parseInt($(".count2").html());
// var countspan3=parseInt($(".count3").html());
// var countspan4=parseInt($(".count4").html());
// $(window).on("scroll",function(){
//     if($(this).scrollTop()>=$(".creative").offset().top){
//         var count10=setInterval(() => {
//             if(countspan2<1049)
//             {
//               countspan2+=1;
//               $(".count2").html(countspan2)

              

//                 if(countspan1<235)
//                 {
//                   countspan1+=1;
//                   $(".count1").html(countspan1)
//                 }

//                 if(countspan3<75)
//                 {
//                   countspan3+=1;
//                   $(".count3").html(countspan3)
//                 }
//                 if(countspan4<8)
//                 {
//                   countspan4+=1;
//                   $(".count4").html(countspan4)
//                 }



//             }else{
//               clearInterval(count10)
//             }
             
//         }, 100);
       
//     }
// })

// /*
//   leftval=$(this).css("left");
//                 topval= $(this).css("top");
//                 console.log(leftval)
//                $(".mouseoverlay").css({
//                    left:leftval,
//                    top:topval
//                })
               
               
               
               
//                $(".mouseoverlay").offset({
//                     left:$(this).offset().left,
//                     top:$(this).offset().top
//                 })*/





// //skill

// $(window).on("scroll",function(){
//     if($(this).scrollTop()>=$(".skill").offset().top){
       
//         $(".progres").each(function(){
           
//                 $(this).find(".color2").css({
//                     "width":$(this).find(".color2").data("precent")-30+"%"
                    
//                 });
//                 $(this).find(".color3").css({
//                     "width":100-$(this).find(".color2").data("precent")+"%" ,
                
//                 });
           
//         })
//     }
// })


// $('.slick-icon').slick({
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     arrows:false,
//     dots: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     responsive: [
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
     
//     ]
//   });

// $(".skill .langs a").on("click",function(e){
//   e.preventDefault();
//   $(this).addClass("active").siblings().removeClass("active")
// })
// //team


// $('.slick-team').slick({
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows:false,
//     dots: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
       
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
// }
     
//     ]
//  });

//  $('.slick-theme').slick({
//     infinite: true,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows:false,
//     dots: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
       
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
// }
     
//     ]
//  });


// //download
// setTimeout(() => {
//     $(".download").fadeOut(500)
    
// }, 7000);

// $(window).on("scroll",function(){
//     if($(this).scrollTop()>600){
//         $(".up").removeClass("hide")
//     }else{
//         $(".up").addClass("hide")
//     }
// })

// $(".up").on("click",function(){
//   console.log("ll")
//       $("html").animate({
//         scrollTop:0
//       },500);
// })

 })




