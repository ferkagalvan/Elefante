
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
        contextoDeDibujo.moveTo(this.X-20,this.Y+45);
        contextoDeDibujo.lineTo(this.X+10,this.Y+45);
        contextoDeDibujo.lineTo(this.X-30,this.Y-10);

        //ojo
        contextoDeDibujo.moveTo(this.X+20,this.Y-25);
        contextoDeDibujo.lineTo(this.X+10,this.Y-45);
        contextoDeDibujo.lineTo(this.X+20,this.Y-55);
        ///cara
        contextoDeDibujo.moveTo(this.X+10,this.Y+45);
        contextoDeDibujo.lineTo(this.X+60,this.Y-10);
        contextoDeDibujo.lineTo(this.X+60,this.Y-80);
        contextoDeDibujo.lineTo(this.X,this.Y-80);
        //oreja

        contextoDeDibujo.moveTo(this.X+60,this.Y-30);
        contextoDeDibujo.lineTo(this.X+80,this.Y-20);
        contextoDeDibujo.lineTo(this.X+80,this.Y-160);
        contextoDeDibujo.lineTo(this.X,this.Y-80);


        //cuerpo y pata trasera.
       contextoDeDibujo.moveTo(this.X+250,this.Y-30);
        contextoDeDibujo.lineTo(this.X+220,this.Y+100);
        contextoDeDibujo.lineTo(this.X+150,this.Y+100);
        contextoDeDibujo.lineTo(this.X+78.6,this.Y-80);

        //pata delantera

         contextoDeDibujo.moveTo(this.X+150,this.Y+20);
         contextoDeDibujo.lineTo(this.X+120,this.Y+100);
         contextoDeDibujo.lineTo(this.X+55,this.Y+100);
         contextoDeDibujo.lineTo(this.X+91,this.Y-75);

         //cola
       
        contextoDeDibujo.moveTo(this.X+245,this.Y-10);
        contextoDeDibujo.lineTo(this.X+255,this.Y-10);
        contextoDeDibujo.lineTo(this.X+270,this.Y+70);



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