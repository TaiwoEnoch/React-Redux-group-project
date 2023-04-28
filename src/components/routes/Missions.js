/** ****************************************
 * Project: react-redux-group-project
 * File: Missions.js
 * Created: 4/24/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { useSelector, useDispatch } from 'react-redux';
import { React } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { joinMission, leaveMission } from '../redux/features/missions/missionsSlice';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr className="table-success">
              <th scope="col">Missions</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th aria-label="none" />
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                {mission.reserved && (
                  <>
                    <td className="align-middle">
                      <Button variant="info" size="sm" className="not-member text-white">
                        <strong>ACTIVE MEMBER</strong>
                      </Button>
                    </td>
                    <td className="align-middle">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="join-mission"
                        onClick={() => dispatch(leaveMission(mission.mission_id))}
                      >
                        Leave Mission
                      </Button>
                    </td>
                  </>
                )}
                {!mission.reserved && (
                  <>
                    <td className="align-middle">
                      <Button variant="secondary" size="sm" className="not-member">
                        NOT A MEMBER
                      </Button>
                    </td>
                    <td className="align-middle">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="join-mission"
                        onClick={() => dispatch(joinMission(mission.mission_id))}
                      >
                        Join Mission
                      </Button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Missions;
