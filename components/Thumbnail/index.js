
import { useEffect } from 'react';

import { imagePlaceHolder } from '../../styles/images';

const Thumbnail = ({ title, src, alt, onClick, clickable, lazyload }) => {
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
          const lazySizesLib = await import('lazysizes');
          // Initiate LazySizes (reads data-src & class=lazyload)
          lazySizes.init(); // lazySizes works off a global.
        }
      })();
    }
  }, []);


  let classes = '';
  if (clickable) {
    classes += 'clickable';
  }
  if (lazyload) {
    classes += 'lazyload';
  }

  return (
    <div className='thumbnail'>
      <img
        className={classes}
        data-src={imagePlaceHolder}
        srcSet={src}
        alt={alt}
        onClick={onClick}
        loading={lazyload ? 'lazy' : 'auto'} />
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
