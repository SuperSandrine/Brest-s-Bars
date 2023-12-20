export function hasThursdayOpeningHours(openingHours) {
  const parsedHours = JSON.parse(openingHours);
  // Vérifier si le jeudi a des heures d'ouverture spécifiées
  //console.log(parsedHours); // log un objet avec 6 index et des string à chaque index.
  //console.log('parsed hours', parsedHours.hasOwnProperty('3'));
  //console.log(
  //   'parsed hours 2',
  //   Object.prototype.hasOwnProperty.call(parsedHours, '3')
  // );

  if (parsedHours == null || parsedHours == undefined) {
    return false;
  } else if (
    Object.prototype.hasOwnProperty.call(parsedHours, '3') &&
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
