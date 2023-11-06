var i = 0;
var time = 3000;
var images = [];
images[0] = 'images/icecube.jpg';
// images[1] = 'images/pizza.jpg';
// images[2] = 'images/porkparty.jpg';
// images[3] = 'images/sundaegook.jpg';

const banner_img = document.getElementById('banner');
console.log(banner_img)

// Need to change format into a kind of...... landing page

// Use an image tag and then change its source
// document.name of tag.src to access html tag source of image

//<img name="slide" width="400" height="200" />

function changeImg(){
	banner_img.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run whatever function as soon as website loads
window.onload = changeImg;
