async function getData() {
  const response = await fetch('/api');
  const data = await response.json();
  console.log(data);



  for (item of data) {
    const root = document.createElement('div');
    const geo = document.createElement('div');
    const mood = document.createElement('div');
    const date = document.createElement('div');

    mood.textContent = "mood: " + item.mood;
    geo.textContent = "lat: " + item.lat + " lon: " + item.lon;


    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = "date: " + dateString;

    root.append(mood, geo, date);
    document.body.append(root);
  }


}
getData();