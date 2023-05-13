$(document).ready(function () {
    let imgArray = ['img/background1.png', 'img/girl.png', 'img/thirdcontent.png'];
     
        $('.block').width('1000px')
        $('.first').attr('src', imgArray[0]);
    
        $('.second').attr('src', imgArray[1]);
        $('.third').attr('src', imgArray[2]);
    
        $('.block').slick();
    
  });