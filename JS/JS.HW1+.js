// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61



let age_1 = 18
let age_2 = 60

 function checkAge(age) {
 if (age < age_1) {
   console.log ("You don’t have access, cause your age is " + age + ". " + "It's less then 18");     
 } else if (age >= age_1 && age < age_2) {
   console.log("Welcome!");
 } else if (age > age_2) {
   console.log("Keep calm and look Culture channel");
 } else {
   console.log("Technical work");
 }
}

checkAge(17)
checkAge(18)
checkAge(61)


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.



let age_1 = 18
let age_2 = 60

function checkAge(age) {
  age = Number(age)
  if (age) {
  
   
     
    if (age < age_1) 
      {console.log ("You don’t have access, cause your age is " + age + ". " + "It's less then 18")}
  
    else if (age >= age_1 && age < age_2) 
      {console.log("Welcome!")}
 
    else if (age > age_2) 
      {console.log("Keep calm and look Culture channel")} 

    else  
      {console.log("Technical work")} }
     
  else
   {console.log ("Error")}

}
checkAge(17)
checkAge(18)
checkAge("61")
checkAge("asa")

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number



let age_1 = 18
let age_2 = 60

function checkAge(age) {
  age = Number(age)
  if (age && !isNaN(age)){
   
     
    if (age < age_1) 
      {console.log ("You don’t have access, cause your age is " + age + ". " + "It's less then 18")}
  
    else if (age >= age_1 && age < age_2) 
      {console.log("Welcome!")}
 
    else if (age > age_2) 
      {console.log("Keep calm and look Culture channel")} 

    else  
      {console.log("Technical work")} }
     
  else
   {console.log ("Error")}
  }

checkAge(17)
checkAge(18)
checkAge(60)
checkAge(61)
checkAge("20")
checkAge("Колбаса")
checkAge(0)
checkAge("0")
checkAge("")


// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

let age_1 = 18
let age_2 = 60

function checkAge(age) {
  
  if (age && !isNaN(age)){
   
     
    if (age < age_1) 
      {alert ("You don’t have access, cause your age is " + age + ". " + "It's less then 18")}
  
    else if (age >= age_1 && age < age_2) 
      {alert("Welcome!")}
 
    else if (age > age_2) 
      {alert("Keep calm and look Culture channel")} 

    else  
      {alert("Technical work")} }
     
  else
   {alert ("Error")}}

 
 let userAge = prompt("Enter your age")
 checkAge(userAge)

