// 슬라이더 선언
let swiper = new Swiper(".mySwiper", {
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
})

/* 슬라이더 구하기 */
let swipe = swiper.realIndex;

function calcSlide(){
  swipe
}

let slide = setInterval(calcSlide, 50)

console.log(slide)

// for 문으로 구하기
// for(i=0; i< slider.length; i++){}

// 버튼 컨트롤
