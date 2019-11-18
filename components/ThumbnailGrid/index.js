
import theme from '../../styles/theme';

const ThumbnailGrid = ({ children }) => {
  const renderElements = () => {
    const gridElements = children.map(element => (
      <div key={element.key} className='grid-element'>
        <div className='title'>{element.props.title}</div>
        <div className='thumbnail'>
          {element}
        </div>
        <div className='links'>
          <a href={element.props.liveDemo} target='_blank' rel='noopener noreferrer'>Live Demo</a>
          <a href={element.props.sourceCode} target='_blank' rel='noopener noreferrer'>Source Code</a>
        </div>
        <style jsx>{`
          .grid-element {
            position: relative;
          }
          .thumbnail {
            background: rgba(0, 140, 186, 0.5);
            height: 152px;
            animation: animateGrid 0.5s;
            padding: 4px;
            ${theme.imageHoveringEffect}
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          @keyframes animateGrid {
            from {
              opacity:0;
            }
            to {
              opacity:1;
            }
          }
          .title {
            position: absolute;
            padding: 0 4px;
            width: 100%;
            bottom: 32px;
            font-size: 16px;
            text-align: center;
            color: #d8227d;
            font-weight: 900;
            text-shadow: 2px 2px 4px #000000;
          }
          .links {
            display: flex;
            font-size: 16px;
            margin-top: 8px;
            justify-content: space-between;
          }
          .links a:hover {
            text-decoration: underline;
          }
          @media screen and (min-width: 521px) {
            .thumbnail {
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
