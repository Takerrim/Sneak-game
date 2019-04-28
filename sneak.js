const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


// data
const squad = 40;
const cells = canvas.width / squad;
let direction = 'RIGHT';
let counter = 0;
const position = Math.floor(Math.random() * squad / 2) * squad;
const snake = [];
const food = {
	x: position,
	y: position
}
//////////////


// food //
ctx.fillStyle = 'blue';
ctx.fillRect(400,400,squad,squad);
////////////

window.addEventListener('keydown', e => {
	switch(e.keyCode) {
		case 87 : 
		direction = 'UP';
		break;
		case 68 : 
		direction = 'RIGHT';
		break;
		case 65 : 
		direction = 'LEFT';
		break;
		case 83 : 
		direction = 'DOWN';
		break;
	}
})



snake[0] = {
	x: position,
	y: position
}



function draw () {
// ctx.clearRect(0,0,800,800);
	for(let i = 0; i < snake.length; i++) {
		ctx.fillStyle = (i == 0) ?  'green' : '#ffffff';
		ctx.fillRect(snake[i].x,snake[i].y, squad,squad);
		ctx.strokeRect(snake[i].x,snake[i].y, squad,squad);
	}
	let snakeX = snake[0].x; // change position thanks to vars
	let snakeY = snake[0].y;

	
	if(direction == "UP") {
		snakeY -= squad;
	}
	if(direction == "DOWN") {
		snakeY += squad;
	}
	if(direction == "RIGHT") {
		snakeX+= squad;
	}
	if(direction == "LEFT") {
		snakeX-= squad;
	}

let newHead = { //  save a new position 
		x: snakeX,
		y: snakeY
	}
	snake.unshift(newHead); //  add the new position of head
	snake.pop();
	// ctx.clearRect(snake[snake.length-1].x,snake[snake.length-1].y, squad,squad);

}


setInterval(draw,300);

// ctx.fillStyle = '#232323';
// ctx.fillRect(0,0, canvas.width,canvas.height);


// ***** Painting lines ***** //
// for(let i = 0; i < cells; i++) {
// counter += squad;
// // vertical lines
// ctx.beginPath();
// ctx.strokeStyle = "#ffffff";
// ctx.moveTo(counter, 0);
// ctx.lineTo(counter, canvas.height);
// ctx.stroke();

// // horizontal lines
// ctx.beginPath();
// ctx.moveTo(0, counter);
// ctx.lineTo(canvas.width, counter);
// ctx.stroke();
// }














// let squad;
// let posX = 50;
// let posY = 50;
// squad = ctx.fillStyle = '#e5e5e5';
// squad = ctx.fillRect(50,50, 15,15);

// const timer = setInterval(()=> {
// 	squad = ctx.fillRect(posX++,posY++,15,15);
// 	if(posX >= canvas.width / 2 ) {
// 		clearInterval(timer);
// 	}
// },10)


// const five = 5;
// switch (five) {
//  case 1:
// console.log(five);
// break;
//  case 2:
//  five;
//  break;
//  case 5:
//  console.log (true);
//  break;
//  default:
//  console.log(false);
// }

