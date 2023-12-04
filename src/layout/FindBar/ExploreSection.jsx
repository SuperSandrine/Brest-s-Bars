import React from 'react';
import BarCards from '../../components/BarCards/BarCards';

const ExploreSection = (props) => {
  console.log('ExploreSection props :', props);
  console.log('ExploreSection props, tableau direct', props.places);

  return (
    <section className="w-full md:w-1/3 lg:w-1/4 p-5">
      <h3 className="font-display text-4xl py-4">Explorer</h3>
      <BarCards placesArray={props.places} />
    </section>
  );
};

export default ExploreSection;
