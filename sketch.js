
//Cria as Consts da Biblioteca do Matter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

//Cria as Variáveis dos Prumos
var bob1, bob2, bob3, bob4, bob5
//Cria a Variável do Pêndulo (Teto)
var roofObject;
//Cria as Variáveis das Cordas
var rope1,rope2,rope3, rope4,rope5;
//Cria a Variável do Mundo Menor
var world;


function setup() {
	//Cria e Define as Dimensões do Canvas
	createCanvas(800, 600);
	//Define o Rect Mode como Centro
	rectMode(CENTER);

	//Cria a Variável de Engine
	engine = Engine.create();
	//Adiciona a Variável de Engine ao Mundo
	world = engine.world;

	//Cria a Variável do Teto e Define seus Parâmetros
	roofObject = new roof(400,250,230,20);

	//Cria as Variáveis dos Prumos e Define seus Parâmetros
	bob1 = new bob(320,575,40);
	bob2 = new bob(360,575,40);
	bob3 = new bob(400,575,40);
	bob4 = new bob(440,575,40);
	bob5 = new bob(480,575,40);
	
	//Cria as Variáveis das Cordas e Define seus Parâmetros
	rope1 = new rope (bob1.body,roofObject.body,-80, 0)
	rope2 = new rope (bob2.body,roofObject.body,-40, 0)
	rope3 = new rope (bob3.body,roofObject.body,0,0);
	rope4 = new rope (bob4.body,roofObject.body,40,0);
	rope5 = new rope (bob5.body,roofObject.body,80,0);

	//Faz a Engine Rodar
	Engine.run(engine);
}


function draw() {

  //Define o Rect Mode como Centro
  rectMode(CENTER);
  //Define a Cor do BackGround
  background(230);
  
  //Faz o Pêndulo (Teto) Aparecer na Tela
  roofObject.display();

  //Faz as Cordas Aparecerem na Tela
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //Faz os Prumos Aparecerem na Tela
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display(); 
}

function keyPressed() {

	//Diz que SE Apertarmos Seta Para Cima, O 1º Prumo Se Movimentará Para a Esquerda
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50, y:-45});
	}

	//Diz que SE Apertarmos Seta Para Baixo, O 5º Prumo Se Movimentará Para a Direita
	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50, y:45})
	}
}