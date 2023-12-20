// Fonction pour vérifier si un lieu est ouvert en ce moment
export function openNowPlaces(place) {
  const currentDay = new Date().getDay(); // Jour actuel (0 pour dimanche, 1 pour lundi, etc.)
  const currentHour = new Date().getHours(); // Heure actuelle
  const currentMinutes = new Date().getMinutes(); // Minutes actuelles

  // Obtenez l'heure d'ouverture et de fermeture pour le jour actuel
  if (
    place.opening_hours == null ||
    place.opening_hours == 'null' ||
    !place.opening_hours
  ) {
    return false;
  } else if (place.opening_hours) {
    const openingHours = JSON.parse(place.opening_hours);
    const todayHours = openingHours[currentDay.toString() - 1];
    //let x = 0;
    //console.log("quelle jour", currentDay);
    //console.log('quelle heure', new Date());
    //console.log(x + 1, 'les data', openingHours);
    //console.log('les heure d"aujourd"hui', todayHours);
    //console.log('filtre fermé', todayHours);

    if (
      todayHours == null ||
      todayHours == undefined
      //|| todayHours == 'Fermé'
    ) {
      return false;
    } else if (todayHours.includes('24h/24')) {
      return true;
    } else {
      const [day, hours] = todayHours.split(': ');
      //console.log('filtre fermé', hours);
      if (hours == 'Fermé') {
        return false;
      } else {
        console.log('NOUVEAU BAR', day, hours, typeof hours);
        const hours3 = hours.split(/, | – /);
        if (hours3.length > 2) {
          //console.log('hours3', hours3.length);
          const openingHour1 = parseInt(hours3[0].split(':')[0]);
          const openingMinute1 = parseInt(hours3[0].split(':')[1]);
          const closingHour1 = parseInt(hours3[1].split(':')[0]);
          const closingMinute1 = parseInt(hours3[1].split(':')[1]);
          const openingHour2 = parseInt(hours3[2].split(':')[0]);
          const openingMinute2 = parseInt(hours3[2].split(':')[1]);
          const closingHour2 = parseInt(hours3[3].split(':')[0]);
          const closingMinute2 = parseInt(hours3[3].split(':')[1]);

          console.log(
            'ferme à ',
            closingHour1,
            closingMinute1,
            'et',
            closingHour2,
            closingMinute2
          );

          // const isAfterOpenings =
          //   currentHour > openingHour1 ||
          //   (currentHour === openingHour1 && currentMinutes >= openingMinute1);

          if (0 < closingHour2 <= 9) {
            console.log('***jysuis***');
            const changeClosingHour2 = closingHour2 + 24;
            console.log(changeClosingHour2);

            const isOpen =
              (currentHour > openingHour1 && currentHour < closingHour1) ||
              (currentHour > openingHour1 &&
                currentHour === closingHour1 &&
                currentMinutes <= closingMinute1) ||
              (currentHour === openingHour1 &&
                currentMinutes >= openingMinute1 &&
                currentHour < closingHour1) ||
              (currentHour > openingHour2 &&
                currentHour < changeClosingHour2) ||
              (currentHour > openingHour2 &&
                currentHour === changeClosingHour2 &&
                currentMinutes <= closingMinute2) ||
              (currentHour === openingHour2 &&
                currentMinutes >= openingMinute2 &&
                currentHour < changeClosingHour2);

            console.log('EST-il ouvert', isOpen);
            return isOpen;
          } else {
            const isOpen =
              (currentHour > openingHour1 && currentHour < closingHour1) ||
              (currentHour > openingHour1 &&
                currentHour === closingHour1 &&
                currentMinutes <= closingMinute1) ||
              (currentHour === openingHour1 &&
                currentMinutes >= openingMinute1 &&
                currentHour < closingHour1) ||
              (currentHour > openingHour2 && currentHour < closingHour2) ||
              (currentHour > openingHour2 &&
                currentHour === closingHour2 &&
                currentMinutes <= closingMinute2) ||
              (currentHour === openingHour2 &&
                currentMinutes >= openingMinute2 &&
                currentHour < closingHour2);
            return isOpen;
          }
        } else if (hours3.length <= 2) {
          //const hours2 = hours.split(' – ');
          const openingHour = parseInt(hours3[0].split(':')[0]);
          //console.log( "day", day, "hours", hours, "openingHour", openingHour);
          const openingMinute = parseInt(hours3[0].split(':')[1]);
          const closingHour = parseInt(hours3[1].split(':')[0]);
          const closingMinute = parseInt(hours3[1].split(':')[1]);
          // console.log(
          //   'FERMETURE : ',
          //   closingHour,
          //   'autres2',
          //   hours, //11:00 – 01:00
          //   'autres3',
          //   typeof closingHour, // string
          //   'autres4',
          //   hours3,
          //   'nom',
          //   place.name // un tableau avec 2 index et une chaine par index : ['10:30', '23:00']
          // );

          if (closingHour >= 0 && closingHour <= 9) {
            console.log('***jysuis***', closingHour);
            const changeClosingHour = closingHour + 24;
            //console.log(changeClosingHour);

            const isOpen =
              (currentHour > openingHour && currentHour < changeClosingHour) ||
              (currentHour > openingHour &&
                currentHour === changeClosingHour &&
                currentMinutes <= closingMinute) ||
              (currentHour === openingHour &&
                currentMinutes >= openingMinute &&
                currentHour < changeClosingHour);

            console.log('simple EST-il ouvert', isOpen);
            return isOpen;
          } else {
            const isOpen =
              (currentHour > openingHour && currentHour < closingHour) ||
              (currentHour > openingHour &&
                currentHour === closingHour &&
                currentMinutes <= closingMinute) ||
              (currentHour === openingHour &&
                currentMinutes >= openingMinute &&
                currentHour < closingHour);

            console.log('simple EST-il ouvert', isOpen);
            return isOpen;

            // Vérifiez si l'établissement est ouvert à l'instant
            // if (
            //   (currentHour > openingHour ||
            //     (currentHour === openingHour && currentMinutes >= openingMinute)) &&
            //   (currentHour < closingHour ||
            //     (currentHour === closingHour && currentMinutes < closingMinute))
            // ) {
            //   return true;
            // }
            // const isAfterOpening =
            //   currentHour > openingHour ||
            //   (currentHour === openingHour && currentMinutes >= openingMinute);
            // // console.log(
            // //   'currentHour',
            // //   currentHour,
            // //   'openingHour',
            // //   openingHour,
            // //   'isafteropening',
            // //   isAfterOpening
            // // );
            // const isBeforeClosing =
            //   currentHour < closingHour ||
            //   (currentHour === closingHour && currentMinutes < closingMinute);

            // console.log(
            //   'opening hours',
            //   todayHours, //chaine "samedi: 00:00 - 00-99"
            //   'current Hour',
            //   currentHour, //number 11
            //   place.name, // chaine "le remorkeur"
            //   'closing hour',
            //   closingHour, //0
            //   'isBeforeCLosing',
            //   isBeforeClosing //false
            // );

            // if (isAfterOpening && isBeforeClosing) {
            //   console.log('je renvoie');
            //   return true;
            // } else {
            //   return false;
            // }
          }
        }
      }
    }
  }

  //return false; // Retourne false si le lieu n'est pas ouvert à l'instant
}
//return false;

// Filtrer les éléments qui sont ouverts en ce moment
//const placesOpenNow = places.filter(place => isOpenNow(place));

// Afficher les éléments ouverts en ce moment
//console.log("Éléments ouverts en ce moment :", placesOpenNow);
