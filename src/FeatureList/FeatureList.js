import React, { Component } from 'react';
import './FeatureList.css';
import Feature from '../Feature/Feature';

class FeatureList extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <Feature
          key={featureHash}
          featureName={feature}
          options={this.props.features[feature]}
          selectedOption={this.props.selected[feature]}
        />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
	{features}
      </form>
    );
  }
}

export default FeatureList;
