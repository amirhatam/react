const clientId = "KUzY-BCgRUgnhx7Y-TI9EXsr3Oq6HStenfHd9zNZIGk";


fetch(
  "http://api.unsplash.com/search/photos?page=1&query=france&client_id=" + clientId
)
  .then((response) => response.json())
  .then((result) => {
    console.log("handle result :", result);
    // console.log("result photo urls :", result.results[0].urls.full);

    
  })
  .catch((err) => console.log(err));
