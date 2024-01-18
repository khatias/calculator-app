const firstThemeBtn = document.querySelector('#first');
const secondThemeBtn = document.querySelector('#second');
const thirdThemeBtn = document.querySelector('#third');
const ballBtn = document.querySelector('.ball');
const elements = document.getElementsByClassName("theme-text-color");
const sumContainer = document.querySelector(".sum-container");
const switcher = document.querySelector(".switch")
const keys =document.getElementsByClassName("keys")
const deleteValue =document.querySelector('.delete')
const reset =document.querySelector('.reset')
const equal =document.querySelector('.equal')

firstThemeBtn.addEventListener('change', () => {
    ballBtn.style.left = '5px';
    document.querySelector('body').style.backgroundColor = "#3A4663";
    Array.from(elements).forEach(element => {
        element.classList.remove("gray", "violet");
    });
    switcher.style.backgroundColor = "#242D44";
    ballBtn.style.background = "#D03F2F";
    sumContainer.style.backgroundColor = "#181F33";
    document.querySelector('main').style.backgroundColor = "#242D44";
    Array.from(keys).forEach(key => {
        key.classList.remove("gray-keys", "violet-keys");
    });
    equal.classList.remove("equal-gray", "equal-violet")
    deleteValue.classList.remove("delete-and-reset-gray", "delete-and-reset-violet")
    reset.classList.remove("delete-and-reset-gray", "delete-and-reset-violet")
});

secondThemeBtn.addEventListener('change', () => {
    ballBtn.style.left = '31px';
    document.querySelector('body').style.backgroundColor = '#E6E6E6';
    Array.from(elements).forEach(element => {
        element.classList.remove("blue", "violet");
        element.classList.add("gray");
    });
    switcher.style.backgroundColor = "#D2CDCD";
    ballBtn.style.background = "#C85402";
    sumContainer.style.backgroundColor = "#EEEEEE";
    document.querySelector('main').style.backgroundColor = "#D2CDCD";
    Array.from(keys).forEach(key => {
        key.classList.remove("blue-keys", "violet-keys");
        key.classList.add("gray-keys");
    });

    equal.classList.remove("equal-blue", "equal-violet")
    equal.classList.add("equal-gray")

    deleteValue.classList.remove("delete-and-reset-blue", "delete-and-reset-violet")
    reset.classList.remove("delete-and-reset-blue", "delete-and-reset-violet")

    deleteValue.classList.add("delete-and-reset-gray")
    reset.classList.add("delete-and-reset-gray")
});

thirdThemeBtn.addEventListener('change', () => {
    ballBtn.style.left = '50px';
    document.querySelector('body').style.backgroundColor = '#17062A';
    Array.from(elements).forEach(element => {
        element.classList.remove("blue", "gray");
        element.classList.add("violet");
    });
    switcher.style.backgroundColor = "#1E0936";
    ballBtn.style.background = "#00DED0";
    sumContainer.style.backgroundColor = "#1E0936";
    document.querySelector('main').style.backgroundColor = "#1E0936";
    Array.from(keys).forEach(key => {
        key.classList.remove("blue-keys", "gray-keys");
        key.classList.add("violet-keys");
    });

    equal.classList.remove("equal-blue", "equal-gray")
    equal.classList.add("equal-violet")

    deleteValue.classList.remove("delete-and-reset-blue", "delete-and-reset-gray")
    reset.classList.remove("delete-and-reset-blue", "delete-and-reset-gray")

    deleteValue.classList.add("delete-and-reset-violet")
    reset.classList.add("delete-and-reset-violet")
    
});

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Solve(val) {
    var resultInput = document.getElementById('result');
    if (!shouldPreventAddition(val)) {
        resultInput.value += val;
    }
    
}

 function shouldPreventAddition(value) {
    var currentInput = document.getElementById('result').value;    

    return ((value === '+' || value === '-' || value === '*' || value === '/') && 
            (currentInput.endsWith('+') || currentInput.endsWith('-') || 
             currentInput.endsWith('*') || currentInput.endsWith('/'))) ||
           (value === '.' && currentInput.includes('.'));
}


function Result() {
    var expression = document.getElementById('result').value;
    var result = eval(expression);
    var formattedResult = formatNumberWithCommas(result);
    document.getElementById('result').value = formattedResult;
}


 function Reset(){
    document.getElementById('result').value = ''
 }
 function Delete() {
    var resultInput = document.getElementById('result');
    resultInput.value = resultInput.value.slice(0, -1);
    console.log(resultInput.value);
}

