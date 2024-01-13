export {};

function sumOfFactors(n: number): number {
    // A bit simple, but at this scale it works fine
    let res: number = 0;
    for (let i: number = 1; i < n; i++) {
        if (n % i == 0) {
            res += i;
        }
    }
    return res;
}

function run(): void {
    const dMap: Map<number, number> = new Map<number, number>();
    const amics: number[] = [];
    for (let i = 2; i < 10000; i++) {
        if (!dMap.has(i)) {
            dMap.set(i, sumOfFactors(i));
        }
        if (!dMap.has(dMap.get(i))) {
            dMap.set(dMap.get(i), sumOfFactors(dMap.get(i)));
        }
        if (dMap.get(dMap.get(i)) == i && dMap.get(i) != i) {
            amics.push(i, dMap.get(i));
        }
    }
    console.log(amics.filter((v, i, a) => a.indexOf(v) === i).reduce((c, n) => c + n, 0));
}