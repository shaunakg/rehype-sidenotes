import { Root } from 'hast';

/**
 * Transformer.
 *
 * Given a syntax tree, locate all the footnotes and move them into the body of the document as
 * sidenotes. Semantically, we represent a sidenote as an <aside> element with its content
 * wrapped with <small>. This means that should the HTML show up in something like an RSS reader
 * or [Readability](https://github.com/mozilla/readability), it will have a reasonable visual and
 * semantic treatment.
 *
 * @param tree The HAST syntax tree to transform.
 * @returns The mutated tree.
 */
declare function transformer(tree: Root): Root;
/**
 * Sidenotes.
 *
 * Locates footnotes and moves them into the main flow of the given document as sidenotes.
 *
 * @returns A transformer that converts footnotes to sidenotes.
 */
export default function sidenotes(): typeof transformer;
export {};
