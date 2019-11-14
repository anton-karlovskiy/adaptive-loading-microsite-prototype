
import theme from '../../styles/theme';

const ThumbnailGrid = ({ children }) => {
  const renderElements = () => {
    const gridElements = children.map(element => (
      <div key={element.key} className='grid-element'>
        {element}
        <style jsx>{`
          .grid-element {
            background: rgba(0, 140, 186, 0.5);
            height: 152px;
            animation: animateGrid 0.5s;
            padding: 4px;
            ${theme.imageHoveringEffect}
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .grid-element:hover {
            ${theme.imageHoveringEffect}
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
    ));
    return gridElements;
  };

  return (
    <>
      <div className='grid-container'>{renderElements()}</div>
      <style jsx>{`
        .grid-container {
          display: grid;
          grid-column-gap: 10px;
          grid-row-gap: 60px;
          grid-template-columns: auto auto;
        }
        @media screen and (min-width: 521px) {
          .grid-container {
            grid-column-gap: 20px;
            grid-row-gap: 40px;
          }
        }
        @media screen and (min-width: 921px) {
          .grid-container {
            grid-column-gap: 40px;
            grid-row-gap: 60px;
            grid-template-columns: auto auto auto auto;  
          }
        }
      `}</style>
    </>
  );
};

export default ThumbnailGrid;
