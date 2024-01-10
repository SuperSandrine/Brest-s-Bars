
  // const closestPlace =()=>{// Supposons que 'places' soit le tableau contenant vos éléments

  //   // Coordonnées de votre position actuelle
  //   const userLatitude = 48.85341; // Exemple : latitude
  //   const userLongitude = 2.3488; // Exemple : longitude
    
  //   // Supposons que 'places' soit un tableau d'objets avec des coordonnées
  //   const places = [
  //       { name: 'Place 1', location: { latitude: 48.8575, longitude: 2.2983 } },
  //       { name: 'Place 2', location: { latitude: 48.8667, longitude: 2.3333 } },
  //       { name: 'Place 3', location: { latitude: 48.8600, longitude: 2.3376 } },
  //       // ... autres éléments
  //   ]; // Remplacez ceci par votre tableau
    
  //   // Fonction pour calculer la distance entre deux points géographiques
  //   function distance(lat1, lon1, lat2, lon2) {
  //       const dx = lat2 - lat1;
  //       const dy = lon2 - lon1;
  //       return Math.sqrt(dx * dx + dy * dy);
  //   }
    
  //   // Calculer les distances entre votre position et chaque lieu
  //   places.forEach(place => {
  //       const distanceToPlace = distance(
  //           userLatitude,
  //           userLongitude,
  //           place.location.latitude,
  //           place.location.longitude
  //       );
  //       place.distance = distanceToPlace; // Ajouter la distance à l'objet place
  //   });
    
  //   // Trier les lieux en fonction de leur distance par rapport à votre position
  //   places.sort((a, b) => a.distance - b.distance);
    
  //   // Afficher l'élément le plus proche (le premier élément du tableau trié)
  //   const plusProche = places[0];
  //   console.log("Élément le plus proche :", plusProche);
  // }

  // trouver la géolocalisation: 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    console.log("La géolocalisation n'est pas supportée par votre navigateur");
  }
  
  function successCallback(position) {
    const userLatitude = position.coords.latitude;
    const userLongitude = position.coords.longitude;
  
    // Utilisez userLatitude et userLongitude pour effectuer des opérations basées sur la localisation de l'utilisateur
    console.log("Latitude :", userLatitude);
    console.log("Longitude :", userLongitude);
  }
  
  function errorCallback(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("L'utilisateur a refusé la demande de géolocalisation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Les informations de localisation ne sont pas disponibles.");
        break;
      case error.TIMEOUT:
        console.log("La demande de géolocalisation a expiré.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("Une erreur inconnue est survenue lors de la géolocalisation.");
        break;
    }
  }
  