import { Element, Root, ElementContent } from 'hast';

/**
 * Find footnote reference.
 *
 * Locates the first link element in the tree that points to the given footnote.
 *
 * @param fn Footnote element to find the reference for.
 * @param tree A HAST tree to search in.
 * @returns The first footnote reference pointing to the given footnote.
 */
export declare const findRef: (fn: Element, tree: Root | Element) => Element | undefined;
/**
 * Is this a valid footnote element?
 *
 * @param el The HAST element to test
 * @param tree The HAST tree we're currently manipulating.
 * @returns True if this is a footnote with a valid ID, and a reference pointing to it, and is
 *          located in the footnotes section.
 */
export declare function isValidFootnote(el: Element, tree: Root | Element): boolean;
/**
 * Convert Footnote to Sidenote.
 *
 * Given a footnote element, create a new sidenote element.
 *
 * @param footnoteEl The footnote element to convert to a sidenote.
 * @param fnNum The number of the footnote.
 * @returns A new HAST element.
 */
export declare function convertFootnoteToSidenote(footnoteEl: Element, fnNum: number | string): Element;
/**
 * Find logical section parent.
 *
 * Given the ID of an element, find the closest ancestor element that is a logical section. Here,
 * by 'logical section', we mean a div, section, article or main element. If we can't find one of
 * those, we will return the root of the tree.
 *
 * We use this to determine where to insert a footnote in the flow of an article or page.
 *
 * @param idOfEl The ID of the element to locate the logical section parent for.
 * @param tree The tree to search for the parent in.
 * @returns The closest anscestor div, section, article, or main element for the element with the
 *          given ID.
 */
export declare function findLogicalSectionParent(idOfEl: string, tree: Root | Element): Element | Root | undefined;
/**
 * Find flow parent.
 *
 * Given the ID of an element, find an element immediately below `section` that contains the
 * given ID element.
 *
 * We use this to determine where to insert a footnote in the flow of an article or page.
 *
 * @param idOfEl ID of the element to find an ancestor for within the section.
 * @param section The section to search.
 * @returns The element directly below `section` that contains the element with ID `idOfEl`.
 */
export declare function findFlowParent(idOfEl: string, section: Root | Element): Element | undefined;
/**
 * Get Text.
 *
 * Extracts all the text nodes below the given element and concatenates them.
 *
 * @param el The element to extract text from.
 * @returns The concatenation of all the text nodes below the current element.
 */
export declare const getText: (el: ElementContent) => string;
/**
 * Remove Element.
 *
 * Removes an element from the tree.
 *
 * @param el An element to remove from the tree.
 * @param tree The tree to remove an element from.
 * @returns The removed element or undefined.
 */
export declare function removeEl(el: Element, tree: Root): Element | undefined;
