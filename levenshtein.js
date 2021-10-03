/**
 * Calculates Levenshtein distance.
 *
 *
 * @param {string} str1 First String to compare
 * @param {string} str2 Second String to compare
 * @returns
 */

const levenshteinDistance = (str1 = "", str2 = "") => {
  if (str1.length === 0) return str2.length;
  if (str2.length === 0) return str1.length;

  // Set up matrix
  const matrix = Array(str2.length + 1)
    .fill(null)
    .map(() => Array(str1.length + 1).fill(null));

  // Increment top row
  for (let i = 0; i <= str1.length; i += 1) {
    matrix[0][i] = i;
  }

  // Increment column
  for (let j = 0; j <= str2.length; j += 1) {
    matrix[j][0] = j;
  }

  // i = cols; j = rows
  for (let i = 1; i <= str2.length; i += 1) {
    for (let j = 1; j <= str1.length; j += 1) {
      if (str1.charAt(i) === str2.charAt(j)) {
        // Top Case - a_i === b_j
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        // Bottom Case - a_i !== b_j
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1, // deletion
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j - 1] + 1 // substitution
        );
      }
    }
  }

  return matrix[str2.length][str1.length];
};

module.exports = {
  levenshteinDistance,
};
