import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import './App.css';

function WeatherDashboard() {
  // TODO: Insert Ceres data here
  // Example placeholders:
  const ceresData = {
    temperature: '−105°C', // Replace with actual data
    condition: 'Thin Haze', // Replace with actual data
    sunlight: 'Dim', // Replace with actual data
    time: 'Sol 123, 4:00', // Replace with actual data
  };

  return (
    <div className="weather-dashboard">
      <AnimatedBackground condition={ceresData.condition} />
      <div className="weather-main">
        <h1>Ceres Weather</h1>
        <div className="weather-info">
          <div className="temperature">{ceresData.temperature}</div>
          <div className="condition">{ceresData.condition}</div>
          <div className="sunlight">Sunlight: {ceresData.sunlight}</div>
          <div className="time">{ceresData.time}</div>
        </div>
      </div>
      {/* TODO: Add Forecast component here */}
    </div>
  );
}

export default WeatherDashboard;
