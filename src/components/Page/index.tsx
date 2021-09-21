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
            'Model Two',
            'Model One',
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
                label ={modelName}
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
