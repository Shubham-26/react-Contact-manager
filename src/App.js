import React, { useState } from 'react';

const mockWeatherData = {
  London: { temperature: '18°C', humidity: '60%', wind: '10 km/h' },
  Paris: { temperature: '21°C', humidity: '55%', wind: '12 km/h' },
  Delhi: { temperature: '35°C', humidity: '40%', wind: '20 km/h' },
  Tokyo: { temperature: '26°C', humidity: '70%', wind: '15 km/h' },
};

export default function WeatherDashboard() {
  const [searchInput, setSearchInput] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  const handleSearch = (cityName) => {
    const city = cityName || searchInput;
    if (mockWeatherData[city]) {
      setWeather({ city, ...mockWeatherData[city] });
      setError('');
      if (!history.includes(city)) setHistory([city, ...history]);
    } else {
      setWeather(null);
      setError('City not found.');
    }
    setSearchInput('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-xl font-bold mb-4 text-center">
        Weather Dashboard App
      </h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 rounded w-full"
          placeholder="Enter city name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {weather && (
        <div className="bg-gray-100 p-4 rounded mb-4 text-center">
          <h2 className="text-lg font-semibold mb-2">
            Weather in {weather.city}
          </h2>
          <p>Temperature: {weather.temperature}</p>
          <p>Humidity: {weather.humidity}</p>
          <p>Wind: {weather.wind}</p>
        </div>
      )}

      {history.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {history.map((city) => (
            <button
              key={city}
              onClick={() => handleSearch(city)}
              className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
