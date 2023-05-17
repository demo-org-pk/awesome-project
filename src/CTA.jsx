import React from 'react';

const CTA = ({ text, externalLink, variant }) => {
  return (
    <a href={externalLink} className={`cta cta-${variant}`}>{text}</a>
  );
};

export default CTA;
