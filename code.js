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
	// Add Skills
	
	frontend = [
	{ name : "HTML" , per : 90 },
	{ name : "CSS" , per : 80 },
	{ name : "Js" , per : 85 },
	{ name : "Sass" , per : 70 },
	{ name : "React.Js" , per : 80 },
	{ name : "Angular" , per : 60 },
	];

	let listOfSkills = ``;
		
	frontend.map( (value) => {
		listOfSkills += `
		<div class="skill">
		<div class="skillname">${value.name}</div> 
		<div class="barContainer">
			<div class="bar">
				<div class="percent" per="${value.per}"></div> 
			</div>
			<div class="percentContainer">%${value.per}</div>			
		</div>
	</div>
		`;
	});
	
	$("#frontend").append(listOfSkills);
	
	
	backend = [
	{ name : "PHP" , per : 80 },
	{ name : "Laravel" , per : 80 },
	{ name : "Node.Js" , per : 70 },
	{ name : "Django" , per : 60 },
	{ name : "SQL" , per : 90 },
	{ name : "Sqlite" , per : 90 },
	{ name : "MongoDb" , per : 90 },
	];
	
	
	listOfSkills = ``;
	
	backend.map( (value) => {
		listOfSkills += `
		<div class="skill">
		<div class="skillname">${value.name}</div> 
		<div class="barContainer">
			<div class="bar">
				<div class="percent" per="${value.per}"></div> 
			</div>
			<div class="percentContainer">%${value.per}</div>			
		</div>
	</div>
		`;
	});
	
	$("#backend").append(listOfSkills);
	
	
	
	
	
	
	programming = [
	{ name : "C" , per : 70 },
	{ name : "C++" , per : 80 },
	{ name : "C#" , per : 80 },
	{ name : "Java" , per : 90 },
	{ name : "Python" , per : 90 },
	{ name : "Dart" , per : 90 },
	];
	
	
	listOfSkills = ``;
	
	programming.map( (value) => {
		listOfSkills += `
		<div class="skill">
		<div class="skillname">${value.name}</div> 
		<div class="barContainer">
			<div class="bar">
				<div class="percent" per="${value.per}"></div> 
			</div>
			<div class="percentContainer">%${value.per}</div>			
		</div>
	</div>
		`;
	});
	
	$("#programming").append(listOfSkills);
	
	
	
	
	
	
	
	mobile = [
	{ name : "React Native" , per : 70 },
	{ name : "Ionics" , per : 80 },
	{ name : "Flutter" , per : 80 },
	];
	
	
	listOfSkills = ``;
	
	mobile.map( (value) => {
		listOfSkills += `
		<div class="skill">
		<div class="skillname">${value.name}</div> 
		<div class="barContainer">
			<div class="bar">
				<div class="percent" per="${value.per}"></div> 
			</div>
			<div class="percentContainer">%${value.per}</div>			
		</div>
	</div>
		`;
	});
	
	$("#mobile").append(listOfSkills);
	
	
	
	
	
	

    $("div.percent").each( function () {
        $(this).css("width", $(this).attr('per') + '%' );
    });
	
	
	
	//------------------------------------------------------------
	
	// let body = document.body,
	// 	html = document.documentElement;

	// let height = Math.max( body.scrollHeight, body.offsetHeight, 
	// 					html.clientHeight, html.scrollHeight, html.offsetHeight );
	
	// console.log(height);

	// $('aside').css('height', height + 'px');


	//console.log(document.body.clientWidth);
    
      

});