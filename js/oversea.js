

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 70,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".card4_out_next",
      prevEl: ".card4_out_prev",
    },
  });






  $(document).ready(function() {

      //처음들어갔을때 모습 만들기...
      $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
      $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
      $(".tab_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

      //On Click Event
      $("ul.tabs li").click(function() {

          $("ul.tabs li").removeClass("active"); //Remove any "active" class
          $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
          $(".tab_content").hide(); //모든 contents들 숨김

          var activeTab = $(this).find("span").attr("data"); //Find the href attribute value to identify the active tab + content
          /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
          .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
          $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
          return false;
      });

  });




  


  $(function(){
      //이미지 변경 함수 호출

      $(".wrap_1").mouseenter(function(){
          $(".cruise_more img").css({'transform':'translateX(10px)'});
          
          
      });
      $(".wrap_1").mouseleave(function(){
          $(".cruise_more img").css({'transform':'translateX(0px)'});
      });

      $(".wrap_2").mouseenter(function(){
          $(".imgClass").attr("src", "images/oversea/ship1.jpg");//변경될 이미지 주소를 넣어주세요
          $(".layer2").css({'opacity':'0'});
          $(".ship1").css({'transform':'translateY(-30px)'});
      });
      $(".wrap_2").mouseleave(function(){
          $(".imgClass").attr("src", "images/oversea/ship1.jpg");//변경될 이미지 주소를 넣어주세요
          $(".layer2").css({'opacity':'0.7'});
          $(".ship1").css({'transform':'translateY(0px)'});
      });

      $(".wrap_3").mouseenter(function(){
          $(".imgClass").attr("src", "images/oversea/ship2.jpg");//변경될 이미지 주소를 넣어주세요
          $(".layer3").css({'opacity':'0'});
          $(".ship2").css({'transform':'translateY(-30px)'});
      });
      $(".wrap_3").mouseleave(function(){
          $(".imgClass").attr("src", "images/oversea/ship2.jpg");//변경될 이미지 주소를 넣어주세요
          $(".layer3").css({'opacity':'0.7'});
          $(".ship2").css({'transform':'translateY(0px)'});
      });

      $(".wrap_4").mouseenter(function(){
          $(".imgClass").attr("src", "images/oversea/ship3.jpg");//변경될 이미지 주소를 넣어주세요
          $(".layer4").css({'opacity':'0'});
          $(".ship3").css({'transform':'translateY(-30px)'});
      });
      $(".wrap_4").mouseleave(function(){
          $(".imgClass").attr("src", "images/oversea/ship3.jpg");//변경될 이미지 주소를 넣어주세요
          $(".layer4").css({'opacity':'0.7'});
          $(".ship3").css({'transform':'translateY(0px)'});
      });
    
  });



  $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
      $('html, body').animate({
      scrollTop: target.offset().top
      }, 500);//움직이는 시간 조정
      return false;
      }
      }
      });
      });
