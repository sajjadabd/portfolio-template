$(document).ready(function(){
    //console.log('hello');
    //$("#photo").css("height" , $(this).width() + '%' );
    var options = {
        strings: ['','^500Software ^500 Engineer', '^500Web ^500 Developer'],
        typeSpeed: 150,
        backSpeed: 50,
        backDelay: 50,
        startDelay: 50,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    };
      
    var typed = new Typed('#typed', options);

});