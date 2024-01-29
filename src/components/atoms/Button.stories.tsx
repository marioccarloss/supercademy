import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    mode: "primary",
    children: "Iniciar sesión",
  },
};

export const Secondary: Story = {
  args: {
    mode: "secondary",
    children: "Iniciar sesión",
  },
};

export const Tertiary: Story = {
  args: {
    mode: "tertiary",
    children: "Iniciar sesión",
  },
};

export const Inverted: Story = {
  args: {
    mode: "inverted",
    children: "Iniciar sesión",
  },
};

export const Icon: Story = {
  args: {
    mode: "icon",
    children: "Iniciar sesión",
  },
};
