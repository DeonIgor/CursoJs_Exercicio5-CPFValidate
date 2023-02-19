
export default function generateDigit(cpf) {

    let factor = cpf.length + 1;

    const sum = cpf.map(digit => {
        return digit * factor--;
    })
        .reduce((ac, value) => {
            return ac + Number(value);
        }, 0);

    return (11 - (sum % 11) > 9) ? 0 : 11 - (sum % 11);
}