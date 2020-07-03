if ('geolocation' in navigator) {
  console.log('geolocation avaiable');

  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    document.getElementById('latitude').innerHTML = lat;
    document.getElementById('longitude').innerHTML = lon;

    // document.getElementById('input').addEventListener('change', () => {
    //   text = document.getElementById('input').value;
    // })


    document.getElementById('submit').addEventListener('click', async () => {
      mood = document.getElementById('input').value;
      let data = {
        lat,
        lon,
        mood
      }

      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
      }

      const response = await fetch('/api', options);
      const json = await response.json();
      console.log(json);

    })
    // const response = await fetch('/api', options);
    // const json = await response.json();
    // console.log(json);


  });
} else {
  console.log('geolocation not avaiable');
}