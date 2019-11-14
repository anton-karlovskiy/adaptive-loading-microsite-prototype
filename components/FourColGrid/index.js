
const FourColGrid = ({ children }) => {
  const renderElements = () => {
    const gridElements = children.map((element, i) => {
      return (
        <div key={i} className='grid-element'>
          {element}
          <style jsx>{`
            .grid-element {
              margin: 0 40px 40px 0;
              background: #353535;
              max-height: 430px;
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
            // For a 4-column grid
            .grid-element:nth-child(4n+4) {
              margin-right: 0;
            }
            @media screen and (max-width: 720px) {
              .grid-element:nth-child(2n+2) {
                margin-right: 0;
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
          grid-template-columns: auto auto auto auto;
        }
        @media screen and (max-width: 720px) {
          .grid-content {
            grid-template-columns: auto auto;
          }
        }
      `}</style>
    </div>
  );
};

export default FourColGrid;
