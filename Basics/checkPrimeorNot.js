function primeNumber(n) {
    let f=0;
    for(let i = 1; i <= n; i++) {
        if(n%i == 0) {
            f++;
        }
    }
    if(f == 2) return true;
    return false;
}
let ans = primeNumber(4);
console.log(ans);