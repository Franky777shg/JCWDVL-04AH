let isPrime = (n) => {
  // 4
  let factor = []; // [1, 2, 4]

  for (let i = 1; i <= n; i++) {
    // = 5
    if (n % i === 0) {
      factor.push(i);
    }
  }

  console.log(factor);

  if (factor.length < 3) {
    return true;
  } else {
    return false;
  }
};

console.log(isPrime(4));
