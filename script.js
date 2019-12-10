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





var moodObject = JSON.parse(localStorage.getItem("moodObject"));

if (moodObject === null) {
    moodObject={};
}

//Event listener for the happy div
$(".mood").on("click", function() {
    console.log("click");
    var mood = $(this).attr("id");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=C61pEa5tz5rNFikLi5NwR6zchVsQVN1j&tag=" + mood;

    $.ajax({

        url: queryURL,
        method: "GET",

    })

    .then(function(happyData) {
        console.log(happyData);
        moodObject.gifurl = happyData.data.image_original_url;

       localStorage.setItem("moodObject", JSON.stringify(moodObject));
    
      

    //     $("#total").attr(totalObject);

       window.location.href = 'themes.html';
  
        });
});
//this is the code that activates the function when the user clicks a theme to retrive a joke from
$(".theme").on("click", function() {

// ////below please add ajax from the joke api below
moodObject.joke = "here's a joke"

// ///this is the code that saves the joke theme choosen by user in local storage
   localStorage.setItem("moodObject", JSON.stringify(moodObject));
    
// ///this is the code that moves the user to the following page
    window.location.href = 'music.html';
})


  
  $(".music").on("click", function() {

    moodObject.music = "here's a song";

    localStorage.setItem("moodObject", JSON.stringify(moodObject));

    window.location.href = "finalpage.html"
  })

  if (window.location.pathname === "/finalpage.html") {
      console.log("we are on the final page");
      console.log(moodObject);


      $("#gif").attr("src", moodObject.gifurl)

      $("#joke").text(moodObject.joke)

      $("#music").text(moodObject.music)

  }
console.log(window.location.pathname);



    


