let popupDialog = document.querySelector('dialog'),
    dayCheck = document.querySelector('#oneday_close'),
    popupClose = popupDialog.querySelector('button');

    //쿠키 생성
    function setCookie(name, value, day){
        let date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
    }
    //setCookie('ABC','home',7);
    //console.log(document.cookie);

    //쿠키확인
    function checkCookie(name){
        let cookieArr = document.cookie.split(';');
        let visited = false;

        for(let cookie of cookieArr){
            if(cookie.search(name) > -1){
                visited =true;
                break;
            }
        }

        //dialog 표시여부
        if(!visited){
            popupDialog.setAttribute('open','');
        }
    }
  
    
    //쿠키삭제
   // setCookie('ABC','home', -1);

    //쿠키여부를 확인하여 dialog 표시하기
    checkCookie('ABC');

    //닫기버튼
    popupClose.addEventListener('click',()=>{
        popupDialog.removeAttribute('open');
        if(dayCheck.checked){
            setCookie('ABC', 'home', 1);
        }else{
            setCookie('ABC','home',-1); 
        }
    });

    console.log(dayCheck.checked);