//When a user loads the mood boost page they will be presented with 6 catagory cards of moods
//the moods are Happy, sad, mad, worried , suprised, annoyed
    //We need to do a http request in the gifphy api for each mood and set as random
    //Son will work on getting the request for each mood up
    //Ebony will set up 4 pages 
//once the user clicks the card that best represents their current mood the next page will load with 6 more cards 
//The 6 cards are animals, movies, memes, cars, sports, cartoons. 
//once again the user will choose a card they are most interested in then new page will load
//last 6 cards will load of types of music and the user will choose their favorite
//after all three page choices are made the the 4th page will load a gif that reflects the mood card chosen, a joke from the theme cards, 
//a song that is from the genre of music chosen and a choice of starting over 

//Event listener for the happy div
$("#happy").on("click", function() {
    
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=C61pEa5tz5rNFikLi5NwR6zchVsQVN1j&tag=happy";

    $.ajax({

        url: queryURL,
        method: "GET",

    })

    .then(function(happyData) {
        console.log(happyData);
        var imageUrl = happyData.data.image_original_url;

        var happyImage = $("<img>");
        
        happyImage.attr("src", imageUrl);

        happyImage.attr("alt", "Happy Gif");

        $("#happygif").append(happyImage);
          
        (function(store){
       
            
        var happyObject_stringify = JSON.stringify(happyImage);
        console.log(happyObject_stringify);
    
        localStorage.setItem("happygif", happyObject_stringify);
        console.log(localStorage); 
        
        console.log(store)
    
        }
        
    
    )
        });
});

    


