import { ReactNode } from 'react';
import useWrapperScroll from '../useWrapperScroll';

import { Container } from './styles';

interface ModelOverlayProps {
  children: ReactNode;
}

function ModelOverlay({ children }: ModelOverlayProps) {

  const { scrollY } = useWrapperScroll()

  return (

    <Container>
      {children}
    </Container>
  );
};

export default ModelOverlay;
