$(() => {

  $.ajax({
    url:` https://ghibliapi.herokuapp.com/films`,
    type: 'Get',
    // data:

  }).then(
          (data) => {
            console.log(data);

  },
  (error) => {
    console.log('bad request');
  })
})
