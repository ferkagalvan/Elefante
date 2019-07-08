
class Elefante{
	constructor( n,e, c, al, an, x, y){
		this.Nombre = n;
		this.Edad = e;
		this.Color = c;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
	}


	Dibujar(contextoDeDibujo){


		//Crear una pluma con el color
		contextoDeDibujo.strokeStyle = this.Color; // Stroke lines in blue
        
        
        

        //trompa

        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+this.Ancho-155,this.Y+this.Altura-60);
        contextoDeDibujo.lineTo(this.X+this.Ancho-110,this.Y+this.Altura-5);
        contextoDeDibujo.lineTo(this.X+this.Ancho-140,this.Y+this.Altura-5);

        //ojo
        contextoDeDibujo.moveTo(this.X+this.Ancho/6,this.Y+this.Altura-80);
        contextoDeDibujo.lineTo(this.X+this.Ancho/10,this.Y+this.Altura-90);
        contextoDeDibujo.lineTo(this.X+this.Ancho/6,this.Y+this.Altura-100);
        ///cara
        contextoDeDibujo.moveTo(this.X+this.Ancho-110,this.Y+this.Altura/2+20);
        contextoDeDibujo.lineTo(this.X+this.Ancho-60,this.Y+this.Altura/2-30);
        contextoDeDibujo.lineTo(this.X+this.Ancho/2,this.Y+this.Altura/2-105);
        contextoDeDibujo.lineTo(this.X+this.Ancho-115,this.Y+this.Altura/2-105);
        //oreja

        contextoDeDibujo.moveTo(this.X+this.Ancho/2,this.Y+this.Altura/2-50);
        contextoDeDibujo.lineTo(this.X+this.Ancho/2+20,this.Y+this.Altura/2-45);
        contextoDeDibujo.lineTo(this.X+this.Ancho/2+20,this.Y+this.Altura/2-190);
        contextoDeDibujo.lineTo(this.X+this.Ancho/2-60,this.Y+this.Altura/2-104);


        //cuerpo y pata trasera.
       contextoDeDibujo.moveTo(this.X+this.Ancho+125,this.Y+this.Altura-70);
        contextoDeDibujo.lineTo(this.X+this.Ancho+100,this.Y+this.Altura+50);
        contextoDeDibujo.lineTo(this.X+this.Ancho+30,this.Y+this.Altura+50);
        contextoDeDibujo.lineTo(this.X+this.Ancho/2+20,this.Y+this.Altura-130);

        //pata delantera

         contextoDeDibujo.moveTo(this.X+this.Ancho+30,this.Y+this.Altura-40);
         contextoDeDibujo.lineTo(this.X+this.Ancho+5,this.Y+this.Altura+50);
         contextoDeDibujo.lineTo(this.X+this.Ancho/2,this.Y+this.Altura+50);
         contextoDeDibujo.lineTo(this.X+this.Ancho/2+28,this.Y+this.Altura-115);

         //cola
       
        contextoDeDibujo.moveTo(this.X+this.Ancho+124,this.Y+this.Altura-60);
        contextoDeDibujo.lineTo(this.X+this.Ancho+130,this.Y+this.Altura-60);
        contextoDeDibujo.lineTo(this.X+this.Ancho+140,this.Y+this.Altura+20);



        contextoDeDibujo.closePath();
        contextoDeDibujo.fillStyle = "grey";
        contextoDeDibujo.fill();

        


         //edad de los elefantes
        contextoDeDibujo.fillStyle ='black'
        contextoDeDibujo.fillText(this.Edad,this.X+120,this.Y+180);
        contextoDeDibujo.font ='bold 15px sans';
        contextoDeDibujo.stroke();
        


         //nombre de los elefantes
        contextoDeDibujo.fillStyle ='black'
        contextoDeDibujo.fillText(this.Nombre,this.X+120,this.Y+210);
        contextoDeDibujo.font ='bold 15px sans';
        contextoDeDibujo.stroke();

        

       


	}




}