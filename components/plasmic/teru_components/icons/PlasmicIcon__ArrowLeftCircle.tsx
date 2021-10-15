// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowLeftCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowLeftCircleIcon(props: ArrowLeftCircleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 41"}
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
          "M1 20.27c0 14.453 4.819 19.272 19.27 19.272 14.453 0 19.272-4.82 19.272-19.271C39.542 5.819 34.722 1 20.27 1 5.819 1 1 5.819 1 20.27z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M13.038 17.267s4.983 7.262 7.233 7.262 7.23-7.262 7.23-7.262"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowLeftCircleIcon;
/* prettier-ignore-end */
