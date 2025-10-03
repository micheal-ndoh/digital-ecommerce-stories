import type { Meta, StoryObj } from '@storybook/react';
import Button from '../shared/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content of the button',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    sizeClass: {
      control: 'text',
      description: 'Size classes for the button',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    href: {
      control: 'text',
      description: 'Link destination (if button acts as a link)',
    },
    showPointer: {
      control: 'boolean',
      description: 'Show a pointer icon',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    className: 'bg-primary-600 hover:bg-primary-700 text-white',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    className: 'bg-neutral-200 hover:bg-neutral-300 text-neutral-800',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const WithPointer: Story = {
  args: {
    children: 'Button with Pointer',
    showPointer: true,
  },
};

export const AsLink: Story = {
  args: {
    children: 'Link Button',
    href: '/',
    showPointer: true,
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    sizeClass: 'py-2 px-3 text-xs',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    sizeClass: 'py-4 px-8 text-lg',
  },
};