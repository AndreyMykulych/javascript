$(document).ready(function () {
    let imgArray = ['img/background1.png', 'img/girl.png', 'img/thirdcontent.png'];
     if(window.screen.width )
    $('.first').attr('src', imgArray[0]);
    $('.block').width('500px')
    

    $('.second').attr('src', imgArray[1]);
    $('.third').attr('src', imgArray[2]);

    $('.block').slick();
  });