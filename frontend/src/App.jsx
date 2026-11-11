
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:5000/students");
    const data = await response.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const saveStudent = async (e) => {
    e.preventDefault();

    const studentData = { name, email, course };

    if (editId) {
      await fetch(`http://localhost:5000/students/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData),
      });
    } else {
      await fetch("http://localhost:5000/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData),
      });
    }

    clearForm();
    fetchStudents();
  };

  const editStudent = (student) => {
    setEditId(student.id);
    setName(student.name);
    setEmail(student.email);
    setCourse(student.course);
  };

  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await fetch(`http://localhost:5000/students/${id}`, {
        method: "DELETE",
      });

      fetchStudents();
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setCourse("");
    setEditId(null);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Student Information System</h1>

      <form onSubmit={saveStudent} className="form-card">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />

        <button type="submit">
          {editId ? "Update Student" : "Add Student"}
        </button>

        {editId && (
          <button type="button" onClick={clearForm}>
            Cancel
          </button>
        )}
      </form>

      <h2>Student List</h2>

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredStudents.map((student) => (
        <div key={student.id} className="student-card">
          <p>
            {student.name} - {student.email} - {student.course}
          </p>

          <button onClick={() => editStudent(student)}>
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => deleteStudent(student.id)}
          >
            Delete
          </button>
        </div>
      ))}

      {filteredStudents.length === 0 && (
        <p>No students found.</p>
      )}
    </div>
  );
}

export default App;
