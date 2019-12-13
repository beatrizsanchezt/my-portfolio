import React from 'react';
import {
  EuiButton
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';

import {
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';


const ExampleItem = (props) => {
    return (      
      <EuiFlexItem key={1}>
        <EuiCard
          icon={<EuiIcon size="xxl" type={`logo${'Beats'}`} />}
          title={`Card Test`}
          isDisabled={false}
          description="Example of a card's description. Stick to one or two sentences."
          onClick={() => window.alert('Card clicked')}
        />
        <EuiButton onClick={() => window.alert('Button clicked')}>
          Primary
        </EuiButton>
      </EuiFlexItem>
    );
};

export default ExampleItem;

