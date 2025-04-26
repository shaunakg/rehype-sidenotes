type Args<A, B, C, D, E, F, G, H, I, J> = [] | [A] | [A, B] | [A, B, C] | [A, B, C, D] | [A, B, C, D, E] | [A, B, C, D, E, F] | [A, B, C, D, E, F, G] | [A, B, C, D, E, F, G, H] | [A, B, C, D, E, F, G, H, I] | [A, B, C, D, E, F, G, H, I, J];
/**
 * Maybe Do.
 *
 * Checks each yielded value to see if it is null or undefined. If we encounter a nullish value,
 * we stop processing and return undefined.
 *
 * @param genFn A generator function.
 * @returns The last yielded value or undefined.
 */
export declare const maybeDo: <A, B, C, D, E, F, G, H, I, J, RVal, T, Params extends Args<A, B, C, D, E, F, G, H, I, J>>(genFn: (...args: Params) => Generator<T, RVal>) => (...args: Params) => RVal | undefined;
export {};
