import React, {useState, useEffect} from 'react';
import DesktopLayout from 'components/layout/DesktopLayout';
import MobileLayout from 'components/layout/MobileLayout'

const Layout = () => {
  return (
    <>
      <WindowResizeDetector>
        {({width}) => (width > 768 ? <DesktopLayout /> : <MobileLayout />)}
      </WindowResizeDetector>

      <WindowResizeDetector
        render={({width}) => {
           return width > 768 ? <DesktopLayout /> : <MobileLayout />
          }
        }
      />
    </>
  )
}

// ================================================================

import React, {useState, useEffect} from 'react';

const WindowResizeDetector = (props) => {
  const [width, setWidth] = useState();
  
  useEffect(() => {
     const handleWindowResize = () => {
      setWidth(window.innerWidth);
     }
    
    window.addEventListener('resize', handleWindowResize);
    
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
    
  },[])
  
  return (
    <>
      {props.children({width})}
      {props.render({width})}
    </>
  )
}
