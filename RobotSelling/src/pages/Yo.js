import React from 'react'
import "../Css/Yo.css"


// function _class(name) {
//     return document.getElementsByClassName(name);
// }

// let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

// for (let i = 0; i < tabPanes.length; i++) {
//     tabPanes[i].addEventListener("click", function () {
        
//         _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active"); // 누적 삭제
//         tabPanes[i].classList.add("active"); //계속 동작되게

//         _class("tab-indicator")[0].style.top = `calc(80px + ${i * 50}px)`;  //움직이는 바

//         _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active"); // 누적 삭제
//         _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active"); //지우면 다음페이지로 안넘어감
//         localStorage.setItem("_class",JSON.stringify(_class)); //새로고침해도 문제없이
//     });
// }


function Yo() {
    return (
    <div class="tabs">
        <div class="tab-header">
            <div class="active">
                <i class="fa fa-code"></i> 김주찬
            </div>
            <div>
                <i class="fa fa-pencil-square"></i> 김민수
            </div>
            <div>
                <i class="fa fa-bar-chart"></i> 이남우
            </div>
            <div>
                <i class="fa fa-envelope"></i> 최윤혁
            </div>
        </div>
        <div class="tab-indicator"></div>
        <div className='tab-content'>

            <div class='active'>
                <i class="fa fa-code"></i>
                <h2> BackEnd Engineer</h2>
                <p> Career : BackEnd developer (Java)</p>
                <p> Study : Java | React | MySQL | JS | Spring</p>
                <p> Tool : IntelliJ | Github | VsCode | Eclipse</p>
                <p> Ranguage : Java | Kotlitn</p>
            </div>

            <div>
                <i class="fa fa-pencil-square"></i>
                <h2> BackEnd Engineer</h2>
                <p> Career : BackEnd developer (Java)</p>        
                <p> Study : Java | React | MySQL | JS | Spring</p>
                <p> Tool : Github | VsCode | Eclipse</p>
                <p> Ranguage : Python</p>
            </div>

            <div>
                <i class="fa fa-bar-chart"></i>
                <h2> FrontEnd Engineer</h2>
                <p> Career : FrontEnd developer (React)</p> 
                <p> Study : React | JS | HTML | CSS</p>
                <p> Tool : Github | VsCode</p>
                <p> Ranguage : React</p>
            </div>

            <div>
                <i class="fa fa-envelope"></i>
                <h2> FrontEnd Engineer</h2>
                <p> Career : FrontEnd developer (React)</p>
                <p> Study : React | JS | HTML | CSS</p>
                <p> Tool : Github | VsCode</p>
                <p> Ranguage : React</p>
            </div>
        </div>
    </div>
    )
}
export default Yo;