import { type ComponentMeta, type ComponentStory } from "@storybook/react";

import { Button, IconMenu } from "@cloud-party/ui";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: "this-is-a-test-class",
  children: "Button",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  children: "Button",
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: <IconMenu />,
  variant: "outline",
};
