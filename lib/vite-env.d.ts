/// <reference types="vite/client" />

// Custom type declarations for missing modules

declare module 'hast' {
    export interface Element {
        type: 'element';
        tagName: string;
        properties: Record<string, any>;
        children: ElementContent[];
    }

    export interface Root {
        type: 'root';
        children: RootContent[];
    }

    export type ElementContent = Element | Text | Comment;
    export type RootContent = Element | Text | Comment;

    export interface Text {
        type: 'text';
        value: string;
    }

    export interface Comment {
        type: 'comment';
        value: string;
    }

    export interface Nodes extends Root {}
}

declare module 'hastscript' {
    import { Element } from 'hast';

    export function h(tagName: string, properties?: any, children?: any): Element;
}

declare module 'hast-util-select' {
    import { Element, Root } from 'hast';

    export function select(selector: string, tree: Root | Element): Element | undefined;
    export function selectAll(selector: string, tree: Root | Element): Element[];
    export function matches(selector: string, element: Element): boolean;
}
