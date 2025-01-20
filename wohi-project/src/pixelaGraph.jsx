
import React from 'react';

//embedded graph from pixela
const PixelaGraphEmbed = () => {
  return (
    <><div className='refreshbtn'>
      <button id="refresh" className="btn btn-primary">Refresh Graph (not functional)</button>
    </div>
    <div className='graph'>
        <h2>My Pixela Graph</h2>

        <iframe
          src="https://pixe.la/v1/users/voinappipuurossa/graphs/test-graph.html"
          width="1000"
          height="800"
          title="Pixela Graph" />

      </div></>
  );
};


export default PixelaGraphEmbed;
