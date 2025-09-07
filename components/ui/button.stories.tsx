import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSizeAndVariantWithChildren = {
  args: {
    variant: "default",
    size: "default",
    children: "Submit",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "ghost",
        "link",
        "secondary",
      ],
    },
    size: { control: "radio", options: ["default", "sm", "lg", "icon"] },
  },
} satisfies Story;
