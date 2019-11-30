import React, { useState } from "react";
import User from "./components/User";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const renderUsers = () => {
    if (!users.length) return <h1>No Users right now...</h1>;
    return users.map(user => <User user={user} key={user.id} />);
  };

  // axios default parameters
  axios.defaults.baseURL = "https://reqres.in/";

  const getUser = () => {
    const options = {
      headers: {
        token: "Bearer something..."
      }
    };

    axios
      .get("api/users?page=1", options)
      .then(res => {
        console.log(res);
        setUsers(res.data.data);
      })
      .catch(error => console.log(error));
  };

  const postUser = () => {
    const data = {
      name: "Reza",
      job: "Developer"
    };

    axios
      .post("api/users", data)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };

  return (
    <div className="App">
      <button onClick={getUser}>Get User</button>
      <button onClick={postUser}>Post User</button>
      {renderUsers()}
    </div>
  );
}

export default App;
