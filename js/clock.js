
function clock() {
		   var now = new Date();
		   var outStr = checktime(now.getHours())+':'+checktime(now.getMinutes())+':'+checktime(now.getSeconds());
	//	   var out = checktime(now.getHours())+':'+checktime(now.getMinutes());
		   document.getElementById('time').innerHTML=outStr;
	//	   document.getElementById('time1').innerHTML=out;
		   setTimeout('clock()',1000);
		}
	clock();	

function checktime(i)
 	{
 		if(i<10) {
 			i= "0" + i; }
 		return i;
 	} 		

	