import React from 'react';

const BarCards = (props) => {
  //console.log('barcards props :', props.placesArray);
  const places = props.placesArray;
  //console.log('barcard props test de chemin :', places[0].id);

  return (
    <div className="">
      {places.map((place) => (
        <button
          className="border-2 rounded-lg  hover:bg-accent hover:text-secondary p-2 mb-4 w-full text-left"
          key={place.id}
        >
          <h4 className="font-display text-2xl">{place.name}</h4>
          <p>{place.address}</p>
          <p>{place.formatted_phone_number}</p>
          <div className="flex">
            <p>{place.rating}</p>
            <p>: {place.user_ratings_total}</p>
          </div>
          <p>{place.type}</p>
        </button>
      ))}
    </div>
  );
};

export default BarCards;
