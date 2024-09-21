
$(document).ready(function(){
    $('.page').eq(0).show().siblings('.page').hide();
    $('.B').hide();

    // 모바일 시작
    $('.mobile').click(function(){
        $(this).hide();
    });

    // 상단 로고 클릭
    $('.topLogo img').click(function(){
        $('.page').eq(0).show().siblings('.page').hide();
        $('.subnav1').hide(); 
    });

    // login
    $('#log').click(function(){
        $('.logBox').show();
    });

    $('.log-close').click(function(){
        $('.logBox').hide();
    });

    $('#logBtn').click(function(event){
        var $uname = $('#uname').val().trim();
        var $psw = $('#psw').val().trim();

        result = true;

        var emailPa = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

        if (!emailPa.test($uname) || $uname === '') {
            alert('이메일을 다시 입력해주세요');
            result = false;
        }

        if ($psw === '') {
            alert('비밀번호를 입력해주세요');
            result = false;
        }

        if(result){
            event.preventDefault();
            alert('로그인 완료');
            $('.logBox').hide();
            resetForm();
            $('.login #log').text('홍가연님');
            $('.login #sg').text('');
        }
        

    });



    // signUp
    $('#sg').click(function(){
        $('.signUp').show();
    });

    $('#sign').click(function(){
        $('.signUp').show();
    });

    function resetForm() {
        $('#uname').val('');
        $('#psw').val('');
        $('#uemail').val('');
        $('#sgpsw').val('');
        $('#repsw').val('');
    }

    $('.su-close').click(function(){
        $('.signUp').hide();
        resetForm();
    });

    $('.cancelbtn').click(function(){
        $('.signUp').hide();
        resetForm();
    });

    
    /* 회원가입 */
    $('.signupbtn').click(function(event){

        var $email = $('#uemail').val().trim();
        var $password = $('#sgpsw').val().trim();
        var $repass = $('#repsw').val().trim();

        var result = true;

        var emailPa = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

        if (!emailPa.test($email)) {
            alert('이메일을 다시 입력해주세요');
            result = false;
        }

        if ($password !== $repass || $password==='' || $repass==='') {
            alert('비밀번호를 다시 확인해주세요.');
            result = false;
        }

        if (result) {
            alert('회원가입이 완료되었습니다.');
            resetForm();
            $('.signUp').hide();
            $('.logBox').hide();

        }else{
            alert('회원가입 실패');
            resetForm();
            event.preventDefault();
        }

    });

    /* 햄버거 토글 */
    $(".hamb").click(function(){
        $(".m-con").slideToggle();
    });

    /* 메뉴선택시 페이지 바뀜 */
    $('.M1').click(function(){
        var index = $(this).data('index');
        $('.page').eq(index).show().siblings('.page').hide();
        
        if (window.matchMedia('(max-width: 767px)').matches) { /* 모바일일 경우 */
            $(".m-con").slideUp(function() { /* slideUP 이후작업*/
                $(this).hide(); /* hamb에게 인식시키기위해*/
            });
        }
    });

    /* 서브메뉴 */
    function closeEventListeners(){
        $('.subnav1').slideUp(function(){
            $('.subnav1').hide();
        });
    }
    function setEventListeners() {
        if (window.matchMedia('(min-width: 768px)').matches) { 
            $('.M1').eq(0).click(function(){
                $('.subnav1').slideToggle();
            });

            $('.M1').slice(1).each(function() { /* eq(0)뺴고 나머지  */
                $(this).click(function() {
                    closeEventListeners();
                });
            });

        }else{
            $('.M1').eq(0).click(function(){
                $('.subnav1').css('display','block')
            });
        }
    }

    setEventListeners();

    $(window).resize(function() {
        setEventListeners();
    });


    /* mainSlides 방향키 조절 */
    let slideIndex = 1;
    showSlides(slideIndex);

    $('.prev').click(function(){
        plusSlides(-1);
    });

    $('.next').click(function(){
        plusSlides(1);
    });

    function plusSlides(n) {
        showSlides(
            slideIndex += n
        );
    }

    function showSlides(n) {
        let $slides = $(".mySlides");

        if (n > $slides.length) {
            slideIndex = 1
        }    
        if (n < 1) {
            slideIndex = $slides.length
        }

        $slides.css('display','none');

        $slides.eq(slideIndex-1).css('display','block');  
    }

    /* 4초마다 plusSlides를 호출하여 자동넘김 */
    setInterval(function() {
        plusSlides(1);
    }, 4000);

    /* 구단소식 밑줄 */
    $('.P1C2-list li p:first-child').hover(
        function(){
            $(this).css('text-decoration', 'underline');
        },
        function(){
            $(this).css('text-decoration', 'none');
        }
    );

    /* 유튭 선택 슬라이드 */
    // $('.youtube-img:first-child').show();
    $('.youtube-img').eq(4).show();

    $('.sm-con .smImg').click(function(){
        var index = $(this).index();
        $('.youtube-con .youtube-img').eq(index).show().siblings('.youtube-img').hide();
    });

    /* 투수|타자 선택버튼 */
    $('.playBtns .button').click(function(){
        var index = $(this).index();
        $('.B').eq(index).show().siblings('.B').hide();
    });

    $("#thBtn, #hitBtn, #catBtn").click(function(){
        $('.playBtns').animate({
            'height': '100px',
        },500);

        $('.playBtns .button').animate({
            'margin-top': '30px',
            'margin-right': '20px',
            'margin-bottom': 'auto',
            'margin-left': '20px'
        }, 500);
    });

    function reset(){
        $('.playBtns').css('height','300px');
        $('.playBtns .button').css('margin','130px 20px auto');
        $('.B').hide();
    }

    $('.m-con .M1').click(function(){
        reset();
    });

    /* stadium 선택키 */

    $('#jsBtn').click(function(){
        $('.jamsil').show();
        $('.bearsPark').hide();
        $(this).css({
            'background-color': '#d13844',
            'color':'white',
        });
        $('#bearsBtn').css({
            'background-color': '#626266',
            'color':'#C7C6C6',
        });
    });

    $('#bearsBtn').click(function(){
        $(this).css({
            'background-color': '#d13844',
            'color':'white',
        });
        $('#jsBtn').css({
            'background-color': '#626266',
            'color':'#C7C6C6',
        });
        $('.bearsPark').show();
        $('.jamsil').hide();
    });

    $('.js-con table *').css('padding','5px');

    /* 교통 상세 정보 */
    $(".J1").click(function(){
        $(".Add1").slideToggle();
        $(this).toggleClass("active");
    });

    $(".J2").click(function(){
        $(".bus-con").slideToggle();
        $(this).toggleClass("active");
    });

    $(".B1").click(function(){
        $(".Add2").slideToggle();
        $(this).toggleClass("active");
    });

    $(".B2").click(function(){
        $(".bpbus-con").slideToggle();
        $(this).toggleClass("active");
    });

    /* 푸터이하요소 css 추가 */
    $('footer *').css('background-color', '#222231');

    /*유튜브 가져오기 */
    var api_key = "AIzaSyCAQYhF_q2flIUD51ttrmF2uUD1yG0PDQ8";
    url = `https://www.googleapis.com/youtube/v3/search?part=snippet
            &maxResults=5
            &order=date
            &channelId=UCsebzRfMhwYfjeBIxNX1brg
            &type=video
            &key=${api_key}`;
    
    
    $.ajax({
        type: "GET",
        dataType: "json",
        url: url,
        cache: false,
        success: function(data, status) {
            if (status == 'success') {
                parseJSON(data);
            }
        },
        error: function(status, error) {
            console.error("AJAX 요청 실패");
            console.error("상태: " + status);
            console.error("오류 메시지: " + error);
        }
    });
    
    function parseJSON(jsonObj) {
        vurl = 'https://www.youtube.com/embed/';

        const title = [];
        const photo = [];
        const vid=[];

        for(item of jsonObj.items){
			title.push(`${item.snippet.title}`);
			photo.push(`${item.snippet.thumbnails.high.url}`);
            vid.push(`${item.id.videoId}`);
		};

        for (let i = 0; i < 5; i++) {
            $(`#V${i}`).html(title[i]);
            $(`#P${i}`).attr('src', photo[i]);
            $(`#D${i}`).attr('src', `${vurl}${vid[i]}`);
        }
        
    }
});

