//Código del cuadrado
console.group("Cuadrado")
// Arrow function para calcular el perimetro y el area del cuadrado y eliminamos el console.log de los lados 

perimetroCuadrado = (lado) => lado * 4
perimetroCuadrado()

areaCuadrado = (ladoCuadrado) => ladoCuadrado *  ladoCuadrado;
areaCuadrado()
console.groupEnd()

//Código del triangulo 
 console.group("Triangulo ")
 
alturaTriangulo = (altura) => altura= altura
 alturaTriangulo()

perimetroTriangulo = (lado1,lado2,base) => lado1 +lado2+base;
perimetroTriangulo()

areaTriangulo = (base,altura) => (base* altura) /2
areaTriangulo()

console.groupEnd()

 //  Código del circulo
 console.group("Circulo")
 //diametro
 diametroCirculo=(radio) => radio *2
 diametroCirculo()
 // PI
 const PI = Math.PI;
 // perimetro
 perimetroCiurculo=(radio) =>{
     // hacemos llamado a la otra arrow Function
   let diametro= diametroCirculo(radio)
   // retornamos el valor 
    return diametro * PI
 }
 perimetroCiurculo()
 // area
 areaCirculo = (radio) => (radio*radio) * PI;
 areaCirculo()

 console.groupEnd()


