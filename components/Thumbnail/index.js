
const Thumbnail = ({ title, src, alt, onClick, clickable }) => {
  return (
    <div className='thumbnail'>
      <img className={clickable && 'clickable'} src={src} alt={alt} onClick={onClick} />
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
