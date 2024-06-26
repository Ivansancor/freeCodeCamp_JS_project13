const numberInput = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output")

const clearInput = () => {
    numberInput.value = "";
}

const validateInput = input => {
    const convertedInput = Math.floor(parseInt(input));
    if (convertedInput < 1) {
        alert("Please enter a number greater than or equal to 1");
        clearInput();
        return null;
    } else if (convertedInput > 3999) {
        alert("Please enter a number less than or equal to 3999");
        clearInput();
        return null;
    } else if (input === "") {
        alert("Please enter a number");
        clearInput();
        return null;
    } else if (input.match(/\D/gi)) {
        alert("Please enter a valid number");
        clearInput();
        return null;
    } else {
        clearInput();
        return convertedInput;
    }
}

const computeInput = input => {
    const refTable = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ]
    
    let result = "";

    refTable.forEach ( numberPair => {        
        if (input >= numberPair[1]) {
            result += numberPair[0].repeat(input/numberPair[1]);
            input = input % numberPair[1];
        }
    });

    return result;
}

const displayInput = input => {
    output.textContent = input;
    output.classList.remove("hidden");
}

const convertNumber = input => {
    const validatedInput = validateInput(input);
    if (validatedInput) {
        const computedInput = computeInput(validatedInput);
        displayInput(computedInput);
    }
}

convertBtn.addEventListener("click", () => {
    convertNumber(numberInput.value);
})

numberInput.addEventListener("keyup", e => {
    if (e.key === "Enter") {
        convertNumber(numberInput.value);
        return;
    }
})