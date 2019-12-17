AOS.init({
    duration: 1200,
});
// $('.navbar-nav li a').on("click", function () {
//     $('.navbar-nav').hide();
// });

// $('.navbar-toggler').on("click", function () {
//     $('.navbar-nav').show();
// });

// $(document).on('click','.navbar-collapse.in',function(e) {
//     if( $(e.target).is('a:not(".dropdown-toggle")') ) {
//         $(this).collapse('hide');
//     }
// });

if($(window).width() <= 768){
$('.navbar-nav li a').on("click", function () {
    $('.navbar-nav').hide();
});

$('.navbar-toggler').on("click", function () {
    $('.navbar-nav').show();
});
}