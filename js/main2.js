
var vectornumber = [,,,,,,,,,,,,];
var vectorPlayers = [,,,,,,,,,,,,];
var cont = 0 ;
var jugador = -1;
var minuts = 0;
var segons= 0;
var menos = 0 ;
var equipolocal=0;
var a=0;
var rebdf = 0 ;
var reboff  = 0 ;
var faltas = 0 ;
var tir1 = tir2 = tir3 = tir1f = tir2f = tir3f = 0; 
var id = -1 ;
var stopp=true;
window.onload= function(){
jugador = -1;

   
$("#start").click(function(){ 
	stopp=false;

});
$("#stop").click(function(){ 
	stopp=true;

});


   $("#a1").click(function(){ 
		a = a +1 ; 
		masmenos(-1);
			 $("#marcador22").text(a);
			 imprimir();
    
   });
   $("#a1i").click(function(){ 
		a = a - 1 ; 
		masmenos(1);
   	  	$("#marcador22").text(a);
			 imprimir();
   });
  

$("#menos").click(function(){
 	    menos = 1;


	});

 $("#i0").click(function(){
 	    jugador = 0;


	});
	$("#i0").dblclick(function(){
		if(cont == 5 ) window.alert("YA HAY 5 JUGADORES");
		
		if(cont<5 ){
			vectorPlayers[0].stop=!vectorPlayers[0].stop;
			if(vectorPlayers[0].stop== true ){
				document.getElementById('i0').style.background ='red';	
				vectorPlayers[0].titular =false;
				--cont;
	
			}
			else {
					document.getElementById('i0').style.background ='green';
					vectorPlayers[0].titular =true;
				    ++cont
				}
			   
			}
		else {
			if(vectorPlayers[0].titular ==true) {
				vectorPlayers[0].stop=!vectorPlayers[0].stop;
				document.getElementById('i0').style.background ='red';	
				vectorPlayers[0].titular =false;
				--cont;

			}
		}

		
			
   });

	
  $("#i1").click(function(){
  	 
 		jugador=1;


	});

	$("#minuts").click(function(){
		if(cont == 5 ) window.alert("YA HAY 5 JUGADORES");
		if(cont<5 ){
			vectorPlayers[jugador].stop=!vectorPlayers[jugador].stop;
			if(vectorPlayers[jugador].stop== true ){
			  if(jugador == 0 )	document.getElementById('i0').style.background ='red';	
			  if(jugador == 1 )	document.getElementById('i1').style.background ='red';	
			  if(jugador == 2 )	document.getElementById('i2').style.background ='red';	
			  if(jugador == 3 )	document.getElementById('i3').style.background ='red';	
			  if(jugador == 4 )	document.getElementById('i4').style.background ='red';	
			  if(jugador == 5 )	document.getElementById('i5').style.background ='red';	
			  if(jugador == 6 )	document.getElementById('i6').style.background ='red';	
			  if(jugador == 7 )	document.getElementById('i7').style.background ='red';	
			  if(jugador == 8 )	document.getElementById('i8').style.background ='red';	
			  if(jugador == 9 )	document.getElementById('i9').style.background ='red';	
			  if(jugador == 10 )	document.getElementById('i10').style.background ='red';	
			  if(jugador == 11)	document.getElementById('i11').style.background ='red';	


				vectorPlayers[jugador].titular =false;
				--cont;
	
			}
			else {
				if(jugador == 0 )	document.getElementById('i0').style.background ='green';	
				if(jugador == 1 )	document.getElementById('i1').style.background ='green';	
				if(jugador == 2 )	document.getElementById('i2').style.background ='green';	
				if(jugador == 3 )	document.getElementById('i3').style.background ='green';	
				if(jugador == 4 )	document.getElementById('i4').style.background ='green';	
				if(jugador == 5 )	document.getElementById('i5').style.background ='green';	
				if(jugador == 6 )	document.getElementById('i6').style.background ='green';	
				if(jugador == 7 )	document.getElementById('i7').style.background ='green';	
				if(jugador == 8 )	document.getElementById('i8').style.background ='green';	
				if(jugador == 9 )	document.getElementById('i9').style.background ='green';	
				if(jugador == 10 )	document.getElementById('i10').style.background ='green';	
				if(jugador == 11)	document.getElementById('i11').style.background ='green';	
					  vectorPlayers[jugador].titular =true;
				    ++cont
				}
			   
			}
		else {
			if(vectorPlayers[jugador].titular ==true) {
				vectorPlayers[jugador].stop=!vectorPlayers[jugador].stop;
				if(jugador == 0 )	document.getElementById('i0').style.background ='red';	
				if(jugador == 1 )	document.getElementById('i1').style.background ='red';	
				if(jugador == 2 )	document.getElementById('i2').style.background ='red';	
				if(jugador == 3 )	document.getElementById('i3').style.background ='red';	
				if(jugador == 4 )	document.getElementById('i4').style.background ='red';	
				if(jugador == 5 )	document.getElementById('i5').style.background ='red';	
				if(jugador == 6 )	document.getElementById('i6').style.background ='red';	
				if(jugador == 7 )	document.getElementById('i7').style.background ='red';	
				if(jugador == 8 )	document.getElementById('i8').style.background ='red';	
				if(jugador == 9 )	document.getElementById('i9').style.background ='red';	
				if(jugador == 10 )	document.getElementById('i10').style.background ='red';	
				if(jugador == 11)	document.getElementById('i11').style.background ='red';					vectorPlayers[jugador].titular =false;
				--cont;

			}
		}
		jugador=-1;

		

   });
   $("#i2").click(function(){
 		  	jugador=2;
 		  			
 		  		


	});
	$("#i2").dblclick(function(){
		if(cont == 5 ) window.alert("YA HAY 5 JUGADORES");

		if(cont<5 ){
			vectorPlayers[2].stop=!vectorPlayers[2].stop;
			if(vectorPlayers[2].stop== true ){
				document.getElementById('i2').style.background ='red';	
				vectorPlayers[2].titular =false;
				--cont;
	
			}
			else {
					document.getElementById('i2').style.background ='green';
					vectorPlayers[2].titular =true;
				    ++cont
				}
			   
			}
		else {
			if(vectorPlayers[2].titular ==true) {
				vectorPlayers[2].stop=!vectorPlayers[2].stop;
				document.getElementById('i2').style.background ='red';	
				vectorPlayers[2].titular =false;
				--cont;

			}
		}

		
   });
    $("#i3").click(function(){
 		 		jugador=3;
 		 			
 		 		

	});
	$("#i3").dblclick(function(){
		if(cont == 5 ) window.alert("YA HAY 5 JUGADORES");

		if(cont<5 ){
			vectorPlayers[3].stop=!vectorPlayers[3].stop;
			if(vectorPlayers[3].stop== true ){
				document.getElementById('i3').style.background ='red';	
				vectorPlayers[3].titular =false;
				--cont;
	
			}
			else {
					document.getElementById('i3').style.background ='green';
					vectorPlayers[3].titular =true;
				    ++cont
				}
			   
			}
		else {
			if(vectorPlayers[3].titular ==true) {
				vectorPlayers[3].stop=!vectorPlayers[3].stop;
				document.getElementById('i3').style.background ='red';	
				vectorPlayers[3].titular =false;
				--cont;

			}
		}

		

   });
	 $("#i4").click(function(){
 		  		 jugador=4;
 		  

	});
	$("#i4").dblclick(function(){
		if(cont == 5 ) window.alert("YA HAY 5 JUGADORES");

		if(cont<5 ){
			vectorPlayers[4].stop=!vectorPlayers[4].stop;
			if(vectorPlayers[4].stop== true ){
				document.getElementById('i4').style.background ='red';	
				vectorPlayers[4].titular =false;
				--cont;
	
			}
			else {
					document.getElementById('i4').style.background ='green';
					vectorPlayers[4].titular =true;
				    ++cont
				}
			   
			}
		else {
			if(vectorPlayers[4].titular ==true) {
				vectorPlayers[4].stop=!vectorPlayers[4].stop;
				document.getElementById('i4').style.background ='red';	
				vectorPlayers[4].titular =false;
				--cont;

			}
		}

		

   });
	  $("#i5").click(function(){
 		 		 jugador=5; 		
 		 	


	});
	$("#i5").dblclick(function(){
		if(cont == 5 ) window.alert("YA HAY 5 JUGADORES");

		if(cont<5 ){
			vectorPlayers[5].stop=!vectorPlayers[5].stop;
			if(vectorPlayers[5].stop== true ){
				document.getElementById('i5').style.background ='red';	
				vectorPlayers[5].titular =false;
				--cont;	
			}
			else {
					document.getElementById('i5').style.background ='green';
					vectorPlayers[5].titular =true;
				    ++cont
				}
			   
			}
		else {
			if(vectorPlayers[5].titular ==true) {
				vectorPlayers[5].stop=!vectorPlayers[5].stop;
				document.getElementById('i5').style.background ='red';	
				vectorPlayers[5].titular =false;
				--cont;

			}
		}

		
		

   });
	   $("#i6").click(function(){
				  jugador=6;
				  
 		 			
 		 

	});
	$("#i6").dblclick(function(){
		if(cont == 5 ) window.alert("YA HAY 5 JUGADORES");

		if(cont<5 ){
			vectorPlayers[6].stop=!vectorPlayers[6].stop;
			if(vectorPlayers[6].stop== true ){
				document.getElementById('i6').style.background ='red';	
				vectorPlayers[6].titular =false;
				--cont;
	
			}
			else {
					document.getElementById('i6').style.background ='green';
					vectorPlayers[6].titular =true;
				    ++cont
				}
			   
			}
		else {
			if(vectorPlayers[6].titular ==true) {
				vectorPlayers[6].stop=!vectorPlayers[6].stop;
				document.getElementById('i6').style.background ='red';	
				vectorPlayers[6].titular =false;
				--cont;

			}
		}

		

   });
	   $("#i7").click(function(){
 		 	 jugador=7;
 		 
 	

	});
	$("#i7").dblclick(function(){
		if(cont == 5 ) window.alert("YA HAY 5 JUGADORES");

		if(cont<5 ){
			vectorPlayers[7].stop=!vectorPlayers[7].stop;
			if(vectorPlayers[7].stop== true ){
				document.getElementById('i7').style.background ='red';	
				vectorPlayers[7].titular =false;
				--cont;
	
			}
			else {
					document.getElementById('i7').style.background ='green';
					vectorPlayers[7].titular =true;
				    ++cont
				}
			   
			}
		else {
			if(vectorPlayers[7].titular =true) {
				vectorPlayers[7].stop=!vectorPlayers[7].stop;
				document.getElementById('i7').style.background ='red';	
				vectorPlayers[7].titular =false;
				--cont;

			}
		}

		

		

   });
	   $("#i8").click(function(){
 		  jugador=8;
 		  	

	});
	$("#i8").dblclick(function(){
		if(cont == 5 ) window.alert("YA HAY 5 JUGADORES");

		if(cont<5 ){
			vectorPlayers[8].stop=!vectorPlayers[8].stop;
			if(vectorPlayers[8].stop== true ){
				document.getElementById('i8').style.background ='red';	
				vectorPlayers[8].titular =false;
				--cont;
			}
			else {
					document.getElementById('i8').style.background ='green';
					vectorPlayers[8].titular =true;
				    ++cont
				}
			   
			}
		else {
			if(vectorPlayers[8].titular ==true) {
				vectorPlayers[8].stop=!vectorPlayers[8].stop;
				document.getElementById('i8').style.background ='red';	
				vectorPlayers[8].titular =false;
				--cont;

			}
		}

		


		

   });
	   $("#i9").click(function(){
 		  jugador= 9;

	});
	$("#i9").dblclick(function(){
		if(cont == 5 ) window.alert("YA HAY 5 JUGADORES");

		if(cont<5 ){
			vectorPlayers[9].stop=!vectorPlayers[9].stop;
			if(vectorPlayers[9].stop== true ){
				document.getElementById('i9').style.background ='red';	
				vectorPlayers[9].titular =false;
				--cont;
			}
			else {
					document.getElementById('i9').style.background ='green';
					vectorPlayers[9].titular =true;
				    ++cont
				}
			   
			}
		else {
			if(vectorPlayers[9].titular ==true) {
				vectorPlayers[9].stop=!vectorPlayers[9].stop;
				document.getElementById('i9').style.background ='red';	
				vectorPlayers[9].titular =false;
				--cont;

			}
		}

		

		

   });
	   $("#i10").click(function(){
	   	jugador=10;

	});
	$("#i10").dblclick(function(){
		if(cont == 5 ) window.alert("YA HAY 5 JUGADORES");

		if(cont<5 ){
			vectorPlayers[10].stop=!vectorPlayers[10].stop;
			if(vectorPlayers[10].stop== true ){
				document.getElementById('i10').style.background ='red';	
				vectorPlayers[10].titular =false;
	             --cont;
			}
			else {
					document.getElementById('i10').style.background ='green';
					vectorPlayers[10].titular =true;
				    ++cont
				}
			   
			}
		else {
			if(vectorPlayers[10].titular ==true) {
				vectorPlayers[10].stop=!vectorPlayers[10].stop;
				document.getElementById('i10').style.background ='red';	
				vectorPlayers[10].titular =false;
				--cont;

			}
		}

		

		

   });
	   $("#i11").click(function(){
	   	 jugador=11;
 		 		
 		 	

	});



	$("#rival").click(function(){
		jugador=-2;
});



	$("#i11").dblclick(function(){
		if(cont == 5 ) window.alert("YA HAY 5 JUGADORES");
		if(cont<5 ){
			vectorPlayers[11].stop=!vectorPlayers[11].stop;
			if(vectorPlayers[11].stop== true ){
				document.getElementById('i11').style.background ='red';	
				vectorPlayers[11].titular =false;
				--cont;
	
			}
			else {
					document.getElementById('i11').style.background ='green';
					vectorPlayers[11].titular =true;
				    ++cont
				}
			   
			}
		else {
			if(vectorPlayers[11].titular ==true) {
				vectorPlayers[11].stop=!vectorPlayers[11].stop;
				document.getElementById('i11').style.background ='red';	
				vectorPlayers[11].titular =false;
				--cont;

			}
		}

		


   });
	  
       
         
$("#faltr").click(function(){
			stopp=true;
	      if(menos == 1 ){
	      			  vectorPlayers[jugador].faltasr=vectorPlayers[jugador].faltasr-1;
	      			  menos = 0 ; 
					  faltas = faltas -1 


	      }
	      else {
	      			  vectorPlayers[jugador].faltasr=vectorPlayers[jugador].faltasr+1;
					  faltas = faltas + 1

		  }
		  jugador = -1;
		  $("#Falt").text( faltas );
		  imprimir();
		 
	});



	$("#falt").click(function(){
		stopp=true;
		if(menos == 1 ){
					  vectorPlayers[jugador].faltas=vectorPlayers[jugador].faltas-1;
					  menos = 0 ; 

		}
		else {
					  vectorPlayers[jugador].faltas=vectorPlayers[jugador].faltas+1;

		}
		jugador = -1;

		imprimir();
	   
  });
		$("#2p").click(function(){
			console.log(jugador)

				      if(menos == 1 ){
				      	vectorPlayers[jugador].tirs2-=1;
		  				vectorPlayers[jugador].punts-=2;
						menos = 0 ; 
						equipolocal-=2;
						$("#marcador21").text(equipolocal);
						masmenos(-2);

                     }
						else  if(jugador == -2 ){
						console.log(jugador)
						tir2 += 1 ; 
						a+=2;
						$("#marcador22").text(a);
						$("#prv").text(a);
						var tir2t = tir2 + tir2f
						$("#t2rv").text( tir2+ "/" + tir2t);
										

				   }
				   else if (menos == 1 && jugador == -2 ){
					console.log(jugador)
					tir2 -= 1 ; 
					a-=2;
					$("#marcador22").text(a);
					$("#prv").text(a);
					var tir2t = tir2 + tir2f
					$("#t2rv").text( tir2+ "/" + tir2t);

				   }

			else {
				vectorPlayers[jugador].tirs2+=1;
				  vectorPlayers[jugador].punts+=2;
				  equipolocal+=2;
				  $("#marcador21").text(equipolocal);
				  masmenos(2);
			}
			jugador = -1;

		  imprimir();

		  
	});
		$("#3p").click(function(){
			if (menos == 1 ){
				vectorPlayers[jugador].tirs3-=1;
				vectorPlayers[jugador].punts-=3;
				equipolocal-=3;
				$("#marcador21").text(equipolocal);
				menos = 0 ;
				masmenos(-3);
			}
			if(jugador == -2 ){
				console.log(jugador)
			   tir3 += 1 ; 
			   a+=3;
			   $("#marcador22").text(a);
			   $("#prv").text(a);
			   var tir3t = tir3 + tir3f
			   $("#t3rv").text( tir3+ "/" + tir3t);
							   

		  }
			else{
				vectorPlayers[jugador].tirs3+=1;
				  vectorPlayers[jugador].punts+=3;
				  equipolocal+=3;
				  $("#marcador21").text(equipolocal);
				  masmenos(3);
			}
		    jugador = -1;

		  
		  imprimir();
		  
	});
		$("#1p").click(function(){
			if (menos == 1 ){
				vectorPlayers[jugador].tirs1-=1;
				  vectorPlayers[jugador].punts-=1;
				  equipolocal-=1;
				  $("#marcador21").text(equipolocal);
				menos = 0 ; 
				masmenos(-1);
			}
			
			if(jugador == -2 ){
			   console.log(jugador)
			   tir1 += 1; 
			   a+=1;
			   console.log(tir1)
			   $("#marcador22").text(a);
			   $("#prv").text(a);
			   var tir1t = tir1 + tir1f;
			   $("#t1rv").text( tir1+ "/" + tir1t);
							   

		  }

		


			else {
				vectorPlayers[jugador].tirs1+=1;
				  vectorPlayers[jugador].punts+=1;
				  equipolocal+=1;
				  $("#marcador21").text(equipolocal);
				  masmenos(1);

			}
		    
		  		
			jugador = -1;

		  imprimir();
		  
	});
		$("#rob").click(function(){
			if (menos == 1 ){
				vectorPlayers[jugador].robos-=1;
				menos = 0 ; 

			}
			else {
			   vectorPlayers[jugador].robos+=1;

			}
		  		 
			jugador = -1;
 

		  imprimir();
		  
	});
		$("#perd").click(function(){
			if (menos == 1 ){
			  vectorPlayers[jugador].perdues-=1;
			  menos =0 ; 

			}
			else {
			  vectorPlayers[jugador].perdues+=1;
	
			}
		  		  
			jugador = -1;

		  imprimir();
		  
	});
		$("#reb").click(function(){
			if (menos == 1 ){
			   vectorPlayers[jugador].rebots-=1;	
			   vectorPlayers[jugador].rebotsdef-=1;	
			   menos = 0 ; 
	 	
				}  
			

		
			else if(jugador == -2 ){
			   rebdf += 1 ; 
			   $("#rdrv").text( rebdf);
							
		  }
			else {
			  vectorPlayers[jugador].rebots+=1;		 
			  vectorPlayers[jugador].rebotsdef+=1;		 



			}
		
			jugador = -1;

		  imprimir();
		 
	});
	$("#reboff").click(function(){
		if (menos == 1 ){
		   vectorPlayers[jugador].rebots-=1;	
		   vectorPlayers[jugador].rebotsoff-=1;		 	  
			menos = 0 ; 
		}

		else if(jugador == -2 ){
			reboff += 1 ; 
			$("#rorv").text( reboff);
						 
	   }

		else {
		  vectorPlayers[jugador].rebots+=1;		 
		  vectorPlayers[jugador].rebotsoff+=1;		 



		}
	
		jugador = -1;

	  imprimir();
	 
});
		$("#2pf").click(function(){
			if(menos == 1 ){
					  vectorPlayers[jugador].tirs2f-=1;
					  menos = 0 ; 	
			}

			else if(jugador == -2 ){
				console.log(jugador)
			   tir2f += 1 ; 
			   var tir2t = tir2 + tir2f
			   $("#t2rv").text( tir2+ "/" + tir2t);
							   

		  }
			else {
						  vectorPlayers[jugador].tirs2f+=1;

			}	
			jugador = -1;

		  imprimir();

	});
		$("#3pf").click(function(){
			if (menos == 1 ){
		  vectorPlayers[jugador].tirs3f-=1;
		  menos = 0 ; 

			} 


			else if(jugador == -2 ){
				console.log(jugador)
			   tir3f += 1 ; 
			   var tir3t = tir3 + tir3f
			   $("#t3rv").text( tir3+ "/" + tir3t);
							   

		  }
			else {
						  vectorPlayers[jugador].tirs3f+=1;

			}
			jugador = -1;
	

		  imprimir();
		
	});
		$("#1pf").click(function(){
			if (menos == 1 ){
			  vectorPlayers[jugador].tirs1f-=1;
			  menos = 0 ; 

			}
			else if(jugador == -2 ){
			   console.log(jugador)
			   tir1f += 1 ; 
			   var tir1t = tir1 + tir1f
			   $("#t1rv").text( tir1+ "/" + tir1t);
							   
		  }
			else {
			   vectorPlayers[jugador].tirs1f+=1;	
			}
			jugador = -1;
	 

		  imprimir();

	});
		$("#ass").click(function(){
			if (menos == 1 ){
						  vectorPlayers[jugador].assistencia-=1;
                         menos = 0 ;
			}
		 else{
		 			  vectorPlayers[jugador].assistencia+=1;

		 } 
		 jugador = -1;


		  imprimir();

	});
         $("#tap").click(function(){
			if (menos == 1 ){
						  vectorPlayers[jugador].tapones-=1;
                         menos = 0 ;
			}
		 else{
		 			  vectorPlayers[jugador].tapones+=1;

		 } 
		 jugador = -1;


		  imprimir();

	});
	$("#tapr").click(function(){
		if (menos == 1 ){
					  vectorPlayers[jugador].taponesr-=1;
					 menos = 0 ;
		}
	 else{
				   vectorPlayers[jugador].taponesr+=1;

	 } 
	 jugador = -1;


	  imprimir();

});




document.getElementById("min").innerHTML =  00 + " : " +00;
  document.getElementById("min1").innerHTML = 00 + " : " +00;
  document.getElementById("min2").innerHTML = 00 + " : " +00;
  document.getElementById("min3").innerHTML = 00 + " : " +00;
  document.getElementById("min4").innerHTML = 00 + " : " +00;
  document.getElementById("min5").innerHTML = 00 + " : " +00;
  document.getElementById("min6").innerHTML = 00 + " : " +00;
  document.getElementById("min7").innerHTML = 00+ " : " +00;
  document.getElementById("min8").innerHTML = 00 + " : " +00;
  document.getElementById("min9").innerHTML = 00 + " : " +00;
  document.getElementById("min10").innerHTML = 00+ " : " +00;
  document.getElementById("min11").innerHTML = 00+ " : " +00;


var myVar = setInterval(myTimer, 1000);

	$('#exampleModalCenter').modal({});

	$("#submitnumber").click(function(){
		guarda();
		imprimir();
	});
}

