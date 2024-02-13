import { useState, useEffect } from "react";
import "./App.css";
import { getPlayers, getPlayer } from "./api";

function App() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});

  useEffect(() => {
    getPlayers().then((players) => {
      setPlayers(players);
    });
  }, []);

  function handlePlayerClick(playerId) {
    getPlayer(playerId).then(setPlayer);
  }

  return (
    <>
      <h1>Puppy Bowl</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => {
            return (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.breed}</td>
                <td>{player.status}</td>
                <td>
                  <button onClick={() => handlePlayerClick(player.id)}>
                    View Player
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <dialog open={player.id}>{player.name}</dialog>
    </>
  );
}

export default App;
