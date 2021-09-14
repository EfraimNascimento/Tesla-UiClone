import { Container } from './styles';
import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelSection, ModelsWrapper } from '../Model';

function Page() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map(modelName =>(
            <ModelSection 

            key={modelName}
            className="colored"
            modelName = "Model One"
            overlayNode={
              <DefaultOverlayContent 
                label ="Model One"
                description="Order Online for Delivery"
              />
            }

          />
          ))}
          
        </div>
      </ModelsWrapper>      
    </Container>
  );
};

export default Page;
