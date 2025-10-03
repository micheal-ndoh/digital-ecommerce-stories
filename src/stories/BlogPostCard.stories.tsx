import type { Meta, StoryObj } from '@storybook/react';
import BlogPostCard from '../components/blog/BlogPostCard';

const meta: Meta<typeof BlogPostCard> = {
  title: 'Blog/BlogPostCard',
  component: BlogPostCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    post: {
      control: 'object',
      description: 'Blog post data',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BlogPostCard>;

export const Default: Story = {
  args: {
    post: {
      title: 'The Future of E-commerce',
      brief: 'A deep dive into upcoming trends in online retail.',
      coverImage: 'https://media.istockphoto.com/id/1373613814/photo/gamer-work-space-concept-gaming-set-up-top-view-of-a-gaming-gear-keyboard-mouse-gamepad.jpg?s=2048x2048&w=is&k=20&c=XCi-o5lLboImaz0jUOGI6Zhg-E8v6gS-q9jhqyWRCDU=',
      date: '2023-10-26',
      tag: 'Technology',
      slug: 'the-future-of-e-commerce',
    } as any,
  },
};

export const AnotherPost: Story = {
  args: {
    post: {
      title: '10 Tips for a Successful Online Store',
      brief: 'Essential advice for new and experienced e-commerce entrepreneurs.',
      coverImage: 'https://media.istockphoto.com/id/1182209797/photo/close-view-of-wireless-black-gaming-headphones-with-microphone-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=lpY2F0QiHFVNiTQb0iHIxiy9U9CTagpExdvWQduUoRk=',
      date: '2023-09-15',
      tag: 'Business',
      slug: '10-tips-for-successful-online-store',
    } as any,
  },
};

export const FeaturedPost: Story = {
  args: {
    post: {
      title: 'Featured Article: Design Trends',
      brief: 'Exploring the latest design trends in e-commerce interfaces.',
      coverImage: 'https://media.istockphoto.com/id/1209783189/photo/gamepads-headphones-and-keyboard-with-mouse-on-old-wood-blue-table.jpg?s=2048x2048&w=is&k=20&c=ktlDSn-mcbKNAnSOqB6gdpVMhcKnFLWKei8H8sgAmQs=',
      date: '2023-11-01',
      tag: 'Style',
      slug: 'featured-article-design-trends',
    } as any,
  },
};