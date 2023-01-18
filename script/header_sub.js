/*
모달창 띄우고 닫는 버튼 구현입니다. fadeIn / Out 구현입니다
*/
$('.f-qr-btn').click(function(){
  $('.modal').stop().fadeIn(); //모달창 띄우기
});
$('#b-modal-close').click(function(){
  $('.modal').stop().fadeOut(); //모달창 닫기
});

/*
뒤로가기 버튼 누를 시 뒤로가기
history.back()은 뒤로가기 기록에서 뒤로가는 자바스크립트에요
*/
$('.h-b-btn').click(function(){
  history.back();
});

/* 이 부분 각자 페이지마다 바꿔주세요
.h-bottom nav > ul > li:first-of-type > a
nth-of-type으로
*/ 
$('.h-bottom > nav > ul > li').
mouseenter(function(){
  $('.h-bottom nav > ul > li:first-of-type > a').addClass('nonactive'); //첫번째 메뉴 비활성화
});
  $('.h-bottom > nav > ul > li').
mouseleave(
function(){
  $('.h-bottom nav > ul > li > a').removeClass('nonactive') //첫번째 메뉴 활성화
});

/* 탑버튼 누를시 애니메이트 (PC, Tablet, Mobile) */
$('.f-btn').click(function(){
  $('html, body').animate({
    scrollTop:0
  }, 500);
  return false;
})

/* 반응형 체크 resize 이벤트 입니다.*/
$(window).resize(function(){ 

  /* PC화면 시작 */
if (window.innerWidth >= 1025) {

/* 서식 초기화 (모바일, 태블릿에서 되돌아올 때 서식 틀어짐 방지) */
$('header .h-top > ul > li, .h-bottom nav ul > li').css({'display':'block'});  
$('.h-top > h1 > a > img').attr('src', './img/sidmool.svg')

/* 스크롤 애니메이션 시 변경 */
$(this).scroll(function(){
  scrollPos = $(this).scrollTop();
  if(scrollPos>=60){
    $('header').addClass('active'); //헤더에 클래스 추가
  } else{
    $('header').removeClass('active'); //헤더에 클래스 제거
  }
});
} 
/* 스크롤 애니메이션 시 탑버튼 변경 */
$(window).scroll(function(){
  let scrollPos = $(this).scrollTop();
  if(scrollPos<100){
    $('.f-top-btn').addClass('f-header');
    $('.f-top-btn').removeClass('f-middlem, f-end');
  }
  if(scrollPos>100){
    $('.f-top-btn').addClass('f-middle');
    $('.f-top-btn').removeClass('f-end, f-header');
  } if(scrollPos == ($(document).height() - $(this).height())){
    $('.f-top-btn').removeClass('f-middle');
  } 
});

/* 태블릿, 모바일 */
if (window.innerWidth < 1025) {  // 다바이스 크기가 모바일, 태블릿일 때
  
  /* 태블릿, 모바일일 때 스크롤 애니메이션 시 헤더 클래스 무효화 */
  $(this).scroll(function(){
  $('header').removeClass('active');
  });
  /* 모바일에서만 작동되게 모바일 - 태블릿으로 돌아올 때 시드물 로고 되돌리기 */
  $('.h-top > h1 > a > img').attr('src', './img/sidmool.svg')


  /* 스크롤 시 탑버튼 변경 */
  $(window).scroll(function(){
  let scrollPos = $(this).scrollTop();
  if(scrollPos<100){
    $('.f-top-btn').addClass('f-header');
  }else{
    $('.f-top-btn').removeClass('f-header');
    $('.f-top-btn').addClass('f-middle');
  }
});

  /* 메뉴 클릭 애니메이션 */
  let gnb = $('.h-bottom > nav > ul > li');
  gnb.click(function(){
    //클릭한 li의 자식인 .lng를 찾은 뒤에 슬라이드다운, 부모로 돌아가 부모의 형제와 자식인 .lng를 찾은 뒤에 서식 제거
    $(this).find('.lnb').slideDown().parent().siblings().find('.lnb').slideUp();
    });

  //메뉴버튼 누를 시 작동함수
  $('label[for="toggle"]').click(function(){
    //클릭한 label의 형제인 input의 체크여부를 확인
    if($("#toggle").is(':checked') == true){
      $('header').addClass('h-header-on'); //헤더에 클래스 추가
      $('.h-bottom nav > ul > li, header .h-top ul > li').stop().delay(200).fadeIn(); //메뉴버튼 누를 시 메뉴 나타나게
      //버튼 애니메이션 (CSS)
      $(".h-btn01").addClass('h-on01').removeClass('h-btn01');
      $(".h-btn02").addClass('h-on02').removeClass('h-btn02');
      $(".h-btn03").addClass('h-on03').removeClass('h-btn03');
    }else{
      $('header .h-top ul > li, .h-bottom nav > ul > li').stop().fadeOut(); //메뉴버튼 누를 시 메뉴 사라지게
      $('header').removeClass('h-header-on'); //헤더에 클래스 제거
      //버튼 애니메이션 (CSS)
      $(".h-on01").addClass('h-btn01').removeClass('h-on01');
      $(".h-on02").addClass('h-btn02').removeClass('h-on02');
      $(".h-on03").addClass('h-btn03').removeClass('h-on03');
    }
    });
  } 

  //모바일에서만 시드물 로고 변경
  if(window.innerWidth < 768){
    $('.h-top > h1 > a > img').attr('src', './img/sidmool_mobile.svg')
  }
}).resize(); 