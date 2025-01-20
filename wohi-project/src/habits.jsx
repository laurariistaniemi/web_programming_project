import React, { useState, useEffect } from 'react';
import { createPixel, getGraphStats } from './pixelaApi'; 
import PixelaGraphEmbed from './pixelaGraph'; 
import 'bootstrap/dist/css/bootstrap.css'


function Habit() {
  const [quantity, setQuantity] = useState('');
  const [graphStats, setGraphStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const stats = await getGraphStats();
      setGraphStats(stats);
    };
    fetchStats();
  }, []);

  const handleAddPixel = async () => {
    const date = new Date().toISOString().split('T')[0].replace(/-/g, ''); 
    const response = await createPixel(date, quantity); 
    if (response) {
      alert("Pixel added successfully!");
      setQuantity(''); 
      const stats = await getGraphStats();
      setGraphStats(stats);
    }
  };

  return (
    <div className="App">
      <h1>Pixela Tracker</h1>
      
      <input
      className="form-control"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Enter quantity"
      />
      <button className="btn btn-primary" onClick={handleAddPixel}>Add Pixel</button>

      {graphStats && (
        <div>
          <h2>Graph Stats</h2>
          <pre>{JSON.stringify(graphStats, null, 2)}</pre>
        </div>
      )}

      <PixelaGraphEmbed />
    </div>
  );
}

export default Habit;
