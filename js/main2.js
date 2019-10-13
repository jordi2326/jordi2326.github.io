
var vectornumber = [,,,,,,,,,,,,];
var vectorPlayers = [,,,,,,,,,,,,];
var cont = 0 ;
var jugador = -1;
window.onload= function(){
jugador = -1;

 $("#i0").click(function(){
 	    jugador = 0;


	});
  $("#i1").click(function(){
  	 
 		jugador=1;


	});
   $("#i2").click(function(){
 		  	jugador=2;
 		  			
 		  		


	});
    $("#i3").click(function(){
 		 		jugador=3;
 		 			
 		 		

	});
	 $("#i4").click(function(){
 		  		 jugador=4;
 		  

	});
	  $("#i5").click(function(){
 		 		 jugador=5; 		
 		 	


	});
	   $("#i6").click(function(){
 		 		jugador=6;
 		 			
 		 

	});
	   $("#i7").click(function(){
 		 	 jugador=7;
 		 
 	

	});
	   $("#i8").click(function(){
 		  jugador=8;
 		  	

	});
	   $("#i9").click(function(){
 		  jugador= 9;

	});
	   $("#i10").click(function(){
	   	jugador=10;

	});
	   $("#i11").click(function(){
	   	 jugador=11;
 		 		
 		 	

	});
	  
       
         
$("#falt").click(function(){
		  vectorPlayers[jugador].faltas=vectorPlayers[jugador].faltas+1;
		  imprimir();
		 
	});
		$("#2p").click(function(){
		  vectorPlayers[jugador].tirs2+=1;
		  vectorPlayers[jugador].punts+=2;
		  imprimir();

		  
	});
		$("#3p").click(function(){
		    vectorPlayers[jugador].tirs3+=1;
		  vectorPlayers[jugador].punts+=3;
		  
		  imprimir();
		  
	});
		$("#1p").click(function(){
		    vectorPlayers[jugador].tirs1+=1;
		  vectorPlayers[jugador].punts+=1;
		  		

		  imprimir();
		  
	});
		$("#rob").click(function(){
		  vectorPlayers[jugador].robos+=1;
		  		 

		  imprimir();
		  
	});
		$("#perd").click(function(){
		  vectorPlayers[jugador].perdues+=1;
		  		  

		  imprimir();
		  
	});
		$("#reb").click(function(){
		  vectorPlayers[jugador].rebots+=1;		  
		

		  imprimir();
		 
	});
		$("#2pf").click(function(){
		  vectorPlayers[jugador].tirs2f+=1;
		  	

		  imprimir();

	});
		$("#3pf").click(function(){
		  vectorPlayers[jugador].tirs3f+=1;
		  		

		  imprimir();
		
	});
		$("#1pf").click(function(){
		  vectorPlayers[jugador].tirs1f+=1;
		  		 

		  imprimir();

	});
		$("#ass").click(function(){
		  vectorPlayers[jugador].assistencia+=1;


		  imprimir();

	});
         





	$('#exampleModalCenter').modal({});

	$("#submitnumber").click(function(){
		guarda();
		imprimir();
	});
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
		$("#dorsal").text(vectorPlayers[0].num);
		$("#Punts").text(vectorPlayers[0].punts);
		$("#Rebotes").text(vectorPlayers[0].rebots);
		$("#Robos").text(vectorPlayers[0].robos);
		$("#Perdues").text(vectorPlayers[0].perdues);
		var val = vectorPlayers[0].robos + vectorPlayers[0].punts + vectorPlayers[0].rebots+ vectorPlayers[0].tirs3+vectorPlayers[0].tirs2+vectorPlayers[0].tirs1+vectorPlayers[0].assistencia;
		var val2 = vectorPlayers[0].tirs2f+vectorPlayers[0].tirs3f +vectorPlayers[0].tirs1f + vectorPlayers[0].perdues+vectorPlayers[0].faltas;
		vectorPlayers[0].valoracio=val-val2;
		$("#Valoracio").text(vectorPlayers[0].valoracio);
		var tir2 = vectorPlayers[0].tirs2 + vectorPlayers[0].tirs2f;
		var tir3 = vectorPlayers[0].tirs3 + vectorPlayers[0].tirs3f
		var tir1 = vectorPlayers[0].tirs1 + vectorPlayers[0].tirs1f
		
		$("#Tirs2").text( vectorPlayers[0].tirs2+ "/" + tir2 );
		$("#Tirs3").text( vectorPlayers[0].tirs3+ "/" + tir3 );
		$("#Tirs1").text( vectorPlayers[0].tirs1+ "/" + tir1 );
		   		$("#assis").text( vectorPlayers[0].assistencia);



}
function statsi1(){
	$("#Faltasi1").text(vectorPlayers[1].faltas);
		$("#dorsali1").text(vectorPlayers[1].num);
		$("#Puntsi1").text(vectorPlayers[1].punts);
		$("#Rebotesi1").text(vectorPlayers[1].rebots);
		$("#Robosi1").text(vectorPlayers[1].robos);
		$("#Perduesi1").text(vectorPlayers[1].perdues);
		var val = vectorPlayers[1].robos + vectorPlayers[1].punts + vectorPlayers[1].rebots+ vectorPlayers[1].tirs3+vectorPlayers[1].tirs2+vectorPlayers[1].tirs1+vectorPlayers[1].assistencia;
		var val2 = vectorPlayers[1].tirs2f+vectorPlayers[1].tirs3f +vectorPlayers[1].tirs1f + vectorPlayers[1].perdues+vectorPlayers[1].faltas;
		vectorPlayers[1].valoracio=val-val2;
		$("#Valoracioi1").text(vectorPlayers[1].valoracio);
		var tir2 = vectorPlayers[1].tirs2 + vectorPlayers[1].tirs2f;
		var tir3 = vectorPlayers[1].tirs3 + vectorPlayers[1].tirs3f
		var tir1 = vectorPlayers[1].tirs1 + vectorPlayers[1].tirs1f
		
		$("#Tirs2i1").text( vectorPlayers[1].tirs2+ "/" + tir2 );
		$("#Tirs3i1").text( vectorPlayers[1].tirs3+ "/" + tir3 );
		$("#Tirs1i1").text( vectorPlayers[1].tirs1+ "/" + tir1 );
		   		$("#assis1").text( vectorPlayers[1].assistencia);



}

