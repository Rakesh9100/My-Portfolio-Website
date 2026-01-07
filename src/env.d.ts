/// <reference types="astro/client" />
/// <reference types="astro/env" />

// Astro assets module declaration
declare module 'astro:assets' {
    export interface ImageMetadata {
        src: string;
        width: number;
        height: number;
        format: string;
    }

    export const Image: any;
    export const Picture: any;
    export const getImage: any;
}

// Image file declarations
declare module '*.png' {
    const src: ImageMetadata;
    export default src;
}

declare module '*.jpg' {
    const src: ImageMetadata;
    export default src;
}

declare module '*.jpeg' {
    const src: ImageMetadata;
    export default src;
}

declare module '*.webp' {
    const src: ImageMetadata;
    export default src;
}

declare module '*.svg' {
    const src: ImageMetadata;
    export default src;
}