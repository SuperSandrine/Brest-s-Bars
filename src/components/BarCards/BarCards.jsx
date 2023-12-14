import { getStarRating } from '../Stars/Stars';

const BarCards = (props) => {
  //console.log('dans barcard, c koi props', props);

  return (
    <div className="">
      {props.array.array.map((place) => (
        <button
          className="border-2 rounded-lg  hover:bg-accent hover:text-secondary p-2 mb-4 w-full text-left "
          key={place.id}
          data-id={place.id}
          data-name="cardsToGet"
        >
          <h4 className="font-display text-2xl">{place.name}</h4>
          <p>{place.address}</p>
          <p>{place.formatted_phone_number}</p>
          <div className="flex">
            <p>{getStarRating(place.rating)}</p>
            <p>
              : {place.rating} vote from {place.user_ratings_total}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default BarCards;
