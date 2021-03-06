// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9Ez6vNhJFQ69LZL2fp9zzt
// Component: NBlm1ynek6
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_teru_components.module.css"; // plasmic-import: 9Ez6vNhJFQ69LZL2fp9zzt/projectcss
import * as sty from "./PlasmicTextButton.module.css"; // plasmic-import: NBlm1ynek6/css

export type PlasmicTextButton__VariantMembers = {
  lightTextButton: "unnamedVariant";
};

export type PlasmicTextButton__VariantsArgs = {
  lightTextButton?: SingleChoiceArg<"unnamedVariant">;
};

type VariantPropType = keyof PlasmicTextButton__VariantsArgs;
export const PlasmicTextButton__VariantProps = new Array<VariantPropType>(
  "lightTextButton"
);

export type PlasmicTextButton__ArgsType = {};
type ArgPropType = keyof PlasmicTextButton__ArgsType;
export const PlasmicTextButton__ArgProps = new Array<ArgPropType>();

export type PlasmicTextButton__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultTextButtonProps {
  lightTextButton?: SingleChoiceArg<"unnamedVariant">;
  className?: string;
}

function PlasmicTextButton__RenderFunc(props: {
  variants: PlasmicTextButton__VariantsArgs;
  args: PlasmicTextButton__ArgsType;
  overrides: PlasmicTextButton__OverridesType;
  dataFetches?: PlasmicTextButton__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        hasGap={true}
        className={classNames(defaultcss.all, sty.button, {
          [sty.button__lightTextButton_unnamedVariant]: hasVariant(
            variants,
            "lightTextButton",
            "unnamedVariant"
          )
        })}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text,
            {
              [sty.text__lightTextButton_unnamedVariant]: hasVariant(
                variants,
                "lightTextButton",
                "unnamedVariant"
              )
            }
          )}
        >
          {"text-button"}
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button", "text"],
  button: ["button", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTextButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTextButton__VariantsArgs;
    args?: PlasmicTextButton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTextButton__Fetches;
  } & Omit<PlasmicTextButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTextButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTextButton__ArgProps,
      internalVariantPropNames: PlasmicTextButton__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTextButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextButton";
  } else {
    func.displayName = `PlasmicTextButton.${nodeName}`;
  }
  return func;
}

export const PlasmicTextButton = Object.assign(
  // Top-level PlasmicTextButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicTextButton
    internalVariantProps: PlasmicTextButton__VariantProps,
    internalArgProps: PlasmicTextButton__ArgProps
  }
);

export default PlasmicTextButton;
/* prettier-ignore-end */
