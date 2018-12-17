// for (let i = 100; i >= 0; i--) {
//     if ( i % 2 === 0) {
//         document.write(i + '<br>');
//     }
// }




// let someNum;
// do {
//   someNum = parseFloat(prompt('Please enter a number')); 
// } while (Number.isNaN(someNum))


// let someNum = NaN;
// while (Number.isNaN(someNum)) {
//     someNum = parseFloat(prompt('Please enter a number')); 
// }

let productNames = [];
productNames.push('Tesla Model X'); // 0
productNames.push('Mazda CX5'); // 1
productNames.push('Toyota Corolla'); // 2
productNames.push('Dodge RAM', 'Chevrolet Tahoe'); // 3, 4

// document.write(productNames + '<br>');

productNames[2] = 'Volkswagen Toareg';

productNames[10] = 'Audi Q8';

// for (let i = 0; i < productNames.length; i++) {
//     document.write(productNames[i] + '<br>');
// }

// productNames.forEach(printElement);

// function printElement(element) {
//     document.write(element + '<br>');
// }
 
// productNames.forEach( function(element) {
//         document.write(element + '<br>');
// } );

productNames.sort();

// productNames.forEach( el => document.write(el + '<br>') );

let productPrices = [100, 20, 10, 202, 101, 500, 5, 50, 30];
productPrices.sort( (a, b) => b - a );
document.write(productPrices + '<br>');

let doubledPrices = productPrices.map( el => el * 2);
document.write(doubledPrices  + '<br>');

let expensiveProducts = doubledPrices.filter( el => el > 100 );
document.write(expensiveProducts + '<br>');

let sum = expensiveProducts.reduce( (acc, el) => acc + el );
document.write(sum);





