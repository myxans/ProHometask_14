//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr = [8, 1, 3, 5, 'sadf', 'sdfa', 2, 'sasa'];

function averageСost(arr) {
    let total = 0;
    let arrTwo = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            arrTwo.push(arr[i]);
        }
    }

    arrTwo.forEach(element => {
        total += element 
    });

   return total / arrTwo.length;
}

console.log(averageСost(arr))

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
    x = +prompt("Введите первое число");
    y = +prompt("Введите второе число");
    znak = prompt("Введите операцию +, -, *, /, %, ^ ");
    let result;

    switch (znak) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;  
        case "%":
            result = x % y;
            break;
        case "^":
            result = x ** y;
            break;    
    }

    return result;
}

let functionResult = doMath();
console.log(functionResult);

//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function arrAdd() {
    let arr = [];
    let num = +prompt('Введите количество массивов в основном массиве');

    for(let i = 0; i < num; i++) {
        arr.push([]);

        let numTwo = prompt("Введите количество элементов во внутреннем массиве № " + (i + 1));

        for(let j = 0; j < numTwo; j++) {
            let numThree = prompt("Введите элемент массива № " + (j + 1));
            arr[i].push([numThree]);
        }
    }
    return arr
}
console.log(arrAdd())

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let text = prompt('Введіть речення');
let item = prompt('Введіть літери на видалення');

function removeElement(text, item) {
    const removeText = new RegExp(item.toString().split(",").join(""), "g");
    let newText = text.replaceAll(removeText, "");
    return newText;
}

console.log(removeElement(text, item));