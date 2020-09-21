$(function(){
    $('.my-slick__inner').slick({
        arrows:true,
        dots:false,
        // adaptiveHeight:true,
        // slidesToShow:2,
        slidesToScroll:1,
        speed:900,
        easing:'ease', // animation
        infinite: true,
        initialSlide:1, // с какого слайда начать показ
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:true, // swipe for display
        swipe:true, // swipe for mobiles
        // touchThreshold:10, // сила пролистывания при свайпе
        waitForAnimate:false, // ждать окончания пролистывания слайдов перед новы нажатием
        centerMode:true, // центрирует слайд по середине обл показа
        variableWidth:true,
        // rows:1, // кол-во строк слайдов
        // slidesPerRow:1, // кол-во столбцов слайдов
        vertical:false,
        // verticalSwiping:true,
        // asNavFor:'.my-slick2', // связывает слайдер с другим, указанным после (:)
        // responsive:[
        //     {
        //         breakpoint: 768, // ширина окна после которой меняется настройка
        //         settings:{
        //             slidesToShow:1,
        //         }
        //     }, {
        //         breakpoint: 480,
        //         settings:{
        //             slidesToShow:1,
        //         }
        //     }
        // ],
        // mobileFirst:true // до 768 отображает 1 слайд и т.д.
        // appendArrows:$('.content'), // назначить кнопки управлен листанием лежат в классе "div.content"
        // appendDots:$('.content'),
        
    }).on('setPosition', function (event, slick) { // подгоняет слайды под задаваемую высоту
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });
    

    //  $('.my-slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //     console.log(nextSlide);
    // });
    // $('.my-slick').on('afterChange', function(event, slick, currentSlide){
    //     console.log(nextSlide);
    // });
    // $('.my-slick').slick('setPosition'); // перезагрузит слайдер  
    
    // $('.link').click(function(event) {
    //     $('.my-slick').slick('goTo, 3'); // пролистнуть до нужного слайда
    // });

    // $('.my-slick2').slick({
    //     arrows:false,
    //     // dots:true,
    //     slidesToShow:1,
    //     fade:true,
    //     asNavFor:'.my-slick',
    // });
});
// ========================