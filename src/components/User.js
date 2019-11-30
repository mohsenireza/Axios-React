import React from "react";

const User = ({ user }) => {
  return (
    <div style={styles.container}>
      <span>Id => {user.id}</span>
      <span>Email => {user.email}</span>
      <span>Firstname => {user.first_name}</span>
      <span>Lastname => {user.last_name}</span>
      <img src={user.avatar} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    borderRadius: "5px",
    border: "1px solid pink",
    width: "500px"
  }
};

export default User;
