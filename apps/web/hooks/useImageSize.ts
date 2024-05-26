import useBreakpoints from '@/hooks/useBreakpoints';

const useImageSize = () => {
  const { isSm } = useBreakpoints();
  return isSm ? 2 : 1;
};

export default useImageSize;
