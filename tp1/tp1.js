//https://youtu.be/A0ALkUiYHn4?si=UvW74ecT0_7reTDN

let popArt;
let cant = 3;
let tam;
let color1 = false;
let color2 = false;


function preload() {
  popArt = loadImage("assets/img/F_50.jpeg");
  
 }
 
function setup() {
 createCanvas(800, 400); 
 
}

function draw() {
  background(255);
  image(popArt, 0, 0, 400, 400);

  tam = 400 / cant;

  for (let i = 0; i < cant; i++) {
    for (let y = 0; y < cant; y++) {
      let estado = calcularEstado(i, y);

      if (color2) {
        if (estado === 0) {
          fill(0, 102, 102);
        } else {
          fill(128, 128, 128);
        }
      } else if (color1) {
        if (estado === 0) {
          fill(255, 204, 0);
        } else {
          fill(255, 0, 127);
        }
      } else {
        if (estado === 0) {
          fill(36, 41, 184);
        } else {
          fill(6, 13, 29);
        }
      }

      dibujarBloqueConCirculo(400 + i * tam, y * tam, tam, estado);
    }
  }
}

function keyPressed() {
if (key === 'c') {
 color1 = !color1;
 } else if (key === 'd') {
  color2 = !color2;
 } else if (key === 'r') {
  reiniciarTodo();
 }
}

function dibujarBloqueConCirculo(x, y, tam, estado) {
  rect(x, y, tam, tam);

  if (color2) {
    if (estado === 0) {
      fill(128, 128, 128);
    } else {
      fill(0, 102, 102);
    }
  } else if (color1) {
    if (estado === 0) {
      fill(255, 0, 127);
    } else {
      fill(255, 204, 0);
    }
  } else {
    if (estado === 0) {
      fill(6, 13, 29);
    } else {
      fill(36, 41, 184);
    }
  }

  if (dist(x + 67, y + tam / 2, mouseX, mouseY) < tam / 2) {
    fill(random(255), 0, 0, 100);
  }

  ellipse(x + 67, y + tam / 2, tam, tam);
}

function calcularEstado(i, j) {
  return (i + j) % 2;
}

function reiniciarTodo() {
  color1 = false;
  color2 = false;
}
