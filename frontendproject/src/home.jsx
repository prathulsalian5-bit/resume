import { useState, useEffect } from "react";

function Resume() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const studentData = {
      name: "Prathul",
      age: 20,
      phone: "9902627575",
      email: "prathul5@gmail.com",
      skills: ["JavaScript", "React", "HTML", "CSS"],
      education: "Bachelor of Computer Application(BCA)",
      experience: "Fresher"
    };

    setStudent(studentData);
  }, []);

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Resume</h1>

      <h2>{student.name}</h2>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>Email:</strong> {student.email}</p>

      <h3>Education</h3>
      <p>{student.education}</p>

      <h3>Skills</h3>
      <ul>
        {student.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Experience</h3>
      <p>{student.experience}</p>
    </div>
  );
}

export default Resume;