import {binomialCoefficient} from "../utilities/numbers";

export function run(): bigint {
    // This is just the binomial coefficient ((2 * 20) 20)
    return binomialCoefficient(40, 20);
}