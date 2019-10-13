var a , b ;
var minuts = 10 ; 
var segons = 0 ; 
var crono = 24;
var stop , reset ; 


window.onload= function(){
stop = true ;
reset = false ; 
  a = b = 0 ; 
   	$("#marcador").text(a);
    $("#marcador1").text(b);
  

   $("#a1").click(function(){ 
   	 a = a +1 ; 
   	  	$("#marcador").text(a);
    $("#marcador1").text(b);
    
   });
   $("#a1i").click(function(){ 
   	 a = a -1 ; 
   	  	$("#marcador").text(a);
    $("#marcador1").text(b);
    
   });
   $("#a2").click(function(){ 
   	 b = b +1 ; 
   	  	$("#marcador").text(a);
    $("#marcador1").text(b);
    
   });
$("#a2i").click(function(){ 
   	 b = b -1 ; 
   	  	$("#marcador").text(a);
    $("#marcador1").text(b);
    
   });

$("#reset").click(function(){ 
   
    	minuts = 10 ; 
    segons = 0 ; 
      document.getElementById("demo").innerHTML =  minuts + " : " + segons;

    

   });
$("#stop").click(function(){ 
   
    	stop = !stop;

    

   });
$("#catorce").click(function(){ 
   
    	crono= 15 ; 
   });
$("#reset2").click(function(){ 
   
    	crono= 25 ; 
   });
$("#prorroga").click(function(){ 
   
    	minuts= 5 ; 
    	segons= 1;
   });
  document.getElementById("demo").innerHTML =  minuts + " : " + segons;
    document.getElementById("tim").innerHTML =  crono ;



 var myVar = setInterval(myTimer, 1000);
  var myVar = setInterval(my24, 1000);

 



	





}
function myTimer() {
	if (stop == false){
     segons -= 1 ; 
	

   if (segons < 0) {
   	minuts-=1;
   	segons = 59 ; 
   }
   if (minuts == 0 ) { 
   	minuts = 0 ; 
   	segons = 59; 
   }
  
  
  document.getElementById("demo").innerHTML =  minuts + " : " + segons;
}
}
function my24(){
	if (stop == false ){
	crono-=1;
	if (crono == 0 ){
		crono = 24 ; 
	} 

	    document.getElementById("tim").innerHTML =  crono ;

}

}