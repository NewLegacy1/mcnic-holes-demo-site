
import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  highlight,
  description,
  align = 'left',
}) => {
  const centered = align === 'center';

  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center' : ''}`}>
      <span className={`section-label ${centered ? 'mx-auto' : ''}`}>{label}</span>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-brand-blue">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
