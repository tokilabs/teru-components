// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SettingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SettingIcon(props: SettingIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 44"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        clipRule={"evenodd"}
        d={"M19.708 16.583A5.208 5.208 0 1119.71 27a5.208 5.208 0 010-10.416z"}
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        clipRule={"evenodd"}
        d={
          "M36.725 11.896v0a5.133 5.133 0 00-7.04-1.9c-2.144 1.246-4.822-.312-4.822-2.804 0-2.867-2.31-5.192-5.155-5.192v0c-2.846 0-5.155 2.325-5.155 5.192 0 2.492-2.679 4.05-4.82 2.805a5.135 5.135 0 00-7.042 1.9c-1.422 2.483-.579 5.658 1.888 7.09 2.14 1.248 2.14 4.362 0 5.609-2.467 1.434-3.31 4.61-1.888 7.091a5.135 5.135 0 007.04 1.902h.002c2.141-1.248 4.82.31 4.82 2.802v0c0 2.867 2.309 5.192 5.155 5.192v0c2.846 0 5.155-2.325 5.155-5.192v0c0-2.492 2.678-4.05 4.821-2.802a5.135 5.135 0 007.041-1.902c1.424-2.482.578-5.657-1.886-7.091h-.002c-2.141-1.247-2.141-4.361.002-5.608 2.464-1.433 3.31-4.608 1.886-7.092z"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SettingIcon;
/* prettier-ignore-end */
