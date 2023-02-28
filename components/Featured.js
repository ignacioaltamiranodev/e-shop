import { featured } from '@/data/data';
import Image from 'next/image';
import React from 'react';

const Featured = () => {
  const { heading, title, text, img } = featured;
  return (
    <section className="featured primary-bg my-4">
      <div className="row container mx-auto">
        <div className="col-md-6 mt-md-0 mt-4 d-flex justify-content-center flex-column">
          <h2 className="display-md-5 display-6 text-white mb-3">{heading}</h2>
          <h2 className="display-md-5 display-6 mb-3 secondary-text">
            {title}
          </h2>
          <p className="lead mb-3 text-white">{text}</p>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center rotate-30 featured-img">
          <Image src={img} width={600} height={600} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default Featured;
