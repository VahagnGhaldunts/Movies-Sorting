const movies = [
    {movieName: "Barbie", rating: 4.5, genre: "Comedy", views: 1.500000},
    {movieName: "Interstellar", rating: 3, genre: "Fantastic", views: 4.500000},
    {movieName: "The Godfather", rating: 9.77, genre: "Comaime", views: 12.000000}
  ];

// Function to sort movies by a specific criterion using a for loop
function sortByCriterion(movies, criterion) {
  for (let i = 0; i < movies.length - 1; i++) {
      for (let j = i + 1; j < movies.length; j++) {
          if (criterion === "genre" || criterion === "movieName") {
              // For genre and name, sort alphabetically
              if (movies[i][criterion] > movies[j][criterion]) {
                  let temp = movies[i];
                  movies[i] = movies[j];
                  movies[j] = temp;
              }
          } else {
              // For rating and views, sort from large to small
              if (movies[i][criterion] < movies[j][criterion]) {
                  let temp = movies[i];
                  movies[i] = movies[j];
                  movies[j] = temp;
              }
          }
      }
  }
}

// Sorting by Movie Name (alphabetically):
// The goal is to arrange the movies in alphabetical order based on their names.
// The function sortByCriterion compares the names of each pair of movies in the array.
// If the name of the current movie (movies[i].name) is greater than the name of the next movie (movies[j].name), it swaps them. This process is repeated for all pairs until the array is sorted alphabetically by movie name.
sortByCriterion(movies, "movieName");
console.log("Sorted by Movie Name:", movies);

// Sorting by Rating (from large to small):
// The aim is to arrange the movies in descending order based on their ratings.
// The function sortByCriterion compares the ratings of each pair of movies in the array.
// If the rating of the current movie (movies[i].rating) is less than the rating of the next movie (movies[j].rating), it swaps them. This process is repeated for all pairs until the array is sorted in descending order by rating.
sortByCriterion(movies, "rating");
console.log("Sorted by Rating (from large to small):", movies);

// Sorting by Genre (alphabetically):
// The objective is to arrange the movies in alphabetical order based on their genres.
// The function sortByCriterion compares the genres of each pair of movies in the array.
// If the genre of the current movie (movies[i].genre) is greater than the genre of the next movie (movies[j].genre), it swaps them. This process is repeated for all pairs until the array is sorted alphabetically by genre.
sortByCriterion(movies, "genre");
console.log("Sorted by Genre (alphabetically):", movies);

// Sorting by Number of Views (from large to small):
// The goal is to arrange the movies in descending order based on the number of views.
// The function sortByCriterion compares the number of views of each pair of movies in the array.
// If the number of views of the current movie (movies[i].views) is less than the number of views of the next movie (movies[j].views), it swaps them. This process is repeated for all pairs until the array is sorted in descending order by the number of views.
sortByCriterion(movies, "views");
console.log("Sorted by Number of Views (from large to small):", movies);