function myTimer() {
  if(vectorPlayers[0].stop == false && stopp ==false ){
	vectorPlayers[0].segons += 1 ; 
	

	if (vectorPlayers[0].segons > 59) {
		vectorPlayers[0].minuts+=1;
		vectorPlayers[0].segons = 0; 
	}
  }
  if(vectorPlayers[1].stop == false && stopp ==false){
	vectorPlayers[1].segons += 1 ; 
	

	if (vectorPlayers[1].segons > 59) {
		vectorPlayers[1].minuts+=1;
		vectorPlayers[1].segons = 0; 
	}
  } 
  if(vectorPlayers[2].stop == false && stopp ==false ){
	vectorPlayers[2].segons += 1 ; 
	

	if (vectorPlayers[2].segons > 59) {
		vectorPlayers[2].minuts+=1;
		vectorPlayers[2].segons = 0; 
	}
  } 
  if(vectorPlayers[3].stop == false && stopp ==false ){
	vectorPlayers[3].segons += 1 ; 
	

	if (vectorPlayers[3].segons > 59) {
		vectorPlayers[3].minuts+=1;
		vectorPlayers[3].segons = 0; 
	}
  } 
  if(vectorPlayers[4].stop == false && stopp ==false ){
	vectorPlayers[4].segons += 1 ; 
	

	if (vectorPlayers[4].segons > 59) {
		vectorPlayers[4].minuts+=1;
		vectorPlayers[4].segons = 0; 
	}
  } 

  if(vectorPlayers[5].stop == false && stopp ==false ){
	vectorPlayers[5].segons += 1 ; 
	

	if (vectorPlayers[5].segons > 59) {
		vectorPlayers[5].minuts+=1;
		vectorPlayers[5].segons = 0; 
	}
  } 

  if(vectorPlayers[6].stop == false && stopp ==false){
	vectorPlayers[6].segons += 1 ; 
	

	if (vectorPlayers[6].segons > 59) {
		vectorPlayers[6].minuts+=1;
		vectorPlayers[6].segons = 0; 
	}
  } 
  
  if(vectorPlayers[7].stop == false && stopp ==false ){
	vectorPlayers[7].segons += 1 ; 
	

	if (vectorPlayers[7].segons > 59) {
		vectorPlayers[7].minuts+=1;
		vectorPlayers[7].segons = 0; 
	}
  } 
  
  if(vectorPlayers[8].stop == false && stopp ==false ){
	vectorPlayers[8].segons += 1 ; 
	

	if (vectorPlayers[8].segons > 59) {
		vectorPlayers[8].minuts+=1;
		vectorPlayers[8].segons = 0; 
	}
  } 

  if(vectorPlayers[9].stop == false && stopp ==false){
	vectorPlayers[9].segons += 1 ; 
	

	if (vectorPlayers[9].segons > 59) {
		vectorPlayers[9].minuts+=1;
		vectorPlayers[9].segons = 0; 
	}
  } 
  if(vectorPlayers[10].stop == false && stopp ==false ){
	vectorPlayers[10].segons += 1 ; 
	

	if (vectorPlayers[10].segons > 59) {
		vectorPlayers[10].minuts+=1;
		vectorPlayers[10].segons = 0; 
	}
  } 

  if(vectorPlayers[11].stop == false  && stopp ==false){
	vectorPlayers[11].segons += 1 ; 
	

	if (vectorPlayers[11].segons > 59) {
		vectorPlayers[11].minuts+=1;
		vectorPlayers[11].segons = 0; 
	}
  } 



  document.getElementById("min").innerHTML = vectorPlayers[0].minuts + " : " +vectorPlayers[0].segons;
  document.getElementById("min1").innerHTML = vectorPlayers[1].minuts + " : " +vectorPlayers[1].segons;
  document.getElementById("min2").innerHTML = vectorPlayers[2].minuts + " : " +vectorPlayers[2].segons;
  document.getElementById("min3").innerHTML = vectorPlayers[3].minuts + " : " +vectorPlayers[3].segons;
  document.getElementById("min4").innerHTML = vectorPlayers[4].minuts + " : " +vectorPlayers[4].segons;
  document.getElementById("min5").innerHTML = vectorPlayers[5].minuts + " : " +vectorPlayers[5].segons;
  document.getElementById("min6").innerHTML = vectorPlayers[6].minuts + " : " +vectorPlayers[6].segons;
  document.getElementById("min7").innerHTML = vectorPlayers[7].minuts + " : " +vectorPlayers[7].segons;
  document.getElementById("min8").innerHTML = vectorPlayers[8].minuts + " : " +vectorPlayers[8].segons;
  document.getElementById("min9").innerHTML = vectorPlayers[9].minuts + " : " +vectorPlayers[9].segons;
  document.getElementById("min10").innerHTML = vectorPlayers[10].minuts + " : " +vectorPlayers[10].segons;
  document.getElementById("min11").innerHTML = vectorPlayers[11].minuts + " : " +vectorPlayers[11].segons;
  
}

 function imprimir(){
 	 	 stats();
          statsi1();
         statsi2();
         statsi3();
         statsi4();
         statsi5();
         statsi6();
         statsi7();
         statsi8();
         statsi9();
         statsi10();
         statsi11();
 }
	

