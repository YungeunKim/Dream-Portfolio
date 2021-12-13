var index = 0;   //이미지에 접근하는 인덱스
        window.onload = function(){
            slideShow();
        }
        
        function slideShow() {
        var i;
        var x = document.getElementsByClassName("slide1");  //slide1에 대한 dom 추가
        for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";   //처음에 전부 display를 none
        }
        index++;
        if (index > x.length) {
            index = 1;  
        }   
        x[index-1].style.display = "block";  //해당 인덱스는 block으로
        setTimeout(slideShow, 3500);   //3.5초 후 넘어가기
    }