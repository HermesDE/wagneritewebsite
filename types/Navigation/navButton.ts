import { ButtonProps } from "@mantine/core";
import React, { ElementType } from "react";

export type NavButtonType = {
  name: string;
  link: string;
  icon?: React.ReactNode;
  props?: ButtonProps & ElementType;
};
