//1 задание
alert(undefined ?? NaN ?? null ?? "" ?? " ") // NaN потому что первое определенное значение

//2 заданиче
let city = null;

city ??= "Берлин"; 
city ??= null; 
city ??= "Кёльн"; 
city ??= "Гамбург";

alert(city); // Берлин, потому что переменная не определенна, а в последующих вариантах он не присвоит потому что переменная определиться в первом варианте

//3 задание
let num1 = 10,
    num2 = 20,
    result;

if (result === null || result === undefined) {
  if (num1 !== null && num1 !== undefined) {
    result = num1;
  } else {
    result = num2;
  }
}

result = num1 ?? num2; //result ??= num1 ?? num2; разобрать почему так 


  