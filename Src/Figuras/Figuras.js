//Código del cuadrado
console.group("Cuadrado")

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm.`);

const perimetroCudrado = ladoCuadrado * 4;
console.log(`El perimetro  del cuadrado miden: ${perimetroCudrado}cm.`);

var areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área  del cuadrado miden: ${areaCuadrado}cm ^2.`);
console.groupEnd()

//  Código del triangulo 
console.group("Triangulo ")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`Los lados del triangulo son: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm.`)

const alturaTriangulo = 5.5;
console.log(`La altura del triangulo es de ${alturaTriangulo}`)

const perimetroTriangulo =ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triangulo es: ${perimetroTriangulo}cm, `)

const areaTriangulo =(baseTriangulo* alturaTriangulo) /2;
console.log(`El perimetro del triangulo es: ${areaTriangulo}cm  ^2, `)

console.groupEnd()

//  Código del circulo
console.group("Circulo")

// radio
const radioCirculo = 4;
console.log(`El rádio del circulo es: ${radioCirculo}cm`)
// diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del circulo es : ${diametroCirculo}cm`)
// PI 
const PI = Math.PI
console.log(`PI es igual a: ${PI}cm `)
// Circunferencia
const circunferenciaCirculo= diametroCirculo *  PI;
console.log(`La circunferencia del circulo es: ${circunferenciaCirculo}cm`)
// Area 
const areaCirculo= (radioCirculo * radioCirculo) *PI;
console.log(`El radio del circulo es: ${areaCirculo}cm ^2`)

console.groupEnd()


