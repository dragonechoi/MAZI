// 페이지 연동 Js함수 코드
function contact_us_btn(){
    var button=document.querySelector("#contact_us_btn")
    button.addEventListener("click",()=>{
            window.location.href="/view/contact_us.html"
    })
}