import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { useOpenNowPlace } from '../../utils/filter/useOpenPlaceFilter';

const FilterSection = (props) => {
  const places = props.array;
  const [filteredPlaces, setFilteredPlaces] = useState(places);
  //setFilteredPlaces(places);
  console.log('dans filter', props.array);
  console.log('dans filter 2', places);
  console.log('dans filter 3', filteredPlaces);

  //const test = places.find((place) => place.id == 121);
  //console.log('test', test); // la javanaise
  //console.log('place category', places[2].category); // la javanaise

  //const test2 = places.filter((place) =>
  //  place.type.some((cat) => cat > 200 && cat < 300)
  //); // restaurant brasserie
  //console.log('test2', test2);
  //const test3 = places.filter((place) => place.type.some((cat) => cat < 200)); // bar petite restauration

  // const test4 = places.filter((place) =>
  //   place.category.some((cat) => cat > 400)
  // ); // grande restauration

  // meilleure note
  const bestRates = (array) => {
    const copyArray = [...array];
    copyArray.sort((a, b) => Number(b.rating) - Number(a.rating));
    return copyArray;
  };
  //console.log('bestRates', bestRates(places));

  const test6 = places.sort((a, b) => {
    const averageRatingA = a.rating * a.user_ratings_total;
    const averageRatingB = b.rating * b.user_ratings_total;

    return averageRatingB - averageRatingA;
  });
  //console.log('avreage bestmarktest6', test6);

  const moreUsersVote = (array) => {
    const copyArray = [...array];
    places.sort((a, b) => b.user_ratings_total - a.user_ratings_total);
    return copyArray;
  };
  //console.log('moreUsersVotes', moreUsersVote(places));

  function hasThursdayOpeningHours(openingHours) {
    const parsedHours = JSON.parse(openingHours);
    // Vérifier si le jeudi a des heures d'ouverture spécifiées
    //console.log(parsedHours); // log un objet avec 6 index et des string à chaque index.
    if (parsedHours == null) {
      return false;
    } else if (
      parsedHours.hasOwnProperty('3') &&
      parsedHours['3'].includes('jeudi:')
    ) {
      const thursdayHours = parsedHours['3'];
      //console.log("jeudi", thursdayHours);

      // Vérifier si le jeudi ferme après 1:00 (01:00)
      const closingTime = thursdayHours.split('jeudi: ')[1];
      //console.log("jeudi", closingTime);
      if (closingTime == 'Fermé') {
        return false;
      } else if (closingTime.includes('24h/24')) {
        return true;
      } else {
        //const closingHour = parseInt(closingTime.split(' – ')[1].split(':')[0]);
        //console.log('jeudi closing time', closingTime, 'jeudi closingHour', closingHour);
        const closingHourRaw = closingTime.split(' – ')[1].trim();
        const closingHourSubstring = closingHourRaw.slice(-5);
        const closingHourF = parseInt(closingHourSubstring.split(':')[0]);
        //console.log('jeudi closing time', closingTime, 'jeudi closingHourRaw', closingHourRaw, 'closingHour', closingHourF)
        //console.log('jeudi closing time', closingTime, 'closingHour', closingHourF < 9)

        //return closingHour > 1;
        return closingHourF < 9;
      }
    }

    //return false; // Retourne false si le jeudi n'a pas d'heures d'ouverture spécifiées

    // return parsedHours.hasOwnProperty('3') && parsedHours['3'].includes('jeudi:');
  }

  // Filtrer les éléments qui ont des heures d'ouverture le jeudi
  const placesWithThursdayOpening = places.filter((place) => {
    return hasThursdayOpeningHours(place.opening_hours);
  });

  // Afficher les éléments ayant des heures d'ouverture le jeudi
  // console.log(
  //   "Éléments avec des heures d'ouverture le jeudi soir :",
  //   placesWithThursdayOpening
  // );
  //console.log("comment est places", places);

  //const placesOpenNow = places.filter((place) => useOpenNowPlace(place));

  //Afficher les éléments ouverts en ce moment
  //console.log('Éléments ouverts en ce moment :', placesOpenNow);

  // test sur un lieu parce que c'est le bazard:
  //const test10 = useOpenPlace(places[8]);
  //console.log(places[8], 'test10', test10);
  const handleClick = (array) => {
    const filtered = array.filter((arrayElement) => useOpenNowPlace(arrayElement));
    setFilteredPlaces(filtered);
    console.log('FILTERED', filtered);
  };

  //console.log("FILTERD PLACES", filteredPlaces);
  return (
    <section>
      <h3 className="font-display text-4xl py-4">Où boire à Brest</h3>
      <h4>filtre</h4>
      <Button onClickAction={() => handleClick(places)}>ouvert</Button>
      <h4>trie</h4>
      <Button
      // onclick={filterRanking}
      >
        meilleure note
      </Button>
      <Button
      // onclick={filterRanking}
      >
        plus de votants
      </Button>
      <p>nombre : {filteredPlaces.length}</p>
      {filteredPlaces.map((place) => (
        <article className="text-secondaryHue" key={place.id}>
          <h4>{place.name}</h4>
          <p>{place.type}</p>
        </article>
      ))}
      {/* {test2.map((place) => (
        <article className="text-secondaryHue" key={place.id}>
          <h4>{place.name}</h4>
          <p>{place.type}</p>
        </article>
      ))}
      {test3.map((place) => (
        <article className="text-accent" key={place.id}>
          <h4>{place.name}</h4>
          <p>{place.type}</p>
        </article>
      ))}
      {test4.map((place) => (
        <article className="text-primaryHue" key={place.id}>
          <h4>{place.name}</h4>
          <p>{place.category}</p>
        </article>
      ))} */}
    </section>
  );
};

export default FilterSection;

// places.find((place) => place.id == id);
