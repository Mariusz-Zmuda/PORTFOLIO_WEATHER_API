class Fetch {
  async getCurrent(input) {
    const myKey = "53c5ab8998f10ee7b2518234e444ff22";

    //make a request to url, I use my key from: https://home.openweathermap.org/api_keys

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
    );

    // input -> calls that fetch for example 'London'
    // then store whatever fetch method returns as a response, then grab the data from the json, return the data which we can use later in the app

    const data = await response.json();

    console.log(data);

    return data;
  }
}

