const soma = function (expression) {
    let result = 0;
    if (expression.includes('+')) {
        expression.split('+').forEach(element => {
            result += Number(element);
        });
    }
    return result;
};

const sub = function (expression) {
    let result = 0;
    if (expression.includes('-')) {
        expression.split('-').forEach((element, index) => {
            if (index == 0) {
                result = Number(element);
            } else {
                result -= Number(element);
            }

        });
    }

    return result;
};

const mult = function (expression) {
    let result = 0;
    if (expression.includes('*')) {
        expression.split('*').forEach((element, index) => {
            if (index == 0) {
                result = Number(element);
            } else {
                result *= Number(element);
            }

        });
    }

    return result;
}


const calculadora = function (expression) {
    let result = 0;
    let _expression = "";
    let calcula = false;
    let operacao = "";
    let resolved = false;
    let resto = ""
    let over = false;

    if (expression.includes("(")) {
        let ini = expression.indexOf("(");
        let fim = expression.indexOf(")");

        _expression = expression.substring(ini + 1, fim);
        let res = calculadora(_expression);
        expression = expression.replace(expression.substring(ini, fim + 1), res.toString());
    }

    if (expression.includes("*")) {
        expression.split('*').forEach((element, index) => {

            if (index == 0) {
                let n = ""

                for (let i = 0; i < element.split('').reverse().length; i++) {
                    const x = element.split('').reverse()[i];

                    if (x == Number(x) && over == false) {
                        n = `${x}${n}`;
                    } else {
                        over = true;
                        resto = `${x}${resto}`;
                    }
                }
                _expression = n;
            } else {

                _expression += `*${element}`;
                if (expression.split('*')[0] == Number(expression.split('*')[0])) {
                    resolved = true;
                } else {
                    expression = resto + mult(_expression).toString();
                }
            }

        });
        if (resolved) {
            return mult(_expression);
        } else {
            _expression = "";
        }
    }

    expression.split('').forEach((element, index) => {

        if (index == 0 && element == '-') {
            _expression = element;
        } else if (element == Number(element)) {
            _expression += element;
        } else if (calcula == false) {
            operacao = element;
            _expression += element;
            calcula = true;
        } else {
            switch (operacao) {
                case "+":
                    _expression = soma(_expression).toString() + element;
                    break;
                case "-":
                    _expression = sub(_expression).toString() + element;
                    break;
                case "*":
                    _expression = mult(_expression).toString() + element;
                    break;
                default:
                    break;
            }
            operacao = element;
        }
    });

    switch (operacao) {
        case "+":
            result = soma(_expression);
            break;
        case "-":
            result = sub(_expression);
            break;
        case "*":
            result = mult(_expression);
            break;
        default:
            break;
    }
    return result;
}

module.exports = calculadora;