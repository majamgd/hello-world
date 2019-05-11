const movies = [
    { title : "a", year: 2018, rating: 4.5},
    { title : "b", year: 2018, rating: 4.7},
    { title : "c", year: 2018, rating: 3},
    { title : "d", year: 2017, rating: 4.5},
];
let izfiltrirano = movies
    .filter((item) => {
        return item.year === 2018 && item.rating > 4;
    })
    .sort((a,b) => {
        return b.rating - a.rating;
    })
    .map((item) => {
        return item.title;
    })



;
console.log(izfiltrirano);
