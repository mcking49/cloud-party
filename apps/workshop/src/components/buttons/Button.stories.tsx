import { type Meta, type StoryObj } from "@storybook/react";

import { Button, IconMenu } from "@cloud-party/ui";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "this-is-a-test-class",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const IconButton: Story = {
  args: {
    icon: <IconMenu />,
    variant: "outline",
  },
};
