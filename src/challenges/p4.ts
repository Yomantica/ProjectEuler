import {checkPalindrome} from "../utilities/strings";

export function run(): number {
    // Not the best way to do this but on this scale it's fine
    let res: number = 0;
    for (let i: number = 100; i < 1000; i++) {
        for (let j: number = 100; j < 1000; j++) {
            if (checkPalindrome(i * j) && i * j > res) {
                res = i * j;
            }
        }
    }
    return res;
}