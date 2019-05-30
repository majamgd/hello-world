

// var callback = function (data) {
//     // console.log(data);
//     data.forEach(function (item) {
//         console.log(item);
//     });
// };


function lista(){
    // $.get('https://jsonplaceholder.typicode.com/posts', callback);
    $.get('https://jsonplaceholder.typicode.com/posts', function (data) {
        // console.log(data);
        data.forEach(function (item) {
            console.log(item.title);
            

        });
    });
}

$(document).ready(lista);