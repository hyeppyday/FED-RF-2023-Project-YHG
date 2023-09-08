// 메인 JS - main.js

const rellax = document.querySelectorAll('.rellax');

rellax.forEach(ele=>{
    // 패럴렉스적용(릴렉스)
    new Rellax(ele, {
        speed: 3
    }); /////// rellax /////////////

})