declare module "next/dist/lib/metadata/types/metadata-interface.js" {
  export type ResolvingMetadata = unknown;
  export type ResolvingViewport = unknown;
}

declare module "next/types.js" {
  export type ResolvingMetadata = unknown;
  export type ResolvingViewport = unknown;
}

declare module "next" {
  export type Metadata = Record<string, unknown>;
  export type NextConfig = Record<string, unknown>;
}

declare module "next/image" {
  import type { ImgHTMLAttributes } from "react";

  export type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height"> & {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    sizes?: string;
    priority?: boolean;
  };

  export default function Image(props: ImageProps): JSX.Element;
}
