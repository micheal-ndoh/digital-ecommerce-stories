import type { Meta, StoryObj } from '@storybook/react';
import ClockCard from '../components/ClockCard';

const meta: Meta<typeof ClockCard> = {
  title: 'Components/ClockCard',
  component: ClockCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      control: 'text',
      description: 'URL of the clock image',
    },
    badgeText: {
      control: 'text',
      description: 'Optional badge text (e.g., "Best Seller")',
    },
    title: {
      control: 'text',
      description: 'Title of the clock',
    },
    description: {
      control: 'text',
      description: 'Description of the clock',
    },
    tags: {
      control: 'object', // Changed to 'object' for array input
      description: 'Array of tags for the clock',
    },
    stock: {
      control: 'number',
      description: 'Number of items in stock',
    },
    price: {
      control: 'number',
      description: 'Price of the clock',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the card (Tailwind class)',
      options: ['bg-card-light', 'bg-card-dark', 'bg-red-100', 'bg-blue-100'], // Example options
      mapping: {
        'bg-card-light': 'bg-card-light',
        'bg-card-dark': 'bg-card-dark',
        'bg-red-100': 'bg-red-100',
        'bg-blue-100': 'bg-blue-100',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ClockCard>;

export const Default: Story = {
  args: {
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRonWpPmW5cm36a8gIulwNm6MXpXhmpF3c6jE8HPMreU7rA6mFGzCuGB86w9TafTCRLc1Q619W7DFlgkwb6Z88XdGx4f1rPokl8-Yi8640uvKf4RhlWDY5qWUsXzH38VI-ZBj6Elbx47kKPXyEqC013fIXsuKaoXK0T_XImXNqt2zsIoLeQGcL6NswY7Po14OSW2WOP7ZsnKWF_-_Uevfohi3KqAg4wj-EKUioROis7F12kvlyK55E8RKqyZm1jOwmlCunSIsr-5WH',

    badgeText: 'Best Seller',
    title: 'Minimalistic clock',

    description:
      'The epitome of minimalist design. An ultra-thin wrist clock that strips timekeeping down to its purest form.',

    tags: ['Clock', 'Minimalistic'],
    stock: 12,
    price: 29.99,
    backgroundColor: "bg-red-10"
  },
};

export const DarkMode: Story = {
  args: {
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRonWpPmW5cm36a8gIulwNm6MXpXhmpF3c6jE8HPMreU7rA6mFGzCuGB86w9TafTCRLc1Q619W7DFlgkwb6Z88XdGx4f1rPokl8-Yi8640uvKf4RhlWDY5qWUsXzH38VI-ZBj6Elbx47kKPXyEqC013fIXsuKaoXK0T_XImXNqt2zsIoLeQGcL6NswY7Po14OSW2WOP7ZsnKWF_-_Uevfohi3KqAg4wj-EKUioROis7F12kvlyK55E8RKqyZm1jOwmlCunSIsr-5WH',
    badgeText: 'New Arrival',
    title: 'Elegant Dark Clock',
    description: 'A sleek and modern clock designed for contemporary spaces.',
    tags: ['Clock', 'Modern', 'Dark'],
    stock: 5,
    price: 49.99,
    backgroundColor: 'bg-card-dark',
  },
};

export const NoBadge: Story = {
  args: {
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRonWpPmW5cm36a8gIulwNm6MXpXhmpF3c6jE8HPMreU7rA6mFGzCuGB86w9TafTCRLc1Q619W7DFlgkwb6Z88XdGx4f1rPokl8-Yi8640uvKf4RhlWDY5qWUsXzH38VI-ZBj6Elbx47kKPXyEqC013fIXsuKaoXK0T_XImXNqt2zsIoLeQGcL6NswY7Po14OSW2WOP7ZsnKWF_-_Uevfohi3KqAg4wj-EKUioROis7F12kvlyK55E8RKqyZm1jOwmlCunSIsr-5WH',
    title: 'Classic Timepiece',
    description: 'A timeless design that complements any decor.',
    tags: ['Classic', 'Analog'],
    stock: 20,
    price: 19.99,
  },
};