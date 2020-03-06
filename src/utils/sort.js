/** *
  * This code returns a compare function to be used in a sort with object elements.
  * It validates that the elements to be sorted contains the property to be sorted.
  * For strings, the uppercase text is used for comparision.
  * @param  {string} key    Property to be sorted
  * @param  {string} order  asc/desc
  * @return {function}      Compare funtion that should be used in a sort method as parameter
*/

// eslint-disable-next-line import/prefer-default-export
export const sortTableValues = (key, order = 'asc') => (a, b) => {
  if (a[key] === undefined || b[key] === undefined) {
    return 0;
  }

  const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
  const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

  let comparison = 0;
  if (varA > varB) {
    comparison = 1;
  } else if (varA < varB) {
    comparison = -1;
  }
  return order === 'desc' ? comparison * -1 : comparison;
};
