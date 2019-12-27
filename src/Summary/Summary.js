import React, { Component } from 'react';
import './Summary.css';
import SummaryOption from '../SummaryOption/SummaryOption';
import SummaryTotal from '../SummaryTotal/SummaryTotal';

class Summary extends Component {
  render() {
    const { selected } = this.props;
    const summaryOptions = Object.keys(selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = selected[feature];
      return (
        <SummaryOption 
          key={featureHash} 
          feature={feature} 
          selectedOption={selectedOption}
        />
      );
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summaryOptions}
        <SummaryTotal selected={selected}/>
      </section>
    );
  }
}

export default Summary;
