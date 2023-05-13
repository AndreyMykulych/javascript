$(document).ready(function () {
    let imgArray = ['img/background1.png', 'img/girl.png', 'img/thirdcontent.png'];
   
    $('.first').attr('src', imgArray[0]);
    $('.first').width(window.width)
    $('.first').heigth(200)

    $('.second').attr('src', imgArray[1]);
    $('.third').attr('src', imgArray[2]);

    $('.block').slick();
  });