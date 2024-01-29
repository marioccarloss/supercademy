import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: "Iniciar sesión",
    href: "/",
  },
};

export const Secondary: Story = {
  args: {
    children: "Iniciar sesión",
    href: "#",
    mode: "secondary",
  },
};

export const WithHref: Story = {
  args: {
    children: "Iniciar sesión",
    href: "#",
  },
};

export const WithTarget: Story = {
  args: {
    children: "Iniciar sesión",
    href: "#",
    target: "_blank",
  },
};

export const WithRel: Story = {
  args: {
    children: "Iniciar sesión",
    href: "#",
    rel: "noopener noreferrer",
  },
};

export const WithDownload: Story = {
  args: {
    children: "Iniciar sesión",
    href: "#",
    download: true,
  },
};
