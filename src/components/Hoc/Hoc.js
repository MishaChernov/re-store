import React from 'react';

function Hoc(component, props) {
  
  return(() => {
    <Hoc {...props}>
      {component}
    </Hoc> 
  })
}

export default Hoc;