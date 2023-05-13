$(document).ready(function () {
    let imgArray = ['img/background1.png', 'img/girl.png', 'img/thirdcontent.png','img/firstphoto.png'];
     
        $('.block').width('1000px')
        $('.first').attr('src', imgArray[0]);
        $('.second').attr('src', imgArray[1]);
        $('.third').attr('src', imgArray[2]);
        $('.four').attr('src',imgArray[3])
    $('.block').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: true,
        arrows: true,
        
    });
    
  });