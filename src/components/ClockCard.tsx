import type { FC } from 'react';
import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';

interface ClockCardProps {
  imageUrl: string;
  badgeText?: string;
  title: string;
  description: string;
  tags: string[];
  stock: number;
  price: number;
  backgroundColor?: string; // New prop for background color
}

const ClockCard: FC<ClockCardProps> = ({
  imageUrl,
  badgeText,
  title,
  description,
  tags,
  stock,
  price,
  backgroundColor = 'bg-card-light', // Default background
}) => {
  return (
    <div className={`max-w-sm rounded-2xl ${backgroundColor} shadow-lg overflow-hidden`}>
      <div className="relative">
        <img alt={title} className="w-full" src={imageUrl} />
        {badgeText && (
          <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-800 backdrop-blur-sm dark:bg-gray-800/80 dark:text-white">
            {badgeText}
          </div>
        )}
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full bg-white p-2 focus:outline-none backdrop-blur-sm dark:bg-gray-800/80"
        >
          <IoHeartOutline className="text-gray-700 dark:text-gray-300" size={24} />
        </button>
      </div>
      <div className="p-6">
        <h2 className="mb-2 text-2xl font-bold text-text-light dark:text-text-dark">
          {title}
        </h2>
        <p className="mb-4 text-subtext-light dark:text-subtext-dark">
          {description}
        </p>
        <div className="mb-6 flex space-x-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-chip-light px-4 py-1.5 text-sm text-subtext-light dark:bg-chip-dark dark:text-subtext-dark"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-subtext-light dark:text-subtext-dark">
              {stock} in stock
            </p>
            <p className="text-2xl font-bold text-text-light dark:text-text-dark">
              USD {price}
            </p>
          </div>
          <button
            type="button"
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-white"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClockCard;