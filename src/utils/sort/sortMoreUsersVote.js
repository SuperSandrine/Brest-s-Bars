export const moreUsersVote = (array) => {
  const copyArray = [...array];
  copyArray.sort((a, b) => b.user_ratings_total - a.user_ratings_total);
  return copyArray;
};
