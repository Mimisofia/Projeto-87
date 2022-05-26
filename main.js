
// Create canvas variable
var canvas = new fabric.canvas('myCanvas');
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function new_image(get_image)
{
	// para enviar imagens
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
		
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);
	});	
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '?') // adicione os códigos adequados às teclas
	{
		// enviar ranger escarlate
		new_image('docinho.ppg');
		console.log("e");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image('florzinha.jpeg');
		console.log("v");
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image('lindinha.png');
		console.log("a");
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		// enviar ranger rosa
		new_image('professor.png');
		console.log("r");
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image('macacolouco.jpg');
		console.log("i");
	// enviar ranger índigo
	
	}
	
}

