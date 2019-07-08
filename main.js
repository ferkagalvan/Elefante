
var arregloElefante;
function crearElefante(){

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle="white";
	context.fillRect(0,0,1500,1500);


		arregloElefante = new Array(
			new Elefante("Faty",7,'black', 50, 107, 80, 300),
			new Elefante("Gala",5,'black', 50, 105, 550, 300),
			new Elefante("Rugo",10,'black', 50, 110, 950, 300)
			
		);
	for (var i = arregloElefante.length - 1; i >= 0; i--) {
		arregloElefante[i].Dibujar(context);


	}

}

function OrdenarElefanteTamañoMayor(){


	var n = arregloElefante.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloElefante[j].Ancho < arregloElefante[j+1].Ancho){
				//Intercambio
				aux = arregloElefante[j+1];
				aux_x_j = arregloElefante[j+1].X;
				aux_y_j = arregloElefante[j+1].Y;
				aux_x_j_1 = arregloElefante[j].X;
				aux_y_j_1 = arregloElefante[j].Y;
				
				arregloElefante[j+1] = arregloElefante[j];
				arregloElefante[j] = aux;

				arregloElefante[j+1].X = aux_x_j;
				arregloElefante[j+1].Y = aux_y_j;

				arregloElefante[j].X = aux_x_j_1;
				arregloElefante[j].Y = aux_y_j_1;
			}
		}
	}

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "white";
	context.fillRect(0,0,1200,700);

	for (var i = arregloElefante.length - 1; i >= 0; i--) {
		arregloElefante[i].Dibujar(context);
	}
}

var arregloElefante;


function OrdenarElefantePorNombre(){
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle="white";
	context.fillRect(0,0,1200,700);
	var n = arregloElefante.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloElefante[j].Nombre > arregloElefante[j+1].Nombre){
				//Intercambio
				aux = arregloElefante[j+1];
				aux_x_j = arregloElefante[j+1].X;
				aux_y_j = arregloElefante[j+1].Y;
				aux_x_j_1 = arregloElefante[j].X;
				aux_y_j_1 = arregloElefante[j].Y;
				
				arregloElefante[j+1] = arregloElefante[j];
				arregloElefante[j] = aux;

				arregloElefante[j+1].X = aux_x_j;
				arregloElefante[j+1].Y = aux_y_j;

				arregloElefante[j].X = aux_x_j_1;
				arregloElefante[j].Y = aux_y_j_1;
			}
		}
	}

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "white";
	context.fillRect(0,0,1200,700);

	for (var i = arregloElefante.length - 1; i >= 0; i--) {
		arregloElefante[i].Dibujar(context);
	}
}



function OrdenarElefanteEdad(){


	var n = arregloElefante.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloElefante[j].Edad > arregloElefante[j+1].Edad){
				//Intercambio
				aux = arregloElefante[j+1];
				aux_x_j = arregloElefante[j+1].X;
				aux_y_j = arregloElefante[j+1].Y;
				aux_x_j_1 = arregloElefante[j].X;
				aux_y_j_1 = arregloElefante[j].Y;
				
				arregloElefante[j+1] = arregloElefante[j];
				arregloElefante[j] = aux;

				arregloElefante[j+1].X = aux_x_j;
				arregloElefante[j+1].Y = aux_y_j;

				arregloElefante[j].X = aux_x_j_1;
				arregloElefante[j].Y = aux_y_j_1;
			}
		}
	}

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "white";
	context.fillRect(0,0,1200,700);

	for (var i = arregloElefante.length - 1; i >= 0; i--) {
		arregloElefante[i].Dibujar(context);
	}
}







	
