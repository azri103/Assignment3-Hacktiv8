
    async function fetchDataAndUpdate(country) {
      const url = `https://covid-193.p.rapidapi.com/statistics?country=${country}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'aa4090bc1fmsh00d32f382748689p17bd9fjsnaf7e6500225e',
          'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        const obj = JSON.parse(result);
        const kasusAktif = obj.response[0].cases.active;

        document.getElementById('Active Case').textContent = `Active Case = ${kasusAktif}`;
        document.getElementById('New Case').textContent = `New Case = ${obj.response[0].cases.new}`;
        document.getElementById('Case Recovered').textContent = `Recovered Case = ${obj.response[0].cases.recovered}`;
        document.getElementById('Case Total').textContent = `Total Case = ${obj.response[0].cases.total}`;
        document.getElementById('Death Total').textContent = `Total Death = ${obj.response[0].deaths.total}`;
        document.getElementById('Test Total').textContent = `Total Test = ${obj.response[0].tests.total}`;
      } catch (error) {
        console.error(error);
      }
    }

    document.getElementById('searchForm').addEventListener('submit', function (event) {
      event.preventDefault(); 
      const countryInput = document.getElementById('negara').value;
      fetchDataAndUpdate(countryInput);
    });

    fetchDataAndUpdate('indonesia');

