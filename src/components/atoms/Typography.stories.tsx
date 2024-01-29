import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Title: Story = {
  args: {
    mode: "title",
    children: "Iniciar sesión",
  },
};

export const Subtitle: Story = {
  args: {
    mode: "subtitle",
    children: "Iniciar sesión",
  },
};

export const Body: Story = {
  args: {
    mode: "body",
    children: "Iniciar sesión",
  },
};

export const Caption: Story = {
  args: {
    mode: "caption",
    children: "Iniciar sesión",
  },
};

export const Label: Story = {
  args: {
    mode: "label",
    children: "Iniciar sesión",
  },
};
