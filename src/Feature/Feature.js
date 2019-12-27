import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './Feature.css';
import FeatureOption from '../FeatureOption/FeatureOption';

class Feature extends Component {
  render() {
    const { featureName, options } = this.props;
    const featureOptions = options.map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <FeatureOption 
          key={itemHash}
          item={item}
          itemHash={itemHash}
          feature={slugify(featureName)}
        />
      );
    });

    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{featureName}</h3>
        </legend>
        {featureOptions}
      </fieldset>
    );
  }
}

export default Feature;