function jsMap() {
    let jlat, jlng;
    [jlat, jlng] = [37.512158, 127.071797]; 

    const mapProp = {
        center: new google.maps.LatLng(jlat, jlng),
        zoom: 17,
    }

    const map = new google.maps.Map(document.getElementById('jsMap'), mapProp);

    const myPos2 = {lat : jlat, lng : jlng};
        let marker2 = new google.maps.Marker({
            position: myPos2,
            animation: google.maps.Animation.BOUNCE,
            icon: {
                url: "https://blog.kakaocdn.net/dn/bljax5/btrziguw8TT/iuOCMGZIC7yfQqkxW0qpYk/img.png",
                scaledSize: new google.maps.Size(110, 110)
            },

    });

    marker2.setMap(map);

    let elat, elng;
    [elat, elng] = [37.331522, 127.457394];

    const mapProp2 = {
        center: new google.maps.LatLng(elat, elng),
        zoom: 17,
    }
    const map2 = new google.maps.Map(document.getElementById('eMap'), mapProp2);

    const myPos3 = {lat : elat, lng : elng};
        let marker3 = new google.maps.Marker({
            position: myPos3,
            animation: google.maps.Animation.BOUNCE,
            icon: {
                url: "https://blog.kakaocdn.net/dn/bljax5/btrziguw8TT/iuOCMGZIC7yfQqkxW0qpYk/img.png",
                scaledSize: new google.maps.Size(110, 110)
            },
    });

    marker3.setMap(map2);
	
}

