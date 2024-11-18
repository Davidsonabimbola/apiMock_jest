async function getWeather(city) {
    if (!city) throw new Error('City is required');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const weatherDatabase = {
          London: { temp: 15, condition: 'Cloudy' },
          NewYork: { temp: 22, condition: 'Sunny' },
          Lagos: { temp: 37, condition: 'Sunny' },
          Berlin: { temp: 18, condition: 'Partial Cloudy' },
          Athens: { temp: 18, condition: 'Cloudy' },
        };
        if (weatherDatabase[city]) {
          resolve(weatherDatabase[city]);
        } else {
          reject(new Error('City not found'));
        }
      }, 400);
    });
  }
  
  module.exports = getWeather;
  