import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@repo/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    appName: 'storybook',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    appName: 'storybook',
    children: 'Button',
  },
};

export const Warning: Story = {
  args: {
    appName: 'storybook',
    children: 'Delete now',
  },
};

export const Large: Story = {
  args: {
    appName: 'storybook',
    size: 'large',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    appName: 'storybook',
    size: 'small',
    children: 'Button',
  },
};
