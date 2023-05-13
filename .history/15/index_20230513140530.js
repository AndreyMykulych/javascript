$(document).ready(function () {
    let imgArray = ['img/background1.png', 'img/girl.png', 'img/thirdcontent.png'];
   
    $('.first').attr('src', imgArray[0]);
    $('.first').width(window.width)
    

    $('.second').attr('src', imgArray[1]);
    $('.third').attr('src', imgArray[2]);

    $('.block').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
       
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });
  });