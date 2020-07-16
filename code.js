$(document).ready(function(){
        

    // ----------------------------------------------------
    // Typed.Js 

    var options = {
        strings: ['','^500 Software ^500 Engineer', '^500 Web ^500 Developer' , '^500 Game ^500 Maker' , '^500 Computer ^500 Teacher'],
        typeSpeed: 150,
        backSpeed: 50,
        backDelay: 50,
        startDelay: 50,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    };
      
    var typed = new Typed('#typed', options);

    // ---------------------------------------
    // Scroll Spy 

    inView.offset(200);

    inView('div.part')
    .on('enter', (el) => {
        //console.log(el.id);
        //$(`ul li a`).removeClass('active');
        $(`a[href='#${el.id}']`).addClass('active');
    })
    .on('exit', (el) => {
        $(`a[href='#${el.id}']`).removeClass('active');
    });

    // -----------------------------------------


    $("div.percent").each( function () {
        $(this).css("width", $(this).attr('per') + '%' );
    });
    
      

});