const express = require("express");
const cors = require("cors");
const prisma = require("./prisma");

const app = express();

app.use(cors());
app.use(express.json());

// Get all students
app.get("/students", async (req, res) => {
  const students = await prisma.student.findMany();
  res.json(students);
});

// Add student
app.post("/students", async (req, res) => {
  const student = await prisma.student.create({
    data: req.body,
  });
  res.json(student);
});

// Update student
app.put("/students/:id", async (req, res) => {
  const student = await prisma.student.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(student);
});

// Delete student
app.delete("/students/:id", async (req, res) => {
  await prisma.student.delete({
    where: { id: Number(req.params.id) },
  });
  res.json({ message: "Student deleted successfully" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});