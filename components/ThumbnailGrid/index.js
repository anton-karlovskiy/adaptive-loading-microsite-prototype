
const ThumbnailGrid = ({ children }) => {
  const renderElements = () => {
    const gridElements = children.map((element, i) => {
      return (
        <div key={i} className='grid-element'>
          {element}
          <style jsx>{`
            .grid-element {
              background: #353535;
              height: 152px;
              animation: animateGrid 0.5s;
              overflow: hidden;
            }
            @keyframes animateGrid {
              from {
                opacity:0;
              }
              to {
                opacity:1;
              }
            }
            @media screen and (min-width: 521px) {
              .grid-element {
                height: 172px;
              }
            }
          `}</style>
        </div>
      );
    });
    return gridElements;
  };

  return (
    <div className='grid'>
      <div className='grid-content'>{renderElements()}</div>
      <style jsx>{`
        .grid-content {
          display: grid;
          grid-column-gap: 10px;
          grid-row-gap: 10px;
          grid-template-columns: auto auto;
        }
        @media screen and (min-width: 521px) {
          .grid-content {
            grid-column-gap: 20px;
            grid-row-gap: 20px;
          }
        }
        @media screen and (min-width: 921px) {
          .grid-content {
            grid-column-gap: 40px;
            grid-row-gap: 40px;
            grid-template-columns: auto auto auto auto;  
          }
        }
      `}</style>
    </div>
  );
};

export default ThumbnailGrid;
