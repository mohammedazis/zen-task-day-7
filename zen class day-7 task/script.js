var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);

      // Get all the countries from the Asia continent/region using the Filter function
      var asiaCountries = response.filter(function (country) {
        return country.region === "Asia";
      });
      console.log("Asia Countries:");
      console.log(asiaCountries);

      // Get all the countries with a population of less than 2 lakhs using the Filter function
      var countriesWithLowPopulation = response.filter(function (country) {
        return country.population < 200000;
      });
      console.log("Countries with Population Less than 2 Lakhs:");
      console.log(countriesWithLowPopulation);

      // Print the following details: name, capital, flag using the forEach function
      console.log("Details: name, capital, flag");
      response.forEach(function (country) {
        console.log("Name:", country.name.common);
        console.log("Capital:", country.capital);
        console.log("Flag:", country.flags.svg);
        console.log("--------------------");
      });

      // Print the total population of countries using the reduce function
      var totalPopulation = response.reduce(function (accumulator, country) {
        return accumulator + country.population;
      }, 0);
      console.log("Total Population:", totalPopulation);

      // Print the country which uses US Dollars as currency
      var usDollarCountry = response.find(function (country) {
        return country.currencies.USD !== undefined;
      });
      console.log("Country using US Dollars as currency:");
      console.log(usDollarCountry);
    } else {
      console.log("Request failed with status code: " + xhr.status);
    }
  }
};
