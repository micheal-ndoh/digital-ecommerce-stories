import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Button from '../shared/Button/Button';
import ButtonLink from '../shared/Button/ButtonLink';
import Toast from '../components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title of the toast message.',
    },
    description: {
      control: 'text',
      description: 'Optional descriptive text for the toast.',
    },
    actionButtons: {
      control: false,
      description: 'Optional ReactNode for action buttons.',
    },
    actionLink: {
      control: false,
      description: 'Optional ReactNode for an action link.',
    },
    onClose: {
      action: 'closed',
      description: 'Callback function when the toast is closed.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    title: 'Item Added',
    onClose: () => alert('Toast closed!'),
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Item Added',
    description: 'The new entry was added to your list.',
    onClose: () => alert('Toast closed!'),
  },
};

export const WithActionButtons: Story = {
  args: {
    title: 'Item Added',
    description: 'The new entry was added to your list.',
    actionButtons: (
      <>
        <Button
          sizeClass="py-2 px-3"
          className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800"
        >
          Open Later
        </Button>
        <Button
          sizeClass="py-2 px-3"
          className="bg-primary-600 hover:bg-primary-700 text-white"
        >
          Open Document
        </Button>
      </>
    ),
    onClose: () => alert('Toast closed!'),
  },
};

export const WithActionLink: Story = {
  args: {
    title: 'Item Added',
    description: 'The new entry was added to your list.',
    actionLink: (
      <ButtonLink href="#" className="text-primary-600 hover:text-primary-700">
        Open document
      </ButtonLink>
    ),
    onClose: () => alert('Toast closed!'),
  },
};