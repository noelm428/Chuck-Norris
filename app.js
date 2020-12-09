let currentImgIndex = 0;
let numOfImages = $('.Norris-images').children().length - 1;


//   $(".next").on("click",() => {
//    $('.Norris-images').children().eq(currentImgIndex).css('display','none')
//    if (currentImgIndex<numOfImages){
//       currentImgIndex++;
//    }
// else{
//   currentImgIndex=0
// }
//    $('.Norris-images').children().eq(currentImgIndex).css('display','block')
//
//   })

$('.previous').on('click', () => {
  $('.Norris-images').children().eq(currentImgIndex).css('display', 'none')
  if (currentImgIndex > 0) {
    currentImgIndex--;
  } else {
    currentImgIndex = numOfImages;
  }

  $('.Norris-images').children().eq(currentImgIndex).css('display', 'block')
  $.ajax({
    url: `http:api.icndb.com/jokes/random?exclude=[nerdy,explicit]?escape=javascripts`
  }).then(
    (data) => {
      console.log(data);
      $('#joke').html(data.value.joke)
    },
    (error) => {
      alert('YOUR LINKS BROKEN. *JUDO CHOP*')



    })


})
