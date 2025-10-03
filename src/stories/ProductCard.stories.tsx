import type { Meta, StoryObj } from '@storybook/react';

import ProductCard from '../components/ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    product: {
      control: 'object',
      description: 'Product data',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    showPrevPrice: {
      control: 'boolean',
      description: 'Show previous price',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    product: {
      name: 'Wireless Headphones',
      coverImage:
        'https://media.istockphoto.com/id/1373613814/photo/gamer-work-space-concept-gaming-set-up-top-view-of-a-gaming-gear-keyboard-mouse-gamepad.jpg?s=2048x2048&w=is&k=20&c=XCi-o5lLboImaz0jUOGI6Zhg-E8v6gS-q9jhqyWRCDU=',
      category: 'Electronics',
      currentPrice: 199.99,
      previousPrice: 249.99,
      justIn: true,
      slug: 'wireless-headphones',
      rating: 4,
      pieces_sold: 120,
      onSale: false,
    },
  },
};

export const NoPreviousPrice: Story = {
  args: {
    product: {
      name: 'Gaming Mouse',
      coverImage:
        'https://media.istockphoto.com/id/1209783189/photo/gamepads-headphones-and-keyboard-with-mouse-on-old-wood-blue-table.jpg?s=2048x2048&w=is&k=20&c=ktlDSn-mcbKNAnSOqB6gdpVMhcKnFLWKei8H8sgAmQs=',
      category: 'Gaming',
      currentPrice: 79.99,
      previousPrice: 0, // Added missing previousPrice
      justIn: false,
      slug: 'gaming-mouse',
      rating: 5,
      pieces_sold: 300,
      onSale: true,
    },
    showPrevPrice: false,
  },
};

export const JustInProduct: Story = {
  args: {
    product: {
      name: 'Smartwatch Series 7',
      coverImage:
        'https://media.istockphoto.com/id/1182209797/photo/close-view-of-wireless-black-gaming-headphones-with-microphone-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=lpY2F0QiHFVNiTQb0iHIxiy9U9CTagpExdvWQduUoRk=',
      category: 'Wearables',
      currentPrice: 399,
      previousPrice: 450,
      justIn: true,
      slug: 'smartwatch-series-7',
      rating: 4.5,
      pieces_sold: 80,
      onSale: false,
    },
  },
};
