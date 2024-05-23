import { useState, useEffect } from 'react';

const getBreakpoints = (innerWidth: number) => ({
  isSm: innerWidth < 640,
  isMd: innerWidth > 640 && innerWidth < 768,
  isLg: innerWidth > 768 && innerWidth < 1024,
  isXl: innerWidth > 1024 && innerWidth < 1280,
  is2Xl: innerWidth > 1536,
});

const useBreakpoints = (): {
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2Xl: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} => {
  const [breakpoints, setBreakpoints] = useState(getBreakpoints(0));

  useEffect(() => {
    // Set breakpoints at first render on client side
    setBreakpoints(getBreakpoints(window.innerWidth));

    const handleResize = () => {
      setBreakpoints(getBreakpoints(window.innerWidth));
    };

    addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    ...breakpoints,
    isMobile: breakpoints.isSm || breakpoints.isMd,
    isTablet: breakpoints.isLg,
    isDesktop: breakpoints.isXl || breakpoints.is2Xl,
  };
};

export default useBreakpoints;
