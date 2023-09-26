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


    const remainTimes = document.querySelectorAll(".time_text #remain-time");

    function updateDiffTime() {
        remainTimes.forEach((remainTime, index) => {
            // 여기에서 각 요소에 대한 서로 다른 시간을 계산하고 설정합니다.
            const masTimes = ["2023-09-29", "2023-09-31", "2023-10-3"]; // 각 요소에 대한 날짜를 배열로 설정
    
            const masTime = new Date(masTimes[index]); // 각 요소에 대한 날짜 설정
            const todayTime = new Date();
    
            const diff = masTime - todayTime;
    
            const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
            const diffHour = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
            const diffMin = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
            const diffSec = String(Math.floor(diff / 1000 % 60)).padStart(2, "0");
    
            remainTime.innerText = `${diffDay}일 ${diffHour}:${diffMin}:${diffSec}`;
        });
    }
    
    updateDiffTime();
    setInterval(updateDiffTime, 1000);

        
        
    
    document.addEventListener('DOMContentLoaded', function () {
        const tabs = document.querySelectorAll('.season_tab');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function () {
                // 현재 클릭한 탭을 활성화 상태로 변경
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // 현재 활성화된 탭에 따라 콘텐츠를 표시/숨김 처리
                const tabId = tab.querySelector('input').id;
                const content = document.querySelector(`#${tabId}-content`);
                
                const allContents = document.querySelectorAll('.season_content');
                allContents.forEach(c => c.style.display = 'none');
                
                if (content) {
                    content.style.display = 'block';
                }
            });
        });
    });
    
    
    