import React from "react";

function StudentCard({ name, course, marks }) {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Marks: {marks}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "#f9f9f9",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "10px",
    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
  },
};

export default StudentCard;