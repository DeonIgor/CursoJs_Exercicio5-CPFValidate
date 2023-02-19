import generateDigit from './generateDigit.js';

export default () => {
    const formulario = document.querySelector('.formulario');
    const inputCPF = document.querySelector('.inputCPF');
    const response = document.querySelector('.response');

    formulario.addEventListener('submit', event => {
        event.preventDefault();

        if (validateCPF(inputCPF.value)) {
            response.innerHTML = "CPF válido";
            response.setAttribute('class', "response valid");
        }
        else {
            response.innerHTML = "CPF inválido";
            response.setAttribute('class', "response invalid");
        }
    });
};

function validateCPF(cpfString) {
    const cleanCPF = Array.from(cpfString.replace(/\D+/g, ''));
    const repeatedString = [...cleanCPF].fill(cleanCPF[0]).join('');

    if (cleanCPF.length != 11) return false;
    if (repeatedString == cleanCPF.join('')) return false;

    const secondInitialDigit = cleanCPF.pop();
    const firstInitialDigit = cleanCPF.pop();

    const firstDigit = generateDigit(cleanCPF);
    const secondDigit = generateDigit(cleanCPF.concat(firstDigit));

    return (firstInitialDigit == firstDigit && secondInitialDigit == secondDigit);
}
