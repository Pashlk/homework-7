const evenOrOdd = (number) => {
    if (number % 2) {
        return (number + ' - нечетное число');
    } else {
        return (number + ' - четное число');
    }
};

const less1 = (num1, num2) => {
    let n;
    if (num1 => num2) {
        n = num2;
    } else if (num2 > num1) {
        n = num1;
    }
    let i = 2;
    while (i <= n) {
        console.log(i);
        i += 2;
    }
};

const less2 = (num1, num2) => {
    let n;
    if (num1 => num2) {
        n = num2;
    } else if (num2 > num1) {
        n = num1;
    }
    for ( let i = 2; i <= n; i += 2) {
        console.log(i);
    }
};

const less3 = (num1, num2) => {
    let n;
    if (num1 => num2) {
        n = num2;
    } else if (num2 > num1) {
        n = num1;
    }
    let i = 2;
    do {
        console.log(i);
        i += 2;
    } while (i <= n);
};

const larger1 = (num1, num2) => {
    let n;
    if (num1 => num2) {
        n = num1;
    } else if (num2 > num1) {
        n = num2;
    }
    let i = 2;
    while (i <= n) {
        console.log(i);
        i += 2;
    }
};

const larger2 = (num1, num2) => {
    let n;
    if (num1 => num2) {
        n = num1;
    } else if (num2 > num1) {
        n = num2;
    }
    for ( let i = 2; i <= n; i += 2) {
        console.log(i);
    }
};

const larger3 = (num1, num2) => {
    let n;
    if (num1 => num2) {
        n = num1;
    } else if (num2 > num1) {
        n = num2;
    }
    let i = 2;
    do {
        console.log(i);
        i += 2;
    } while (i <= n);
};

const insaneFunc1 = (N, M) => {
    let i = 1;
    while (i <= N) {
        let mul = i * M;
        if (mul % 2) {
            console.log(i, mul);
        } else {
            console.log(i);
        }
        i++;
    }
};

const insaneFunc2 = (N, M) => {
    let i = 1;
    do {
        let mul = i * M;
        if (mul % 2) {
            console.log(i, mul);
        } else {
            console.log(i);
        }
        i++;
    } while (i <= N);
};

const insaneFunc3 = (N, M) => {
    for (let i = 1; i <= N; i++) {
        let mul = i * M;
        if (mul % 2) {
            console.log(i, mul);
        } else {
            console.log(i);
        }
    }
};

console.log('Выбор меньшего числа и использование его в цикле. Вариант 1: ');
less1(10,5);

console.log('Выбор меньшего числа и использование его в цикле. Вариант 2: ');
less2(10,5);

console.log('Выбор меньшего числа и использование его в цикле. Вариант 3: ');
less3(10,5);

console.log('Выбор большего числа и использование его в цикле. Вариант 1: ');
larger1(10,5);

console.log('Выбор большего числа и использование его в цикле. Вариант 2: ');
larger2(10,5);

console.log('Выбор большего числа и использование его в цикле. Вариант 3: ');
larger3(10,5);

console.log('Запутанная функция. Вариант 1: ');
insaneFunc1(10,5);

console.log('Запутанная функция. Вариант 2: ');
insaneFunc2(10,5);

console.log('Запутанная функция. Вариант 3: ');
insaneFunc3(10,5);