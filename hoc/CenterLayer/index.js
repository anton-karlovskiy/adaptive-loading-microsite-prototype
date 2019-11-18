
const CenterLayer = ({ children }) => (
  <div className='thumbnail-gallery'>
    {children}
    <style jsx>{`
      .thumbnail-gallery {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 20px;
      }
    `}</style>
  </div>
);

export default CenterLayer;