function stats(){
	$("#Faltas").text(vectorPlayers[0].faltas);
	$("#MasMenos").text(vectorPlayers[0].masmenos);
	$("#Faltasr").text(vectorPlayers[0].faltasr);
	$("#dorsal").text(vectorPlayers[0].num);
	$("#Tapones").text(vectorPlayers[0].tapones);
	$("#Taponesr").text(vectorPlayers[0].taponesr);
	$("#Punts").text(vectorPlayers[0].punts);
	$("#Rebotes").text(vectorPlayers[0].rebots);
	$("#Rebotesdo").text(vectorPlayers[0].rebotsdef + "+" + vectorPlayers[0].rebotsoff);
	$("#Robos").text(vectorPlayers[0].robos);
	$("#Perdues").text(vectorPlayers[0].perdues);
	var val = vectorPlayers[0].tapones+vectorPlayers[0].robos + vectorPlayers[0].punts + vectorPlayers[0].rebots+vectorPlayers[0].assistencia+vectorPlayers[0].faltasr;
	var val2 = vectorPlayers[0].tirs2f+vectorPlayers[0].tirs3f +vectorPlayers[0].tirs1f + vectorPlayers[0].perdues+vectorPlayers[0].faltas+vectorPlayers[0].taponesr;
	vectorPlayers[0].valoracio=val-val2;
	$("#Valoracio").text(vectorPlayers[0].valoracio);
	var tir2 = vectorPlayers[0].tirs2 + vectorPlayers[0].tirs2f;
	var tir3 = vectorPlayers[0].tirs3 + vectorPlayers[0].tirs3f
	var tir1 = vectorPlayers[0].tirs1 + vectorPlayers[0].tirs1f
	
	$("#Tirs2").text( vectorPlayers[0].tirs2+ "/." + tir2 );
	$("#Tirs3").text( vectorPlayers[0].tirs3+ "/." + tir3 );
	$("#Tirs1").text( vectorPlayers[0].tirs1+ "/." + tir1 );
	$("#assis").text( vectorPlayers[0].assistencia);
	
	if(vectorPlayers[0].faltas == 5 ){
		document.getElementById('Faltas').style.color ='red';
	}




}
function statsi1(){
	$("#MasMenos1").text(vectorPlayers[1].masmenos);
	$("#Taponesi1").text(vectorPlayers[1].tapones);
	$("#Taponesri1").text(vectorPlayers[1].taponesr);
	$("#Faltasi1").text(vectorPlayers[1].faltas);
	$("#Faltasri1").text(vectorPlayers[1].faltasr);
	$("#Rebotesdoi1").text(vectorPlayers[1].rebotsdef + "+" + vectorPlayers[1].rebotsoff);
	$("#dorsali1").text(vectorPlayers[1].num);
	$("#Puntsi1").text(vectorPlayers[1].punts);
	$("#Rebotesi1").text(vectorPlayers[1].rebots);
	$("#Robosi1").text(vectorPlayers[1].robos);
	$("#Perduesi1").text(vectorPlayers[1].perdues);
	var val = vectorPlayers[1].tapones+vectorPlayers[1].robos + vectorPlayers[1].punts + vectorPlayers[1].rebots+vectorPlayers[1].assistencia+vectorPlayers[1].faltasr;
	var val2 = vectorPlayers[1].tirs2f+vectorPlayers[1].tirs3f +vectorPlayers[1].tirs1f + vectorPlayers[1].perdues+vectorPlayers[1].faltas+vectorPlayers[1].taponesr;
	vectorPlayers[1].valoracio=val-val2;
	$("#Valoracioi1").text(vectorPlayers[1].valoracio);
	var tir2 = vectorPlayers[1].tirs2 + vectorPlayers[1].tirs2f;
	var tir3 = vectorPlayers[1].tirs3 + vectorPlayers[1].tirs3f
	var tir1 = vectorPlayers[1].tirs1 + vectorPlayers[1].tirs1f
	
	$("#Tirs2i1").text( vectorPlayers[1].tirs2+ "/." + tir2 );
	$("#Tirs3i1").text( vectorPlayers[1].tirs3+ "/." + tir3 );
	$("#Tirs1i1").text( vectorPlayers[1].tirs1+ "/." + tir1 );
	$("#assis1").text( vectorPlayers[1].assistencia);

	if(vectorPlayers[1].faltas == 5 ){
		document.getElementById('Faltasi1').style.color ='red';
	}


}

