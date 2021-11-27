console.log('***** Music Collection *****')

let collection = [];

//Adding function name addToCollection

function addToCollection(title, artist, yearPublished) {
  let album = {
    Title: title,
    Artist: artist,
    year: yearPublished
  };
collection.push(album);
return album;
}

// Adding six albums.

console.log(addToCollection('Millennium', 'Backstreetboys', 1999));
console.log(addToCollection('Lucky Day', 'Shaggy', 2002));
console.log(addToCollection('The Marshall Mathers LP', 'Eminem', 2000));
console.log(addToCollection('Far From Close', 'Hinder', 2003));
console.log(addToCollection('Silver Side UP', 'Nickelback', 2001));
console.log(addToCollection('X & Y', 'Coldplay', 2005));

console.log(collection);

// Adding a function named showCollection.
function showCollection( array ) {
  console.log(array.length);
  for (let i = 0; i < array.length; i++){
    console.log(`${array[i].Title} by ${array[i].Artist}, published in ${array[i].year}`);
  }

}

//Testing  showCollection function.

showCollection( collection );

//Add function named findbyArtist
//Take in `artist` (a string) parameter
//Create an array to hold any results, empty to start
//Loop through the `collection` and add any objects with a matching artist to the array.
// Return the array with the matching results. If no results are found, return an empty array.
function findbyArtist(artistname, array){
  let results = [];
  for (let album of array) {
    console.log(artistname);
    if (artistname === album.Artist){
      results.push(album);
    }
  }
  return results;
}

//testing findbyArtist function.
console.log(findbyArtist( 'Backstreetboys', collection));
console.log(findbyArtist ('Eminem', collection));
console.log(findbyArtist('Coldplay', collection));
console.log(findbyArtist('Shaggy', collection));
console.log(findbyArtist('Hinder', collection));
console.log(findbyArtist('Nickelback', collection));
