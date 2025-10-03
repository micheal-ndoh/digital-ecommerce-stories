import type { Meta, StoryObj } from '@storybook/react';
import { IoFastFoodOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';
import { RiCustomerService2Line } from 'react-icons/ri';

import BenefitCard from '../components/BenefitsCard';

const meta: Meta<typeof BenefitCard> = {
  title: 'Components/BenefitCard',
  component: BenefitCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    Icon: {
      control: false,
      description: 'Icon component to display',
    },
    title: {
      control: 'text',
      description: 'Title of the benefit',
    },
    text: {
      control: 'text',
      description: 'Description of the benefit',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BenefitCard>;

export const FreeShipping: Story = {
  args: {
    Icon: IoFastFoodOutline,
    title: 'Free Shipping',
    text: 'Enjoy free shipping on all orders over $50.',
  },
};

export const SecurePayment: Story = {
  args: {
    Icon: IoShieldCheckmarkOutline,
    title: 'Secure Payment',
    text: 'All payments are processed securely with encryption.',
  },
};

export const CustomerSupport: Story = {
  args: {
    Icon: RiCustomerService2Line,
    title: '24/7 Customer Support',
    text: 'Our dedicated support team is available around the clock to assist you.',
  },
};