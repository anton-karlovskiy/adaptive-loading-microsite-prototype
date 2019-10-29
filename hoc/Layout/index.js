
import AppBar from '../../components/AppBar';
import globalStyles from '../../styles/global.js';
import './layout.css';

const Layout = ({ children }) => (
  <div className='layout'>
    <AppBar />
    {children}
    <style jsx global>
      {globalStyles}
    </style>
  </div>
);

export default Layout;
