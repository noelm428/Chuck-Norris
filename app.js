
let currentImgIndex = 0;
let numOfImages = $(".Norris-images").children().length - 1;
$(() => {
  const startBtn = $("<button class='start'>Start</button>")
    .click(() => {
      alert("Klickin' It With Chuck Norris is a random joke generator! Enjoy!");
      getJoke();
    })
    .prependTo($(".container"));
  const getJoke = () => {
    $.ajax({
      url: `https://api.icndb.com/jokes/random?exclude=[nerdy,explicit]?escape=javascript`,
      type: "GET",
    }).then(
      (data) => {
        // console.log(data);
        $("#joke").html(data.value.joke);
      },
      (error) => {
        alert("YOUR LINKS BROKEN. *JUDO CHOP*");
      }
    );
  };
  $(".next").on("click", () => {
    getJoke();
    $(".Norris-images").children().eq(currentImgIndex).css("display", "none");
    if (currentImgIndex < numOfImages) {
      currentImgIndex++;
    } else {
      currentImgIndex = 0;
    }
    $(".Norris-images").children().eq(currentImgIndex).css("display", "block");
  });
  $(".previous").on("click", () => {
    getJoke();
    $(".Norris-images").children().eq(currentImgIndex).css("display", "none");
    if (currentImgIndex > 0) {
      currentImgIndex--;
    } else {
      currentImgIndex = numOfImages;
    }
    $(".Norris-images").children().eq(currentImgIndex).css("display", "block");
  });
});
