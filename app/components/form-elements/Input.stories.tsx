import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import Input from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  tags: ["docsPage"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    labelText: "Username",
  },
};
/* Primary.play = async ({ canvasElement }) => { */
/*   const canvas = within(canvasElement); */
/**/
/*   const input = canvas.getByLabelText(/username/i); */
/**/
/*   userEvent.type(input, "matt@flaik.com"); */
/* }; */

export const Required: Story = {
  args: {
    labelText: "Username",
    required: true,
  },
};
