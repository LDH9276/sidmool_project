$(document).ready(function(){
// 슬라이더 선언
let swiper = new Swiper(".m-banner-swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  loop: true
});

// 슬라이더 버튼
let playBtn = '../img/play_btn.svg'
let pauseBtn = '../img/pause_btn.svg'
let cBtn = document.getElementById('c-btn')

$('.swiper-btn').click(function(){
  if($(this).find('img').attr('src') === './img/pause_btn.svg'){
  swiper.autoplay.stop();
  $(this).find('img').attr('src', './img/play_btn.svg');
  return false;
}else{
  swiper.autoplay.start();
  $(this).find('img').attr('src', './img/pause_btn.svg');
  return false;
  }
});
});

if (window.innerWidth > 1025) {
$('#story').addClass('scroll');
  //스크롤 감지 애니메이션
$(window).scroll(function(){
  let scrollPos = $(this).scrollTop();
  if(scrollPos > 850){
    $('#newsroom').addClass('scroll')
  } 
  if(scrollPos > 2000){
    $('#call').addClass('scroll')
    return false;
  } 
}
);
};
//해상도가 1024미만, 768이상일 때
if (window.innerWidth < 1025 && window.innerWidth > 768) {
  //스크롤 감지 애니메이션
$(window).scroll(function(){
  let scrollPos = $(this).scrollTop();
  if(scrollPos > 10){
    $('#story').addClass('scroll');
  } 
  if(scrollPos > 1040){
    $('#newsroom').addClass('scroll')
  } 
  if(scrollPos > 1700){
    $('#call').addClass('scroll')
    return false;
  } 
}
);
};
//해상도가 768 미만일 때
if (window.innerWidth < 769) {
  //스크롤 감지 애니메이션
$(window).scroll(function(){
  let scrollPos = $(this).scrollTop();
  if(scrollPos > 150){
    $('#story').addClass('scroll');
  } 
  if(scrollPos > 1300){
    $('#newsroom').addClass('scroll')
  } 
  if(scrollPos > 2800){
    $('#call').addClass('scroll')
    return false;
  } 
}
);
};
