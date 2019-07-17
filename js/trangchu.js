document.addEventListener("DOMContentLoaded",function(){
    //khai bao
    var menudo = document.querySelector('.header-bot')
    var trangthai = 'duoi100';
    window.addEventListener('scroll',function(){
        console.log(window.pageYOffset);
        if (window.pageYOffset > 100) {
            if(trangthai =="duoi100"){
            trangthai ='tren100';
            menudo.classList.add('menuden');   
        }
    }
        else if(window.pageYOffset < 100){
            if(trangthai =="tren100"){
            trangthai = 'duoi100';
            menudo.classList.remove('menuden');
        }
    }
})

})