function statsi2(){
	$("#MasMenos2").text(vectorPlayers[2].masmenos);
	$("#Rebotesdoi2").text(vectorPlayers[2].rebotsdef + "+" + vectorPlayers[2].rebotsoff);
	$("#Faltasi2").text(vectorPlayers[2].faltas);
	$("#Faltasri2").text(vectorPlayers[2].faltasr);
	$("#Taponesi2").text(vectorPlayers[2].tapones);
	$("#Taponesri2").text(vectorPlayers[2].taponesr);
	$("#dorsali2").text(vectorPlayers[2].num);
	$("#Puntsi2").text(vectorPlayers[2].punts);
	$("#Rebotesi2").text(vectorPlayers[2].rebots);
	$("#Robosi2").text(vectorPlayers[2].robos);
	$("#Perduesi2").text(vectorPlayers[2].perdues);
	var val = vectorPlayers[2].tapones+vectorPlayers[2].robos + vectorPlayers[2].punts + vectorPlayers[2].rebots+vectorPlayers[2].assistencia+vectorPlayers[2].faltasr;
	var val2 = vectorPlayers[2].tirs2f+vectorPlayers[2].tirs3f +vectorPlayers[2].tirs1f + vectorPlayers[2].perdues+vectorPlayers[2].faltas+vectorPlayers[2].taponesr;
	vectorPlayers[2].valoracio=val-val2;
	$("#Valoracioi2").text(vectorPlayers[2].valoracio);
	var tir2 = vectorPlayers[2].tirs2 + vectorPlayers[2].tirs2f;
	var tir3 = vectorPlayers[2].tirs3 + vectorPlayers[2].tirs3f
	var tir1 = vectorPlayers[2].tirs1 + vectorPlayers[2].tirs1f
	
	$("#Tirs2i2").text( vectorPlayers[2].tirs2+ "/." + tir2 );
	$("#Tirs3i2").text( vectorPlayers[2].tirs3+ "/." + tir3 );
	$("#Tirs1i2").text( vectorPlayers[2].tirs1+ "/." + tir1 );
	$("#assis2").text( vectorPlayers[2].assistencia);

	if(vectorPlayers[2].faltas == 5 ){
		document.getElementById('Faltasi2').style.color ='red';
	}




}
function statsi3(){
	$("#MasMenos3").text(vectorPlayers[3].masmenos);
	$("#Rebotesdoi3").text(vectorPlayers[3].rebotsdef + "+" + vectorPlayers[3].rebotsoff);
	$("#Faltasi3").text(vectorPlayers[3].faltas);
	$("#Faltasri3").text(vectorPlayers[3].faltasr);
	$("#Taponesi3").text(vectorPlayers[3].tapones);
	$("#Taponesri3").text(vectorPlayers[3].taponesr);
	$("#dorsali3").text(vectorPlayers[3].num);
	$("#Puntsi3").text(vectorPlayers[3].punts);
	$("#Rebotesi3").text(vectorPlayers[3].rebots);
	$("#Robosi3").text(vectorPlayers[3].robos);
	$("#Perduesi3").text(vectorPlayers[3].perdues);
	var val = vectorPlayers[3].tapones+vectorPlayers[3].robos + vectorPlayers[3].punts + vectorPlayers[3].rebots+ vectorPlayers[3].assistencia+vectorPlayers[3].faltasr;
	var val2 = vectorPlayers[3].tirs2f+vectorPlayers[3].tirs3f +vectorPlayers[3].tirs1f + vectorPlayers[3].perdues+vectorPlayers[3].faltas+vectorPlayers[3].taponesr;
	vectorPlayers[3].valoracio=val-val2;
	$("#Valoracioi3").text(vectorPlayers[3].valoracio);
	var tir2 = vectorPlayers[3].tirs2 + vectorPlayers[3].tirs2f;
	var tir3 = vectorPlayers[3].tirs3 + vectorPlayers[3].tirs3f
	var tir1 = vectorPlayers[3].tirs1 + vectorPlayers[3].tirs1f
	
	$("#Tirs2i3").text( vectorPlayers[3].tirs2+ "/." + tir2 );
	$("#Tirs3i3").text( vectorPlayers[3].tirs3+ "/." + tir3 );
	$("#Tirs1i3").text( vectorPlayers[3].tirs1+ "/." + tir1 );
	$("#assis3").text( vectorPlayers[3].assistencia);

	if(vectorPlayers[3].faltas == 5 ){
		document.getElementById('Faltasi3').style.color ='red';
	}

}
function statsi4(){
	$("#MasMenos4").text(vectorPlayers[4].masmenos);
	$("#Rebotesdoi4").text(vectorPlayers[4].rebotsdef + "+" + vectorPlayers[4].rebotsoff);
	$("#Faltasi4").text(vectorPlayers[4].faltas);
	$("#Faltasri4").text(vectorPlayers[4].faltasr);
	$("#Taponesi4").text(vectorPlayers[4].tapones);
	$("#Taponesri4").text(vectorPlayers[4].taponesr);
	$("#dorsali4").text(vectorPlayers[4].num);
	$("#Puntsi4").text(vectorPlayers[4].punts);
	$("#Rebotesi4").text(vectorPlayers[4].rebots);
	$("#Robosi4").text(vectorPlayers[4].robos);
	$("#Perduesi4").text(vectorPlayers[4].perdues);
	var val = vectorPlayers[4].tapones+vectorPlayers[4].robos + vectorPlayers[4].punts + vectorPlayers[4].rebots+vectorPlayers[4].assistencia+vectorPlayers[4].faltasr;
	var val2 = vectorPlayers[4].tirs2f+vectorPlayers[4].tirs3f +vectorPlayers[4].tirs1f + vectorPlayers[4].perdues+vectorPlayers[4].faltas+vectorPlayers[4].taponesr;
	vectorPlayers[4].valoracio=val-val2;
	$("#Valoracioi4").text(vectorPlayers[4].valoracio);
	var tir2 = vectorPlayers[4].tirs2 + vectorPlayers[4].tirs2f;
	var tir3 = vectorPlayers[4].tirs3 + vectorPlayers[4].tirs3f
	var tir1 = vectorPlayers[4].tirs1 + vectorPlayers[4].tirs1f
	
	$("#Tirs2i4").text( vectorPlayers[4].tirs2+ "/." + tir2 );
	$("#Tirs3i4").text( vectorPlayers[4].tirs3+ "/." + tir3 );
	$("#Tirs1i4").text( vectorPlayers[4].tirs1+ "/." + tir1 );
	$("#assis4").text( vectorPlayers[4].assistencia);
	if(vectorPlayers[4].faltas == 5 ){
		document.getElementById('Faltasi4').style.color ='red';
	}



}
function statsi5(){
	$("#MasMenos5").text(vectorPlayers[5].masmenos);
	$("#Rebotesdoi5").text(vectorPlayers[5].rebotsdef + "+" + vectorPlayers[5].rebotsoff);
	$("#Faltasi5").text(vectorPlayers[5].faltas);
	$("#Faltasri5").text(vectorPlayers[5].faltasr);
	$("#Taponesi5").text(vectorPlayers[5].tapones);
	$("#Taponesri5").text(vectorPlayers[5].taponesr);
	$("#dorsali5").text(vectorPlayers[5].num);
	$("#Puntsi5").text(vectorPlayers[5].punts);
	$("#Rebotesi5").text(vectorPlayers[5].rebots);
	$("#Robosi5").text(vectorPlayers[5].robos);
	$("#Perduesi5").text(vectorPlayers[5].perdues);
	var val = vectorPlayers[5].tapones+vectorPlayers[5].robos + vectorPlayers[5].punts + vectorPlayers[5].rebots+ vectorPlayers[5].assistencia+vectorPlayers[5].faltasr;
	var val2 = vectorPlayers[5].tirs2f+vectorPlayers[5].tirs3f +vectorPlayers[5].tirs1f + vectorPlayers[5].perdues+vectorPlayers[5].faltas+vectorPlayers[5].taponesr;
	vectorPlayers[5].valoracio=val-val2;
	$("#Valoracioi5").text(vectorPlayers[5].valoracio);
	var tir2 = vectorPlayers[5].tirs2 + vectorPlayers[5].tirs2f;
	var tir3 = vectorPlayers[5].tirs3 + vectorPlayers[5].tirs3f
	var tir1 = vectorPlayers[5].tirs1 + vectorPlayers[5].tirs1f
	
	$("#Tirs2i5").text( vectorPlayers[5].tirs2+ "/." + tir2 );
	$("#Tirs3i5").text( vectorPlayers[5].tirs3+ "/." + tir3 );
	$("#Tirs1i5").text( vectorPlayers[5].tirs1+ "/." + tir1 );
	$("#assis5").text( vectorPlayers[5].assistencia);


	if(vectorPlayers[5].faltas == 5 ){
		document.getElementById('Faltasi5').style.color ='red';
	}
}
function statsi6(){
	$("#MasMenos6").text(vectorPlayers[6].masmenos);
	$("#Rebotesdoi6").text(vectorPlayers[6].rebotsdef + "+" + vectorPlayers[6].rebotsoff);
	$("#Faltasi6").text(vectorPlayers[6].faltas);
	$("#Faltasri6").text(vectorPlayers[6].faltasr);
	$("#Taponesi6").text(vectorPlayers[6].tapones);
	$("#Taponesri6").text(vectorPlayers[6].taponesr);
	$("#dorsali6").text(vectorPlayers[6].num);
	$("#Puntsi6").text(vectorPlayers[6].punts);
	$("#Rebotesi6").text(vectorPlayers[6].rebots);
	$("#Robosi6").text(vectorPlayers[6].robos);
	$("#Perduesi6").text(vectorPlayers[6].perdues);
	var val = vectorPlayers[6].tapones+vectorPlayers[6].robos + vectorPlayers[6].punts + vectorPlayers[6].rebots+vectorPlayers[6].assistencia+vectorPlayers[6].faltasr;
	var val2 = vectorPlayers[6].tirs2f+vectorPlayers[6].tirs3f +vectorPlayers[6].tirs1f + vectorPlayers[6].perdues+vectorPlayers[6].faltas+vectorPlayers[6].taponesr;
	vectorPlayers[6].valoracio=val-val2;
	$("#Valoracioi6").text(vectorPlayers[6].valoracio);
	var tir2 = vectorPlayers[6].tirs2 + vectorPlayers[6].tirs2f;
	var tir3 = vectorPlayers[6].tirs3 + vectorPlayers[6].tirs3f
	var tir1 = vectorPlayers[6].tirs1 + vectorPlayers[6].tirs1f
	
	$("#Tirs2i6").text( vectorPlayers[6].tirs2+ "/." + tir2 );
	$("#Tirs3i6").text( vectorPlayers[6].tirs3+ "/." + tir3 );
	$("#Tirs1i6").text( vectorPlayers[6].tirs1+ "/." + tir1 );
	$("#assis6").text(vectorPlayers[6].assistencia);

	if(vectorPlayers[6].faltas == 5 ){
		document.getElementById('Faltasi6').style.color ='red';
	}

}
function statsi7(){
	$("#MasMenos7").text(vectorPlayers[7].masmenos);
	$("#Rebotesdoi7").text(vectorPlayers[7].rebotsdef + "+" + vectorPlayers[7].rebotsoff);
	$("#Faltasi7").text(vectorPlayers[7].faltas);
	$("#Taponesi7").text(vectorPlayers[7].tapones);
	$("#Faltasri7").text(vectorPlayers[7].faltasr);
	$("#Taponesri7").text(vectorPlayers[7].taponesr);
	$("#dorsali7").text(vectorPlayers[7].num);
	$("#Puntsi7").text(vectorPlayers[7].punts);
	$("#Rebotesi7").text(vectorPlayers[7].rebots);
	$("#Robosi7").text(vectorPlayers[7].robos);
	$("#Perduesi7").text(vectorPlayers[7].perdues);
	var val = vectorPlayers[7].tapones+vectorPlayers[7].robos + vectorPlayers[7].punts + vectorPlayers[7].rebots+ vectorPlayers[7].assistencia+vectorPlayers[7].faltasr;
	var val2 = vectorPlayers[7].tirs2f+vectorPlayers[7].tirs3f +vectorPlayers[7].tirs1f + vectorPlayers[7].perdues+vectorPlayers[7].faltas+vectorPlayers[7].taponesr;
	vectorPlayers[7].valoracio=val-val2;
	$("#Valoracioi7").text(vectorPlayers[7].valoracio);
	var tir2 = vectorPlayers[7].tirs2 + vectorPlayers[7].tirs2f;
	var tir3 = vectorPlayers[7].tirs3 + vectorPlayers[7].tirs3f
	var tir1 = vectorPlayers[7].tirs1 + vectorPlayers[7].tirs1f
	
	$("#Tirs2i7").text( vectorPlayers[7].tirs2+ "/." + tir2 );
	$("#Tirs3i7").text( vectorPlayers[7].tirs3+ "/." + tir3 );
	$("#Tirs1i7").text( vectorPlayers[7].tirs1+ "/." + tir1 );
	$("#assis7").text( vectorPlayers[7].assistencia);
	
	
	if(vectorPlayers[7].faltas == 5 ){
		document.getElementById('Faltasi7').style.color ='red';
	}


}
function statsi8(){
	$("#MasMenos8").text(vectorPlayers[8].masmenos);
	$("#Rebotesdoi8").text(vectorPlayers[8].rebotsdef + "+" + vectorPlayers[8].rebotsoff);
	$("#Faltasi8").text(vectorPlayers[8].faltas);
	$("#Taponesi8").text(vectorPlayers[8].tapones);
	$("#Faltasri8").text(vectorPlayers[8].faltasr);
	$("#Taponesri8").text(vectorPlayers[8].taponesr);
	$("#dorsali8").text(vectorPlayers[8].num);
	$("#Puntsi8").text(vectorPlayers[8].punts);
	$("#Rebotesi8").text(vectorPlayers[8].rebots);
	$("#Robosi8").text(vectorPlayers[8].robos);
	$("#Perduesi8").text(vectorPlayers[8].perdues);
	var val = vectorPlayers[8].tapones+vectorPlayers[8].robos + vectorPlayers[8].punts + vectorPlayers[8].rebots+vectorPlayers[8].assistencia+vectorPlayers[8].faltasr;
	var val2 = vectorPlayers[8].tirs2f+vectorPlayers[8].tirs3f +vectorPlayers[8].tirs1f + vectorPlayers[8].perdues+vectorPlayers[8].faltas+vectorPlayers[8].taponesr;
	vectorPlayers[8].valoracio=val-val2;
	$("#Valoracioi8").text(vectorPlayers[8].valoracio);
	var tir2 = vectorPlayers[8].tirs2 + vectorPlayers[8].tirs2f;
	var tir3 = vectorPlayers[8].tirs3 + vectorPlayers[8].tirs3f
	var tir1 = vectorPlayers[8].tirs1 + vectorPlayers[8].tirs1f
	
	$("#Tirs2i8").text( vectorPlayers[8].tirs2+ "/." + tir2 );
	$("#Tirs3i8").text( vectorPlayers[8].tirs3+ "/." + tir3 );
	$("#Tirs1i8").text( vectorPlayers[8].tirs1+ "/." + tir1 );
	$("#assis8").text( vectorPlayers[8].assistencia);

	if(vectorPlayers[8].faltas == 5 ){
		document.getElementById('Faltasi8').style.color ='red';
	}

}
function statsi9(){
	$("#MasMenos9").text(vectorPlayers[9].masmenos);
	$("#Rebotesdoi9").text(vectorPlayers[9].rebotsdef + "+" + vectorPlayers[9].rebotsoff);
	$("#Faltasi9").text(vectorPlayers[9].faltas);
	$("#Taponesi9").text(vectorPlayers[9].tapones);
	$("#Faltasri9").text(vectorPlayers[9].faltasr);
	$("#Taponesri9").text(vectorPlayers[9].taponesr);
	$("#dorsali9").text(vectorPlayers[9].num);
	$("#Puntsi9").text(vectorPlayers[9].punts);
	$("#Rebotesi9").text(vectorPlayers[9].rebots);
	$("#Robosi9").text(vectorPlayers[9].robos);
	$("#Perduesi9").text(vectorPlayers[9].perdues);
	var tir2 = vectorPlayers[9].tirs2 + vectorPlayers[9].tirs2f;
	var tir3 = vectorPlayers[9].tirs3 + vectorPlayers[9].tirs3f
	var tir1 = vectorPlayers[9].tirs1 + vectorPlayers[9].tirs1f
	$("#Tirs2i9").text( vectorPlayers[9].tirs2+ "/." + tir2 );
	$("#Tirs3i9").text( vectorPlayers[9].tirs3+ "/." + tir3 );
	$("#Tirs1i9").text( vectorPlayers[9].tirs1+ "/." + tir1 );
	$("#assis9").text( vectorPlayers[9].assistencia);
	var val = vectorPlayers[9].tapones+vectorPlayers[9].robos + vectorPlayers[9].punts + vectorPlayers[9].rebots+ vectorPlayers[9].assistencia+vectorPlayers[9].faltasr;
	var val2 = vectorPlayers[9].tirs2f+vectorPlayers[9].tirs3f +vectorPlayers[9].tirs1f + vectorPlayers[9].perdues+vectorPlayers[9].faltas+vectorPlayers[9].taponesr;
	vectorPlayers[9].valoracio=val-val2;
	$("#Valoracioi9").text(vectorPlayers[9].valoracio);
    if(vectorPlayers[9].faltas == 5 ){
		document.getElementById('Faltasi9').style.color ='red';
	}


}
function statsi10(){
	$("#MasMenos10").text(vectorPlayers[10].masmenos);
	$("#Rebotesdoi10").text(vectorPlayers[10].rebotsdef + "+" + vectorPlayers[10].rebotsoff);
	$("#Faltasi10").text(vectorPlayers[10].faltas);
	$("#Taponesi10").text(vectorPlayers[10].tapones);
	$("#Faltasri10").text(vectorPlayers[10].faltasr);
	$("#Taponesri10").text(vectorPlayers[10].taponesr);
	$("#dorsali10").text(vectorPlayers[10].num);
	$("#Puntsi10").text(vectorPlayers[10].punts);
	$("#Rebotesi10").text(vectorPlayers[10].rebots);
	$("#Robosi10").text(vectorPlayers[10].robos);
	$("#Perduesi10").text(vectorPlayers[10].perdues);
	var tir2 = vectorPlayers[10].tirs2 + vectorPlayers[10].tirs2f;
	var tir3 = vectorPlayers[10].tirs3 + vectorPlayers[10].tirs3f
	var tir1 = vectorPlayers[10].tirs1 + vectorPlayers[10].tirs1f
	$("#Tirs2i10").text( vectorPlayers[10].tirs2+ "/." + tir2 );
	$("#Tirs3i10").text( vectorPlayers[10].tirs3+ "/." + tir3 );
	$("#Tirs1i10").text( vectorPlayers[10].tirs1+ "/." + tir1 );
	$("#assis10").text( vectorPlayers[10].assistencia);
	var val = vectorPlayers[10].tapones+vectorPlayers[10].robos + vectorPlayers[10].punts + vectorPlayers[10].rebots+ vectorPlayers[10].assistencia+vectorPlayers[10].faltasr;
	var val2 = vectorPlayers[10].tirs2f+vectorPlayers[10].tirs3f +vectorPlayers[10].tirs1f + vectorPlayers[10].perdues+vectorPlayers[10].faltas+vectorPlayers[10].taponesr;
	vectorPlayers[10].valoracio=val-val2;
	$("#Valoracioi10").text(vectorPlayers[10].valoracio);
	if(vectorPlayers[10].faltas == 5 ){
		document.getElementById('Faltasi10').style.color ='red';
	}
}
function statsi11(){
	$("#MasMenos11").text(vectorPlayers[11].masmenos);
	$("#Rebotesdoi11").text(vectorPlayers[11].rebotsdef + "+" + vectorPlayers[11].rebotsoff);
	$("#Faltasi11").text(vectorPlayers[11].faltas);
	$("#Taponesi11").text(vectorPlayers[11].tapones);
	$("#Faltasri11").text(vectorPlayers[11].faltasr);
	$("#Taponesri11").text(vectorPlayers[11].taponesr);
	$("#dorsali11").text(vectorPlayers[11].num);
	$("#Puntsi11").text(vectorPlayers[11].punts);
	$("#Rebotesi11").text(vectorPlayers[11].rebots);
	$("#Robosi11").text(vectorPlayers[11].robos);
	$("#Perduesi11").text(vectorPlayers[11].perdues);
	var val = vectorPlayers[11].robos + vectorPlayers[11].punts + vectorPlayers[11].rebots+vectorPlayers[11].assistencia+vectorPlayers[11].tapones+vectorPlayers[11].faltasr;
	var val2 = vectorPlayers[11].tirs2f+vectorPlayers[11].tirs3f +vectorPlayers[11].tirs1f + vectorPlayers[11].perdues+vectorPlayers[11].faltas+vectorPlayers[11].taponesr;
	vectorPlayers[11].valoracio=val-val2;
	$("#Valoracioi11").text(vectorPlayers[11].valoracio);
	var tir2 = vectorPlayers[11].tirs2 + vectorPlayers[11].tirs2f;
	var tir3 = vectorPlayers[11].tirs3 + vectorPlayers[11].tirs3f
	var tir1 = vectorPlayers[11].tirs1 + vectorPlayers[11].tirs1f
	$("#Tirs2i11").text( vectorPlayers[11].tirs2+ "/." + tir2 );
	$("#Tirs3i11").text( vectorPlayers[11].tirs3+ "/." + tir3 );
	$("#Tirs1i11").text( vectorPlayers[11].tirs1+ "/." + tir1 );
	$("#assis11").text( vectorPlayers[11].assistencia);
	if(vectorPlayers[11].faltas == 5 ){
		document.getElementById('Faltasi11').style.color ='red';
	}


}
function masmenos(puntos){
	var size = vectorPlayers.length;
	   vectorPlayers.forEach(function (valor) {
		 if(valor.titular==true){
			 valor.masmenos+=puntos;
		 }
		});
}

