
import { useEffect } from 'react';

import { imagePlaceHolder } from '../../styles/images';
import { getDemosPath } from '../../data';

const Thumbnail = ({ title, fileName, alt, onClick, clickable, lazyload }) => {
  useEffect(() => {
    if (lazyload) {
      (async () => {
        if ('loading' in HTMLImageElement.prototype) {
          console.log('[components Thumbnail] loading attribute is supported');
          const images = document.querySelectorAll('img.lazyload');
          images.forEach(img => {
            img.src = img.dataset.src;
          });
        } else {
          console.log('[components Thumbnail] loading attribute is not supported');
          // Dynamically import the LazySizes library
          await import('lazysizes');
          // Initiate LazySizes (reads data-src & class=lazyload)
          lazySizes.init(); // lazySizes works off a global.
        }
      })();
    }
  }, []);

  let classes = '';
  if (clickable) {
    classes += ' clickable';
  }
  if (lazyload) {
    classes += ' lazyload';
  }

  return (
    <div className='thumbnail'>
      <picture>
        <source srcSet={getDemosPath('webp') + fileName + '.webp'} type='image/webp' />
        <source srcSet={getDemosPath('jpg') + fileName + '.jpg'} type='image/jpeg' />
        <img
          className={classes}
          data-src={imagePlaceHolder}
          onClick={onClick}
          alt={alt}
          loading={lazyload ? 'lazy' : 'auto'} />
      </picture>
      <div className='thumbnail-title'>
        <p>{title}</p>
      </div>
      <style jsx>{`
        .thumbnail {
          height: 100%;
        }
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s;
          box-sizing: border-box;
        }
        .thumbnail-title {
          text-align: center;
        }
        .clickable {
          cursor: pointer;
        }
        .clickable:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default Thumbnail;
