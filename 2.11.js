1.
alert( null || 2 || undefined ); // 2

2.
alert( alert(1) || 2 || alert(3) ); // 2 
//если посомтреть ответит то там будет сказано, что первый ответ будет 1, почему? если он undefined. поечему не 0 или NaN?

3.
alert( 1 && null && 2 ); //null

4.
alert( alert(1) && alert(2) ); //undefined

5.
alert( null || 2 && 3 || 4 ); //3 

6.
// рахобраться в &&= и||=
let value = NaN;

value &&= 10; // Nan
value ||= 20; //Nan
value &&= 30; // не поняла почему в этом варианте value=20
value ||= 40; // 

alert(value);

7.
if (age >= 14 && age <= 90)

8.
if (!age >= 14 && !age <= 90) //почему в ответе оператор ! ставится перед скобками и единожды?
if (age < 14 || age > 90)

9.
if (-1 || 0) alert( 'first' );  // выполнится -1
if (-1 && 0) alert( 'second' );  // я так понимаю не выполнится потому что числа с минусом не могут приставиваться или потому что присваивание с 0 это false?
if (null || -1 && 1) alert( 'third' ); // выполнится 1
10.

let login = prompt ('Кто ты?' , '' );

let message = (login == null) ? 'Отменено';
let message = (login == '') ? 'Я вас не знаю';

if (login == 'Админ') 
{
    alert password = prompt ('Пароль?'  , '' ) ;
}
if (password == 'Я главный')
{
    alert (Здравствуйте!) ;
}
let message = (password == null) ? 'Отменено';
let message = (password == '') ? 'Неверный пароль';


