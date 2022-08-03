let num;
do {
    num = Number(prompt("Enter a positive integer"));
    if(num > 1 && Number.isInteger(num)){
        showPrimes(num);
        break;
    }
} while (num < 1 || isNaN(num) || !Number.isInteger(num));

function showPrimes(n) {
    let primes = [];
    for(let i = 2; i <= n; i++){
       if(!isPrime(i)) continue;
           
        primes.push(i);      
    }
    alert('For n = ' + num + ' prime numbers are ' + primes.join(','));
}

function isPrime(n) {
    for(let i = 2; i < n; i++){
        if(n % i === 0) return false;
    }
    return true;
}