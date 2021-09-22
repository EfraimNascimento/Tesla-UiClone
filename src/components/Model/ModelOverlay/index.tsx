import React, { useCallback, useLayoutEffect, useState } from 'react'
import { useTransform } from 'framer-motion'

import useWrapperScroll from '../useWrapperScroll'
import { CarModel } from '../ModelsContext'

import { Container } from './styles'

interface Props {
  model: CarModel
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC<Props> = ({ model, children }) => {
  const { scrollY } = useWrapperScroll()

  
  const getSectionDimensions = useCallback(() =>{
    return{
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight
    } as SectionDimensions
  }, [])
  
  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  );

    useLayoutEffect(() =>{
      function onResize() {
        window.requestAnimationFrame(() => setDimensions(getSectionDimensions()))
      }

      window.addEventListener('resize', onResize)

      return () => window.removeEventListener('resize', onResize)
    }, [])

  return (

    <Container>
      {children}
    </Container>
  );
};

export default ModelOverlay;
