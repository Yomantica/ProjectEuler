export function run(): number {
    let sum = 0;
    let sq_sum = 0;
    for (let i = 1; i < 101; i++) {
        sum += i;
        sq_sum += i * i;
    }
    return sum * sum - sq_sum;
}