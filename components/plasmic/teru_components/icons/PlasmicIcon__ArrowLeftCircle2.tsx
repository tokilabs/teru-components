// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowLeftCircle2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowLeftCircle2Icon(props: ArrowLeftCircle2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 43"}
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
        d={
          "M2 21.27c0 14.453 4.819 19.272 19.27 19.272 14.453 0 19.272-4.82 19.272-19.271C40.542 6.819 35.722 2 21.27 2 6.819 2 2 6.819 2 21.27z"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M14.038 18.267s4.983 7.262 7.233 7.262 7.23-7.262 7.23-7.262"}
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowLeftCircle2Icon;
/* prettier-ignore-end */
