import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

function Profile() {
  const { missions } = useSelector((store) => store.missions);
  const rockets = useSelector((store) => store.rockets);
  const filteredMissions = missions.filter((mission) => mission.reserved === true);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <main>
      <div className="main-container">
        <div className="missions">
          <h3 className="rocket-main">my rockets</h3>
          <ul>
            { filteredRockets.map((rocket) => {
              const rocketId = rocket.id;
              return <li key={rocketId}>{rocket.name}</li>;
            }) }
          </ul>
        </div>
        <div className="missions">
          <h3 className="mission-main">my missions</h3>
          <ul>
            { filteredMissions.map((mission) => {
              const id = mission.mission_id;
              const name = mission.mission_name;
              return <li key={id}>{name}</li>;
            }) }
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Profile;
