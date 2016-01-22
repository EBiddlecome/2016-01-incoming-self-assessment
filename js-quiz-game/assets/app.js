$(document).ready(function(){
	
	event.preventDefault();

	// var askUser = prompt("What is your name?");
	// alert("Hi, " + askUser + "!  Welcome to Code or Die!");

	// var userName = document.getElementById

	// if (userName != null){
	// 	return userName;
	// };

	// var congratulator = function(userName){
	// 	while 
	// };
	//attempting extra credit


	// our current count, attached to the upper right hand corner of the browser
	//display count on top right of page
	var $currentCount = $('#counter').text(app.count);
	// displayCount.text(app.count);
	// var $displayCount = $('#counter');

	// our current form which will hold the question and subsequent answers loaded in the app.questions object.
	var $currentForm = $('form');
	
	// creates our first random question upon generating the game.html file
	var randomQuestion = app.questions[Math.floor(Math.random()* app.questions.length)];
	//changed variable so we can just use the same one throughout, way easier 

	//attaches the first question to the form onload
	$currentForm.prepend('<h3 class = "question"> Question: ' + randomQuestion.question + '</h3>' + '<br><br>');

	// appends all four answers to the corresponding question
	var answerGenerator = function (randomQuestion){

		randomQuestion.choices.forEach(function(answerChoices, i){
		//iterate through the collection of random questions and their respective answer choices
		//apply the following to each set
			$('.choices').append('<input type="radio" name="answers" value="'+ i +'">'+randomQuestion.choices[i]+ '</br>');
			//make radio buttons so user can select answers for each question, like in example video
			});

	};

	//adds a random question and its corresponding answers to our currentForm
	var QandAgenerator = function(){
		var nextQuestion = app.questions[Math.floor(Math.random()* app.questions.length)];
		//use the above formula, just like for the first question to apply to each subsequent question
		$currentForm.prepend('<h3 class = "question"> Question: ' + nextQuestion.question + '</h3>' + '<br><br>');
		//attach each subsequent question to our document form, as above to stay consistent
		answerGenerator(nextQuestion);
		//make sure the answers display with next question after successful user answers are submitted
		//without this we just get the next question minus radio buttons
	};
	

	// checks the answer when the user clicks "Am I right?"
	$('#checkAnswer').on('click',function(){
		event.preventDefault();
		// represents whichever check box the user clicks on
		$userInput = $('input:checked');

		if(app.randomQuestion.choices[$userInput.val()] === app.randomQuestion.correct ){
			app.successDisplay();
			app.countIncrementor();
			$currentCount.empty().append(app.count);
			$('.choices').empty().append(QandAgenerator());
		} else {
			app.failureDisplay();
		}		
	});

	$('#restart').on('click', function(){
		location.reload();
	});

	answerGenerator(randomQuestion);
});


