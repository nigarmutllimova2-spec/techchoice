import React, { useState } from 'react';
import { Laptop, Smartphone, Headphones, Watch, Tablet, Gamepad2 } from 'lucide-react';
import { CategoryId } from '../types';

interface ProductImageProps {
  src: string;
  alt: string;
  category?: CategoryId | string;
  className?: string;
}

function getFallbackIcon(category?: string) {
  const iconClass = 'w-10 h-10 text-[#A7D66D]';
  switch (category) {
    case 'Laptops':
      return <Laptop className={iconClass} />;
    case 'Smartphones':
      return <Smartphone className={iconClass} />;
    case 'Headphones & Audio':
      return <Headphones className={iconClass} />;
    case 'Smartwatches':
      return <Watch className={iconClass} />;
    case 'Tablets':
      return <Tablet className={iconClass} />;
    case 'Gaming':
      return <Gamepad2 className={iconClass} />;
    default:
      return <Laptop className={iconClass} />;
  }
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  category,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#0B213B] text-center p-4 ${className}`}
        role="img"
        aria-label={alt}
      >
        {getFallbackIcon(category)}
        <span className="mt-2 text-xs font-medium text-[#F3F6FA] max-w-[16ch] line-clamp-2">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-[#0B213B]">
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`${className} brightness-[0.93] contrast-[1.04]`}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102B49]/55 via-transparent to-[#071B33]/20"
      />
    </div>
  );
};
