var a=0;
var ID;

function start(){
	ID = setInterval(run,10);
	function run(){
	a = a + 5;
	if (a > (screen.width - 150)){
		clearInterval(ID);
		a=0;
	}else{
		
			
			var x = document.getElementById("img");
			x.style.marginLeft = a + 'px';
		}
	}
	
}

function stop() {
	clearInterval(ID);
}

