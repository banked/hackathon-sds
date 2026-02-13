import clsx from "clsx";
import { ComponentPropsWithoutRef, useState } from "react";
import "./image.css";

export type ImageProps = Omit<ComponentPropsWithoutRef<"img">, "alt"> & {
  alt: string;
  aspectRatio?: "1-1" | "16-9" | "4-3" | "fill" | "natural";
  size?: "small" | "medium" | "large" | "fill" | "natural";
  variant?: "default" | "rounded";
};
export function Image({
  aspectRatio = "natural",
  className,
  size = "natural",
  variant = "rounded",
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const classNames = clsx(
    className,
    "image",
    `image-aspect-ratio-${aspectRatio}`,
    `image-size-${size}`,
    `image-variant-${variant}`,
    !loaded && `image-loading`,
  );
  return (
    <>
      {!loaded && <span className={clsx("image-placeholder", classNames)} />}
      {props.src && (
        <img className={classNames} {...props} onLoad={() => setLoaded(true)} />
      )}
    </>
  );
}