function statsi2(){
	$("#Faltasi2").text(vectorPlayers[2].faltas);
		$("#dorsali2").text(vectorPlayers[2].num);
		$("#Puntsi2").text(vectorPlayers[2].punts);
		$("#Rebotesi2").text(vectorPlayers[2].rebots);
		$("#Robosi2").text(vectorPlayers[2].robos);
		$("#Perduesi2").text(vectorPlayers[2].perdues);
				var val = vectorPlayers[2].robos + vectorPlayers[2].punts + vectorPlayers[2].rebots+ vectorPlayers[2].tirs3+vectorPlayers[2].tirs2+vectorPlayers[2].tirs1+vectorPlayers[2].assistencia;
		var val2 = vectorPlayers[2].tirs2f+vectorPlayers[2].tirs3f +vectorPlayers[2].tirs1f + vectorPlayers[2].perdues+vectorPlayers[2].faltas;
		vectorPlayers[2].valoracio=val-val2;
		$("#Valoracioi2").text(vectorPlayers[2].valoracio);
		var tir2 = vectorPlayers[2].tirs2 + vectorPlayers[2].tirs2f;
		var tir3 = vectorPlayers[2].tirs3 + vectorPlayers[2].tirs3f
		var tir1 = vectorPlayers[2].tirs1 + vectorPlayers[2].tirs1f
		
		$("#Tirs2i2").text( vectorPlayers[2].tirs2+ "/" + tir2 );
		$("#Tirs3i2").text( vectorPlayers[2].tirs3+ "/" + tir3 );
		$("#Tirs1i2").text( vectorPlayers[2].tirs1+ "/" + tir1 );
		   		$("#assis2").text( vectorPlayers[2].assistencia);



}
function statsi3(){
	$("#Faltasi3").text(vectorPlayers[3].faltas);
		$("#dorsali3").text(vectorPlayers[3].num);
		$("#Puntsi3").text(vectorPlayers[3].punts);
		$("#Rebotesi3").text(vectorPlayers[3].rebots);
		$("#Robosi3").text(vectorPlayers[3].robos);
		$("#Perduesi3").text(vectorPlayers[3].perdues);
		var val = vectorPlayers[3].robos + vectorPlayers[3].punts + vectorPlayers[3].rebots+ vectorPlayers[3].tirs3+vectorPlayers[3].tirs2+vectorPlayers[3].tirs1+vectorPlayers[3].assistencia;
		var val2 = vectorPlayers[3].tirs2f+vectorPlayers[3].tirs3f +vectorPlayers[3].tirs1f + vectorPlayers[3].perdues+vectorPlayers[3].faltas;
		vectorPlayers[3].valoracio=val-val2;
		$("#Valoracioi3").text(vectorPlayers[3].valoracio);
		var tir2 = vectorPlayers[3].tirs2 + vectorPlayers[3].tirs2f;
		var tir3 = vectorPlayers[3].tirs3 + vectorPlayers[3].tirs3f
		var tir1 = vectorPlayers[3].tirs1 + vectorPlayers[3].tirs1f
		
		$("#Tirs2i3").text( vectorPlayers[3].tirs2+ "/" + tir2 );
		$("#Tirs3i3").text( vectorPlayers[3].tirs3+ "/" + tir3 );
		$("#Tirs1i3").text( vectorPlayers[3].tirs1+ "/" + tir1 );
		   		$("#assis3").text( vectorPlayers[3].assistencia);



}
function statsi4(){
	$("#Faltasi4").text(vectorPlayers[4].faltas);
		$("#dorsali4").text(vectorPlayers[4].num);
		$("#Puntsi4").text(vectorPlayers[4].punts);
		$("#Rebotesi4").text(vectorPlayers[4].rebots);
		$("#Robosi4").text(vectorPlayers[4].robos);
		$("#Perduesi4").text(vectorPlayers[4].perdues);
		var val = vectorPlayers[4].robos + vectorPlayers[4].punts + vectorPlayers[4].rebots+ vectorPlayers[4].tirs3+vectorPlayers[4].tirs2+vectorPlayers[4].tirs1+vectorPlayers[4].assistencia;
		var val2 = vectorPlayers[4].tirs2f+vectorPlayers[4].tirs3f +vectorPlayers[4].tirs1f + vectorPlayers[4].perdues+vectorPlayers[4].faltas;
		vectorPlayers[4].valoracio=val-val2;
		$("#Valoracioi4").text(vectorPlayers[4].valoracio);
		var tir2 = vectorPlayers[4].tirs2 + vectorPlayers[4].tirs2f;
		var tir3 = vectorPlayers[4].tirs3 + vectorPlayers[4].tirs3f
		var tir1 = vectorPlayers[4].tirs1 + vectorPlayers[4].tirs1f
		
		$("#Tirs2i4").text( vectorPlayers[4].tirs2+ "/" + tir2 );
		$("#Tirs3i4").text( vectorPlayers[4].tirs3+ "/" + tir3 );
		$("#Tirs1i4").text( vectorPlayers[4].tirs1+ "/" + tir1 );
		   		$("#assis4").text( vectorPlayers[4].assistencia);



}
function statsi5(){
	$("#Faltasi5").text(vectorPlayers[5].faltas);
		$("#dorsali5").text(vectorPlayers[5].num);
		$("#Puntsi5").text(vectorPlayers[5].punts);
		$("#Rebotesi5").text(vectorPlayers[5].rebots);
		$("#Robosi5").text(vectorPlayers[5].robos);
		$("#Perduesi5").text(vectorPlayers[5].perdues);
			var val = vectorPlayers[5].robos + vectorPlayers[5].punts + vectorPlayers[5].rebots+ vectorPlayers[5].tirs3+vectorPlayers[5].tirs2+vectorPlayers[5].tirs1+vectorPlayers[5].assistencia;
		var val2 = vectorPlayers[5].tirs2f+vectorPlayers[5].tirs3f +vectorPlayers[5].tirs1f + vectorPlayers[5].perdues+vectorPlayers[5].faltas;
		vectorPlayers[5].valoracio=val-val2;
		$("#Valoracioi5").text(vectorPlayers[5].valoracio);
		var tir2 = vectorPlayers[5].tirs2 + vectorPlayers[5].tirs2f;
		var tir3 = vectorPlayers[5].tirs3 + vectorPlayers[5].tirs3f
		var tir1 = vectorPlayers[5].tirs1 + vectorPlayers[5].tirs1f
		
		$("#Tirs2i5").text( vectorPlayers[5].tirs2+ "/" + tir2 );
		$("#Tirs3i5").text( vectorPlayers[5].tirs3+ "/" + tir3 );
		$("#Tirs1i5").text( vectorPlayers[5].tirs1+ "/" + tir1 );
		   		$("#assis5").text( vectorPlayers[5].assistencia);



}
function statsi6(){
	$("#Faltasi6").text(vectorPlayers[6].faltas);
		$("#dorsali6").text(vectorPlayers[6].num);
		$("#Puntsi6").text(vectorPlayers[6].punts);
		$("#Rebotesi6").text(vectorPlayers[6].rebots);
		$("#Robosi6").text(vectorPlayers[6].robos);
		$("#Perduesi6").text(vectorPlayers[6].perdues);
			var val = vectorPlayers[6].robos + vectorPlayers[6].punts + vectorPlayers[6].rebots+ vectorPlayers[6].tirs3+vectorPlayers[6].tirs2+vectorPlayers[6].tirs1+vectorPlayers[6].assistencia;
		var val2 = vectorPlayers[6].tirs2f+vectorPlayers[6].tirs3f +vectorPlayers[6].tirs1f + vectorPlayers[6].perdues+vectorPlayers[6].faltas;
		vectorPlayers[6].valoracio=val-val2;
		$("#Valoracioi6").text(vectorPlayers[6].valoracio);
		var tir2 = vectorPlayers[6].tirs2 + vectorPlayers[6].tirs2f;
		var tir3 = vectorPlayers[6].tirs3 + vectorPlayers[6].tirs3f
		var tir1 = vectorPlayers[6].tirs1 + vectorPlayers[6].tirs1f
		
		$("#Tirs2i6").text( vectorPlayers[6].tirs2+ "/" + tir2 );
		$("#Tirs3i6").text( vectorPlayers[6].tirs3+ "/" + tir3 );
		$("#Tirs1i6").text( vectorPlayers[6].tirs1+ "/" + tir1 );
		$("#assi6").text(vectorPlayers[6].assistencia);



}
function statsi7(){
	$("#Faltasi7").text(vectorPlayers[7].faltas);
		$("#dorsali7").text(vectorPlayers[7].num);
		$("#Puntsi7").text(vectorPlayers[7].punts);
		$("#Rebotesi7").text(vectorPlayers[7].rebots);
		$("#Robosi7").text(vectorPlayers[7].robos);
		$("#Perduesi7").text(vectorPlayers[7].perdues);
		var val = vectorPlayers[7].robos + vectorPlayers[7].punts + vectorPlayers[7].rebots+ vectorPlayers[7].tirs3+vectorPlayers[7].tirs2+vectorPlayers[7].tirs1+vectorPlayers[7].assistencia;
		var val2 = vectorPlayers[7].tirs2f+vectorPlayers[7].tirs3f +vectorPlayers[7].tirs1f + vectorPlayers[7].perdues+vectorPlayers[7].faltas;
		vectorPlayers[7].valoracio=val-val2;
		$("#Valoracioi7").text(vectorPlayers[7].valoracio);
		var tir2 = vectorPlayers[7].tirs2 + vectorPlayers[7].tirs2f;
		var tir3 = vectorPlayers[7].tirs3 + vectorPlayers[7].tirs3f
		var tir1 = vectorPlayers[7].tirs1 + vectorPlayers[7].tirs1f
		
		$("#Tirs2i7").text( vectorPlayers[7].tirs2+ "/" + tir2 );
		$("#Tirs3i7").text( vectorPlayers[7].tirs3+ "/" + tir3 );
		$("#Tirs1i7").text( vectorPlayers[7].tirs1+ "/" + tir1 );
		   		$("#assis7").text( vectorPlayers[7].assistencia);



}
function statsi8(){
	$("#Faltasi8").text(vectorPlayers[8].faltas);
		$("#dorsali8").text(vectorPlayers[8].num);
		$("#Puntsi8").text(vectorPlayers[8].punts);
		$("#Rebotesi8").text(vectorPlayers[8].rebots);
		$("#Robosi8").text(vectorPlayers[8].robos);
		$("#Perduesi8").text(vectorPlayers[8].perdues);
		var val = vectorPlayers[8].robos + vectorPlayers[8].punts + vectorPlayers[8].rebots+ vectorPlayers[8].tirs3+vectorPlayers[8].tirs2+vectorPlayers[8].tirs1+vectorPlayers[8].assistencia;
		var val2 = vectorPlayers[8].tirs2f+vectorPlayers[8].tirs3f +vectorPlayers[8].tirs1f + vectorPlayers[8].perdues+vectorPlayers[8].faltas;
		vectorPlayers[8].valoracio=val-val2;
		$("#Valoracioi8").text(vectorPlayers[8].valoracio);
		var tir2 = vectorPlayers[8].tirs2 + vectorPlayers[8].tirs2f;
		var tir3 = vectorPlayers[8].tirs3 + vectorPlayers[8].tirs3f
		var tir1 = vectorPlayers[8].tirs1 + vectorPlayers[8].tirs1f
		
		$("#Tirs2i8").text( vectorPlayers[8].tirs2+ "/" + tir2 );
		$("#Tirs3i8").text( vectorPlayers[8].tirs3+ "/" + tir3 );
		$("#Tirs1i8").text( vectorPlayers[8].tirs1+ "/" + tir1 );
		   		$("#assis8").text( vectorPlayers[8].assistencia);



}
function statsi9(){
	$("#Faltasi9").text(vectorPlayers[9].faltas);
		$("#dorsali9").text(vectorPlayers[9].num);
		$("#Puntsi9").text(vectorPlayers[9].punts);
		$("#Rebotesi9").text(vectorPlayers[9].rebots);
		$("#Robosi9").text(vectorPlayers[9].robos);
		$("#Perduesi9").text(vectorPlayers[9].perdues);

		var tir2 = vectorPlayers[9].tirs2 + vectorPlayers[9].tirs2f;
		var tir3 = vectorPlayers[9].tirs3 + vectorPlayers[9].tirs3f
		var tir1 = vectorPlayers[9].tirs1 + vectorPlayers[9].tirs1f
		
		$("#Tirs2i9").text( vectorPlayers[9].tirs2+ "/" + tir2 );
		$("#Tirs3i9").text( vectorPlayers[9].tirs3+ "/" + tir3 );
		$("#Tirs1i9").text( vectorPlayers[9].tirs1+ "/" + tir1 );
		   		$("#assis9").text( vectorPlayers[9].assistencia);
		   		var val = vectorPlayers[9].robos + vectorPlayers[9].punts + vectorPlayers[9].rebots+ vectorPlayers[9].tirs3+vectorPlayers[9].tirs2+vectorPlayers[9].tirs1+vectorPlayers[10].assistencia;
		var val2 = vectorPlayers[9].tirs2f+vectorPlayers[9].tirs3f +vectorPlayers[9].tirs1f + vectorPlayers[9].perdues+vectorPlayers[9].faltas;
		vectorPlayers[9].valoracio=val-val2;
		$("#Valoracioi9").text(vectorPlayers[9].valoracio);



}
function statsi10(){
	$("#Faltasi10").text(vectorPlayers[10].faltas);
		$("#dorsali10").text(vectorPlayers[10].num);
		$("#Puntsi10").text(vectorPlayers[10].punts);
		$("#Rebotesi10").text(vectorPlayers[10].rebots);
		$("#Robosi10").text(vectorPlayers[10].robos);
		$("#Perduesi10").text(vectorPlayers[10].perdues);
		
		var tir2 = vectorPlayers[10].tirs2 + vectorPlayers[10].tirs2f;
		var tir3 = vectorPlayers[10].tirs3 + vectorPlayers[10].tirs3f
		var tir1 = vectorPlayers[10].tirs1 + vectorPlayers[10].tirs1f
		
		$("#Tirs2i10").text( vectorPlayers[10].tirs2+ "/" + tir2 );
		$("#Tirs3i10").text( vectorPlayers[10].tirs3+ "/" + tir3 );
		$("#Tirs1i10").text( vectorPlayers[10].tirs1+ "/" + tir1 );
   		$("#assis10").text( vectorPlayers[10].assistencia);
   		var val = vectorPlayers[10].robos + vectorPlayers[10].punts + vectorPlayers[10].rebots+ vectorPlayers[10].tirs3+vectorPlayers[10].tirs2+vectorPlayers[10].tirs1+vectorPlayers[10].assistencia;
		var val2 = vectorPlayers[10].tirs2f+vectorPlayers[10].tirs3f +vectorPlayers[10].tirs1f + vectorPlayers[10].perdues+vectorPlayers[10].faltas;
		vectorPlayers[10].valoracio=val-val2;
		$("#Valoracioi10").text(vectorPlayers[10].valoracio);
}
function statsi11(){
	$("#Faltasi11").text(vectorPlayers[11].faltas);
		$("#dorsali11").text(vectorPlayers[11].num);
		$("#Puntsi11").text(vectorPlayers[11].punts);
		$("#Rebotesi11").text(vectorPlayers[11].rebots);
		$("#Robosi11").text(vectorPlayers[11].robos);
		$("#Perduesi11").text(vectorPlayers[11].perdues);
		var val = vectorPlayers[11].robos + vectorPlayers[11].punts + vectorPlayers[11].rebots+ vectorPlayers[11].tirs3+vectorPlayers[11].tirs2+vectorPlayers[11].tirs1+vectorPlayers[11].assistencia;
		var val2 = vectorPlayers[11].tirs2f+vectorPlayers[11].tirs3f +vectorPlayers[11].tirs1f + vectorPlayers[11].perdues+vectorPlayers[11].faltas;
		vectorPlayers[11].valoracio=val-val2;
		$("#Valoracioi11").text(vectorPlayers[11].valoracio);
		var tir2 = vectorPlayers[11].tirs2 + vectorPlayers[11].tirs2f;
		var tir3 = vectorPlayers[11].tirs3 + vectorPlayers[11].tirs3f
		var tir1 = vectorPlayers[11].tirs1 + vectorPlayers[11].tirs1f
		
		$("#Tirs2i11").text( vectorPlayers[11].tirs2+ "/" + tir2 );
		$("#Tirs3i11").text( vectorPlayers[11].tirs3+ "/" + tir3 );
		$("#Tirs1i11").text( vectorPlayers[11].tirs1+ "/" + tir1 );
   		$("#assis11").text( vectorPlayers[11].assistencia);


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

function toArray(obj) {
  var array = [];
  // iterate backwards ensuring that length is an UInt32
  for (var i = obj.length >>> 0; i--;) { 
    array[i] = obj[i];
  }
  return array;
}


