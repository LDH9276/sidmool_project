$(document).ready(function(){

  //.id에 focus
  $('input.email').focus();

  //focus일 때 클래스 삽입
  $('.email, .pw').focus(function(){
    $(this).parent().addClass('input-focus');
    $(this).parent().siblings().removeClass('input-focus');
  });


  //로그인 버튼 클릭시
  $('.login_btn').click(function(){
    let email = $('input.email').val();
    let password = $('input.pw').val();

    if(email == ""){
      $('#message').html(`<p class="wrong">이메일을 입력해주세요.</p>`);
      $('input.email').focus();
      return false;
    }else if(password == ""){
      $('#message').html(`<p class="wrong">비밀번호를 입력해주세요.</p>`);
      $('input.pw').focus();
      return false;
    }else{
      let masterId = 'master';
      let masterPw = '1234'

      if(email == masterId && password == masterPw){
            alert('로그인 성공');
          }else{
            $('#message').html(`<p class="wrong">이메일 혹은 비밀번호가 일치하지 않습니다.</p>`);
            $('input.email').focus();
            return false;
          }
        }
      });

      //조은: 이렇게 효과줘보려고 했는데 안됐습니다...ㅠㅠ 
      $('.email','pw').click(function(){
        (this).css('borderbottom','1px solid red')
      });
    });