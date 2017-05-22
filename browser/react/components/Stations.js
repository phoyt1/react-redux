import React from 'react';
import {Link} from 'react-router'


export default function Stations(props){
  const genreArr = Object.keys(props.stations);
  const genreObjArr = genreArr.map(element =>  ({
      name: element
    })
  );
  return (
   <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        genreObjArr.map(station => {
          return (
            <div className="list-group-item" key={station.name}>
              <Link to={`stations/${station.name}`}>{station.name}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  )
}
