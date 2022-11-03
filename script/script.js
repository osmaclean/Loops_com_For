// Primeira Tarefa - Jeito curto

function renderUpToHundred() {
    let contagem = [];
    for (let i = 0; i <= 100; i++) {
        contagem.push(i);
    }
    return contagem;
}
console.log(renderUpToHundred());

// Primeira Tarefa - Jeito longo

function renderUpToHundred1() {
    let contagem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
    for (let i = 0; i < contagem.length; i++) {
        console.log(contagem[i]);
    }
    return contagem;
}
renderUpToHundred1();

// Segunda Tarefa 

function tenInTenToAHundred() {
    let numeros = [];
    for (let i = 0; i <= 100; i += 10) {
        numeros.push(i);
    }
    return numeros;
}
console.log(tenInTenToAHundred());

// Terceira Tarefa

function oddUpToAHundred() {
    let numbers = [];
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 1) {
            numbers.push(i);
        }
    }
    return numbers;
}
console.log(oddUpToAHundred());

// Quarta Tarefa

function evenUpToAHundred() {
    let nu = [];
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            nu.push(i);
        }
    }
    return nu;
}
console.log(evenUpToAHundred());

// Quinta Tarefa

function fromNegativeToPositive() {
    let negativos = [];
    for (let i = 10; i >= -10; i--) {
        negativos.push(i);

    }
    return negativos;
}
console.log(fromNegativeToPositive());

// Sexta Tarefa

function inDescendingDirection() {
    let positivo = [];
    for (let i = 10; i >= 0; i--) {
        positivo.push(i);

    }
    return positivo;
}
console.log(inDescendingDirection());

// Sétima Tarefa

function inDescendingDirectionTenOutOfTen() {
    let cemAZero = [];
    for (let i = 100; i >= 0; i -= 10) {
        cemAZero.push(i);
    }
    return cemAZero;
}
console.log(inDescendingDirectionTenOutOfTen());


// Oitava Tarefa

function divisibleByTwoUpToTen() {
    let divididos = [];
    for (let i = 10; i >= 0; i--) {
        if (i % 2 === 0) {
            divididos.push(i);
        }
    }
    return divididos;
    }
console.log(divisibleByTwoUpToTen());



































































































