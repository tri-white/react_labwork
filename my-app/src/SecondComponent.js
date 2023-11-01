import React from 'react';
 
class OurSecondComponent extends React.Component {
  constructor(props) {
    super(props)
}

  render() {
    return <h1>
              <p>Привіт: {this.props.name}</p>
              <p>Вітає тебе - {this.props.novanazvapropsa}!</p>
          </h1>;
  }
}

  
export default OurSecondComponent;
