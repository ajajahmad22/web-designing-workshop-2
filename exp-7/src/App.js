import React from "react";
import StudentCard from "./components/StudentCard";
import students from "./data/students";

function App() {
  return (
    <div style={styles.container}>
      <h1>Student Information</h1>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          marks={student.marks}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial",
  },
};

export default App;
