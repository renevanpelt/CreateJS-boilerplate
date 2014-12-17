var keyObject = {
	list: [],
	up: false,
	down: false,
	left: false,
	right: false
	};



$(window).keydown( function(event) {
	
	keyCode = event.which || event.keycode;
	
	keyObject.list.push(keyCode);	
	//console.log(keyCode);
	
	switch(keyCode){
		case  38:
		  keyObject.up = true;
		  break;
		case  40:
		  keyObject.down = true;
		  break;
		case  37:
		  keyObject.left = true;
		  break;
		case  39:
		  keyObject.right = true;
		  break;
	}
})


$(window).keyup( function(event) {

	keyCode = event.which || event.keycode;

	for(i=0;i<keyObject.list.length;i++){

		if(keyObject.list[i] == keyCode){
		    keyObject.list.splice(i,1);
		}
	}
	//console.log(keyCode);

	switch(keyCode){
		case  38:
		  keyObject.up = false;
		  break;
		case  40:
		  keyObject.down = false;
		  break;
		case  37:
		  keyObject.left = false;
		  break;
		case  39:
		  keyObject.right = false;
		  break;
	}
})
