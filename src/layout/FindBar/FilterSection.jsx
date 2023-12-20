import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { openNowPlaces } from '../../utils/filter/openNowPlacesFilter';
import { MapDataToManipulateContext, usePlaces } from './MapContext';
import { hasThursdayOpeningHours } from '../../utils/filter/hasThursdayOpeningHours';
import { bestRates } from '../../utils/sort/sortBestRate';
import { moreUsersVote } from '../../utils/sort/sortMoreUsersVote';

const FilterSection = () => {
  const places2 = usePlaces();
  //console.log("places dans filter", places2);
  //const places = props.array;
  //const [filteredPlaces, setFilteredPlaces] = useState(places2);

  const { data, updateDataContext } = useContext(MapDataToManipulateContext);
  //console.log("data dans filter", data);

  //  console.log('le contexte dans filter', data, updateData);
  //const newData = 'hello';
  //updateDataContext(newData);
  //console.log('le contexte dans filter 2', data);

  //setFilteredPlaces(places);
  //console.log('dans filter', props.array);
  //console.log('dans filter 2', places2);
  //console.log('dans filter 3', filteredPlaces);

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
  // const bestRates = (array) => {
  //   const copyArray = [...array];
  //   copyArray.sort((a, b) => Number(b.rating) - Number(a.rating));
  //   return copyArray;
  // };
  //console.log('bestRates', bestRates(places));

  //console.log('avreage bestmarktest6', test6);

  // const moreUsersVote = (array) => {
  //   const copyArray = [...array];
  //   places.sort((a, b) => b.user_ratings_total - a.user_ratings_total);
  //   return copyArray;
  // };
  //console.log('moreUsersVotes', moreUsersVote(places));

  // function hasThursdayOpeningHours(openingHours) {
  //   const parsedHours = JSON.parse(openingHours);
  //   // Vérifier si le jeudi a des heures d'ouverture spécifiées
  //   //console.log(parsedHours); // log un objet avec 6 index et des string à chaque index.
  //   if (parsedHours == null) {
  //     return false;
  //   } else if (
  //     parsedHours.hasOwnProperty('3') &&
  //     parsedHours['3'].includes('jeudi:')
  //   ) {
  //     const thursdayHours = parsedHours['3'];
  //     //console.log("jeudi", thursdayHours);

  //     // Vérifier si le jeudi ferme après 1:00 (01:00)
  //     const closingTime = thursdayHours.split('jeudi: ')[1];
  //     //console.log("jeudi", closingTime);
  //     if (closingTime == 'Fermé') {
  //       return false;
  //     } else if (closingTime.includes('24h/24')) {
  //       return true;
  //     } else {
  //       //const closingHour = parseInt(closingTime.split(' – ')[1].split(':')[0]);
  //       //console.log('jeudi closing time', closingTime, 'jeudi closingHour', closingHour);
  //       const closingHourRaw = closingTime.split(' – ')[1].trim();
  //       const closingHourSubstring = closingHourRaw.slice(-5);
  //       const closingHourF = parseInt(closingHourSubstring.split(':')[0]);
  //       //console.log('jeudi closing time', closingTime, 'jeudi closingHourRaw', closingHourRaw, 'closingHour', closingHourF)
  //       //console.log('jeudi closing time', closingTime, 'closingHour', closingHourF < 9)

  //       //return closingHour > 1;
  //       return closingHourF < 9;
  //     }
  //   }

  //   //return false; // Retourne false si le jeudi n'a pas d'heures d'ouverture spécifiées

  //   // return parsedHours.hasOwnProperty('3') && parsedHours['3'].includes('jeudi:');
  // }

  //console.log("comment est places", places);

  //const placesOpenNow = places.filter((place) => useOpenNowPlace(place));

  //Afficher les éléments ouverts en ce moment
  //console.log('Éléments ouverts en ce moment :', placesOpenNow);

  // test sur un lieu parce que c'est le bazard:
  //const test10 = useOpenPlace(places[8]);
  //console.log(places[8], 'test10', test10);
  const handleClickOnOpen = (array) => {
    const test = array.filter((arrayElement) => openNowPlaces(arrayElement));
    //setFilteredPlaces(filtered);
    //console.log('FILTERED', filtered);
    updateDataContext(test);
  };

  // Filtrer les éléments qui ont des heures d'ouverture le jeudi
  // const placesWithThursdayOpening = places2.filter((place) => {
  //   return hasThursdayOpeningHours(place.opening_hours);
  // });
  // // Afficher les éléments ayant des heures d'ouverture le jeudi
  // console.log(
  //   "Éléments avec des heures d'ouverture le jeudi soir :",
  //   placesWithThursdayOpening
  // ); // 44

  const handleClickOnJeudredi = (array) => {
    const filtered = array.filter((arrayElement) =>
      hasThursdayOpeningHours(arrayElement.opening_hours)
    );
    updateDataContext(filtered);
  };

  const handleClickOnMondayMorning = (array) => {};

  const handleClickOnBestRates = (array) => {
    const sorted = bestRates(array);
    updateDataContext(sorted);
  };
  const handleClickOnMoreUsersVote = (array) => {
    const sorted = moreUsersVote(array);
    updateDataContext(sorted);
  };

  //const testD = data ? data : places2; // attention cumule les champs de recherche
  const testD = places2;
  const testDToSort = data ? data : places2;

  return (
    <>
      <section>
        <h3>Où boire à Brest :</h3>
        <h4>Filtre</h4>
        <div className="flex flex-wrap justify-evenly gap-4">
          <Button onClickAction={() => handleClickOnOpen(testD)}>Ouvert</Button>
          <Button onClickAction={() => handleClickOnJeudredi(testD)}>
            Jeudredi
          </Button>
          {/* <Button
          //onClickAction={}
          >
            Du lundi matin ?
          </Button> */}
        </div>
      </section>

      <section>
        <h4>Tri</h4>
        <div className="flex flex-wrap justify-evenly gap-4">
          <Button onClickAction={() => handleClickOnBestRates(testDToSort)}>
            meilleure note
          </Button>
          <Button onClickAction={() => handleClickOnMoreUsersVote(testDToSort)}>
            plus de votants
          </Button>
        </div>
        <p>nombre : {testDToSort.length}</p>
        {/*{testD.map((place) => (
          <article className="text-secondaryHue" key={place.id}>
            <h4>{place.name}</h4>
            <p>{place.type}</p>
          </article>
        ))} */}
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
    </>
  );
};

export default FilterSection;

// places.find((place) => place.id == id);
