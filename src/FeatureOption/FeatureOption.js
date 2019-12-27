import React, { Component } from 'react';
import './FeatureOption.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FeatureOption extends Component {
  render() {
    const { item, itemHash, feature, selectedOption } = this.props;
    
    return (
      <div className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={feature}
          checked={item.name === selectedOption.name}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}

export default FeatureOption;
