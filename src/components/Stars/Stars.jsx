export const getStarRating = (rating) => {
  const fullStars = Math.floor(rating); // Nombre d'étoiles pleines (arrondi)
  const halfStar = rating % 1; // Vérifie s'il y a une demi-étoile
  //console.log("halfstar qu'ai je", halfStar);

  const stars = [];
  // Ajoute les étoiles pleines
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i}>&#9733;</span>); // &#9733; est le code HTML pour une étoile pleine (étoile dorée: &#x2B50)
  }

  // Ajoute la demi-étoile si nécessaire
  // if (halfStar) {
  //   stars.push(<span className="half-star" key="half">&#9734;</span>); // &#xf123; est le code HTML pour une demi-étoile
  // }

  if (halfStar >= 0.8) {
    stars.push(<span key={stars.length + 1}>&#9733;</span>); // Ajoute une étoile pleine
  } else if (halfStar >= 0.3) {
    stars.push(
      <span className="half-star" key="half">
        &#9734;
      </span>
    );
  } else {
    stars.push(<span key={stars.length + 1}>&#9734;</span>);
  }

  // Si le rating est un nombre entier, ajoute les étoiles vides pour compléter jusqu'à 5 étoiles
  const remainingStars = 5 - stars.length;
  //const remainingStars = 5 - fullStars - (halfStar ? 1 : 0);
  //console.log('quelle remain', remainingStars);

  for (let i = 0; i < remainingStars; i++) {
    stars.push(<span key={i + stars.length + 1}>&#9734;</span>); // &#9734; est le code HTML pour une étoile vide
  }

  return stars;
};
