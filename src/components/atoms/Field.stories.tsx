import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "./Field";

const meta: Meta<typeof Field> = {
  component: Field,
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "Email",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    placeholder: "Email",
    error: "Email inválido",
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    placeholder: "Email",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    label: "Contraseña",
    placeholder: "Contraseña",
    type: "password",
  },
};

export const PasswordError: Story = {
  args: {
    label: "Contraseña",
    placeholder: "Contraseña",
    type: "password",
    error: "Contraseña inválida",
  },
};

export const PasswordDisabled: Story = {
  args: {
    label: "Contraseña",
    placeholder: "Contraseña",
    type: "password",
    disabled: true,
  },
};
