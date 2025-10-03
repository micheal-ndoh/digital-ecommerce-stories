import type { Meta, StoryObj } from '@storybook/react';
import BlogCard from '../components/BlogCard';

const meta: Meta<typeof BlogCard> = {
  title: 'Components/BlogCard',
  component: BlogCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the blog post',
    },
    coverImage: {
      control: 'text',
      description: 'URL or path to the cover image',
    },
    slug: {
      control: 'text',
      description: 'Slug for the blog post URL',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  args: {
    title: 'The Latest Trends in Fashion',
    coverImage: 'https://media.istockphoto.com/id/1373613814/photo/gamer-work-space-concept-gaming-set-up-top-view-of-a-gaming-gear-keyboard-mouse-gamepad.jpg?s=2048x2048&w=is&k=20&c=XCi-o5lLboImaz0jUOGI6Zhg-E8v6gS-q9jhqyWRCDU=',
    slug: 'the-latest-trends-in-fashion',
  },
};

export const ShorterTitle: Story = {
  args: {
    title: 'Minimalist Style Guide',
    coverImage: 'https://media.istockphoto.com/id/1182209797/photo/close-view-of-wireless-black-gaming-headphones-with-microphone-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=lpY2F0QiHFVNiTQb0iHIxiy9U9CTagpExdvWQduUoRk=',
    slug: 'minimalist-style-guide',
  },
};

export const LongTitle: Story = {
  args: {
    title: 'How to Choose the Perfect Accessories for Your Outfit: A Comprehensive Guide',
    coverImage: 'https://media.istockphoto.com/id/1209783189/photo/gamepads-headphones-and-keyboard-with-mouse-on-old-wood-blue-table.jpg?s=2048x2048&w=is&k=20&c=ktlDSn-mcbKNAnSOqB6gdpVMhcKnFLWKei8H8sgAmQs=',
    slug: 'how-to-choose-perfect-accessories',
  },
};