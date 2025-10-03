import type { Meta, StoryObj } from '@storybook/react';

import Accordion from '../components/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    question: {
      control: 'text',
      description: 'The question for the accordion header',
    },
    answer: {
      control: 'text',
      description: 'The answer content for the accordion body',
    },
    idx: {
      control: 'number',
      description: 'Index of the accordion item (for display)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    question: 'What is your return policy?',
    answer:
      'Our return policy allows returns within 30 days of purchase with a valid receipt. Items must be unused and in their original packaging.',
    idx: 0,
  },
};

export const AnotherQuestion: Story = {
  args: {
    question: 'How do I track my order?',
    answer:
      'You can track your order by logging into your account and navigating to the "Order History" section. A tracking number will be provided once your order has shipped.',
    idx: 1,
  },
};

export const LongAnswer: Story = {
  args: {
    question: 'What payment methods do you accept?',
    answer:
      'We accept a variety of payment methods including major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. We also offer installment plans through our partners. For more details, please visit our payment information page.',
    idx: 2,
  },
};