function guarda() {

	toArray(document.getElementsByClassName("inputnumber")).forEach(function(el){
		var player = {};
		player.num = el.value;
		player.rebots = 0;
		player.punts=0; 
		player.tirs2 = 0 ; 
		player.tirs3= 0; 
		player.tirs1 = 0 ;
		player.tirs2f=0;
		player.tirs3f=0; 
		player.tirs1f=0; 
		player.faltas= 0 ;
		player.robos = 0 ;
		player.perdues= 0; 
		player.valoracio=0;   
		player.assistencia= 0;
		player.tapones=0;
		player.rebotsdef=0;
		player.rebotsoff=0;
		player.faltasr=0;
		player.taponesr=0;
		player.segons=0;
		player.minuts=0;
		player.titular=false;
		player.stop=true;
		player.masmenos=0;
		vectorPlayers[el.getAttribute("data-id")] = player;
		vectornumber[el.getAttribute("data-id")] = el.value;
	});
	 
	 console.log(vectornumber);
	 	 console.log(vectorPlayers);


	 document.getElementById("i0").innerHTML=vectornumber[0];
	 document.getElementById("i1").innerHTML=vectornumber[1];
	 document.getElementById("i2").innerHTML=vectornumber[2];
	 document.getElementById("i3").innerHTML=vectornumber[3];
	 document.getElementById("i4").innerHTML=vectornumber[4];
	 document.getElementById("i5").innerHTML=vectornumber[5];
	 document.getElementById("i6").innerHTML=vectornumber[6];
	 document.getElementById("i7").innerHTML=vectornumber[7];
	 document.getElementById("i8").innerHTML=vectornumber[8];
	 document.getElementById("i9").innerHTML=vectornumber[9];
	 document.getElementById("i10").innerHTML=vectornumber[10];
	 document.getElementById("i11").innerHTML=vectornumber[11];
	 
}
function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}

function toArray(obj) {
  var array = [];
  // iterate backwards ensuring that length is an UInt32
  for (var i = obj.length >>> 0; i--;) { 
    array[i] = obj[i];
  }
  return array;
}


