
const ImageThumb = ({ src, alt, onClick, clickable }) => {
  return (
    <div className='image-thumb'>
      <img className={clickable && 'clickable'} src={src} alt={alt} onClick={onClick} />
      <style jsx>{`
        .image-thumb img {
          width: 500px;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          transition: all 0.3s;
          box-sizing: border-box;
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

export default ImageThumb;
