$(document).ready(function () {
    let imgArray = ['img/background1.png', 'img/girl.png', 'img/thirdcontent.png','img/firstphoto.png'];
     
        $('.block').width('1000px')
        $('.first').attr('src', imgArray[0]);
        $('.second').attr('src', imgArray[1]);
        $('.third').attr('src', imgArray[2]);
        $('.four').attr('src',imgArray[3])
    $('.block').slick({
        slidesToShow: 3,
       
    });
    $(window).on('resize', () => {
        let screenWidth = window.screen.width;
        if (screenWidth < '500px') {
            $('.block').slick({
                slidesToShow: 1,
            });
        }
       else  if (screenWidth < '1024px') {
            $('.block').slick({
                slidesToShow: 2,
               
            });
        }
    })
  });