$(document).ready(function(){
        

    // ----------------------------------------------------
    // Typed.Js 

    var options = {
        strings: ['','^500 Software ^500 Engineer', '^500 Web ^500 Developer' , '^500 Game ^500 Maker' , '^500 App ^500 Creator'],
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
	
	
	
	// ------------------------------ Set Skill Bars Percentage


    $("div.percent").each( function () {
        $(this).css("width", $(this).attr('per') + '%' );
	});
	

	//------------------------------------------------------------------

	let listOfMyEducations = ``;

	myEducations = [
		{ major : 'Mathematics' , img : './img/shahed.jpg' ,
		 uni : 'Shahed High School' , date : '2007-2010' } ,
		{ major : 'Software Engineering' , img : './img/umz.jpg' ,
		 uni : 'University Of Mazandaran' , date : '2010-2013' } ,
		{ major : 'Software Engineering' , img : './img/azad.jpg' ,
		 uni : 'Azad University Of Neka' , date : '2017-2020' } ,
	];


	myEducations.map( (value) => {
		listOfMyEducations += `
		<div class="item">
			<div class="major"><span class="badge">${value.major}</span></div>
			<div class="image">
				<img src="${value.img}" alt="${value.uni}">
			</div>
			<div class="uni">${value.uni}</div>
			<div class="date">${value.date}</div>
		</div>
		`;
	});



	$("#myEducations").append(listOfMyEducations);






	//-------------------------------------------
	

	experiences = [
		{ name : "nekabeauty.com" , img : './img/nekabeauty.jpg' ,
		comment : `nekabeauty is an online cosmetics retail shop written in PHP with self made framework 
		with MySQL in back-end , works perfectly with AJAX requests and JSON` },
		{ name : "Chatbox" , img : './img/chatbox.jpg' ,
		comment : `Chatbox is an online Messaging App Written in Node.Js with Express Framework works perfectly sending and recieving messages across the internet`},
		{ name : "ChessPlus" , img : './img/chess.jpg' , 
		comment : `ChessPlus is an online Chess Game Written in Node.Js with Express Framework react as fast as possible to the changes in the game ` },
		{ name : `Hokm Card Game` , img : './img/cards.jpg' , 
		comment : `Hokm is an online iranian card game which is written in Node.Js and present the best experience to the user for playing a card game`}
	];

	let listOfExperiences = ``;
	
	experiences.map( (value) => {
		listOfExperiences += `
		<div class="item">
			<div class="image">
				<img src="${value.img}" alt="${value.name}">
			</div>
			<div class="title">
				Created <code>${value.name}</code> 
			</div>
			<div class="comment">
				${value.comment}
			</div>
		</div>
		`;
	});
	

	$("#myExperiences").append(listOfExperiences);

	//------------------------------------------------------------
	
	// let body = document.body,
	// 	html = document.documentElement;

	// let height = Math.max( body.scrollHeight, body.offsetHeight, 
	// 					html.clientHeight, html.scrollHeight, html.offsetHeight );
	
	// console.log(height);

	// $('aside').css('height', height + 'px');


	//console.log(document.body.clientWidth);
    
      

});