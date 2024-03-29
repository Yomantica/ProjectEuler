import assert from "node:assert";
import {properDivisors} from "./primes";
import {filterUnique, sumWithCondition} from "./sequences";

/**
 * Calculates LCM of a list of arguments
 */
export function lcm(...args: number[]): number {
    assert(args.length > 1, 'lcm');
    let a: number = args[0];
    for (let i = 1; i < args.length; i++) {
        let a_r: number = a;
        let b_r: number = args[i];
        while (a_r != b_r) {
            if (a_r < b_r) {
                a_r += a;
            } else {
                b_r += args[i];
            }
        }
        a = a_r;
    }
    return a;
}

/**
 * Returns the GCD of a list of arguments, based on the GCD formula
 */
export function gcd(...args: number[]): number {
    assert(args.length > 1, 'gcd');
    return args.reduce((c: number, n: number) => c * n, 1) / lcm(...args);
}

/**
 * Calculates the factorial of a number
 */
export function factorial(n: number): bigint {
    let res: bigint = 1n;
    for (let i: number = 1; i <= n; i++) {
        res *= BigInt(i);
    }
    return res;
}

/**
 * Calculates the binomial coefficient of 2 numbers
 */
export function binomialCoefficient(above: number, below: number): bigint {
    assert(above > below, 'binomialCoefficient');
    return factorial(above) / (factorial(below) * factorial(above - below));
}

/**
 * Collatz sequence formula
 */
export function collatz(n: number): number {
    if (n % 2 == 0) {
        return n / 2;
    }
    return 3 * n + 1;
}

/**
 * Given a number n this function checks if the number is amicable, and if so returns its mate
 * If not it returns -1
 */
export function amicableMate(n: number): number {
    assert(n > 1, 'amicableMate');
    const d: number = sumWithCondition(properDivisors(n));
    if (d > 1) {
        const dp: number = sumWithCondition(properDivisors(d));
        if (dp == n) {
            return d;
        }
    }
    return -1;
}

/**
 * Checks if a given number (or string rep of a number) is 1-9 pandigital
 */
export function isOneNinePandigital(n: number | string): boolean {
    const digits = String(n).split("");
    const uniqueDigits: string[] = filterUnique(digits); // many short filters is better using arrays then sets
    return !digits.includes("0") && digits.length == 9 && uniqueDigits.length == 9;
}