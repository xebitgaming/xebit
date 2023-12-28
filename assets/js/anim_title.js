var data="XEBIT3817";
var text="XEBIT";
var done=1;
statusIn(text);
function statusIn(text){
  var max=4;
	var delay=0;
	if (done){
		done = 0;
	  decrypt_helper(text, max, delay,  0, max);
 }
}
function decrypt_helper(text, runs_left, delay, charvar, max){
	if (!done){
	runs_left = runs_left - 1;
   //alert(	runs_left);
	var status = text.substring(0,charvar);
  for(var current_char = charvar; current_char < text.length; current_char++){
		status += data.charAt(Math.round(Math.random()*data.length));
	    }
	document.title = status;
	var rerun = "decrypt_helper('" + text + "'," + runs_left + "," + delay + "," + charvar + "," + max + ");"
	var new_char = charvar + 1;
	var next_char = "decrypt_helper('" + text + "'," + max + "," + delay + "," + new_char + "," + max + ");"
	if(runs_left > 0){
		setTimeout(rerun, delay);
		}
	else{
		if (charvar < text.length){
			setTimeout(next_char, Math.round(delay*(charvar+3)/(charvar+1)));
			}
		else
			{
			done = 1;
			}
		}
	}
	statusIn(text);
}
// YBTHEFLASH - 2022 #https://ybtheflash.in
