
# Student Information System

## Project Description

The Student Information System is a simple web application that allows users to manage student records. Users can add, view, edit, delete, and search student information.

## Technologies Used

- React.js – Frontend
- Express.js – Backend
- Prisma ORM v6 – Database management
- MySQL – Database
- Node.js – JavaScript runtime

## Database Configuration

The application uses a MySQL database named `student_db`.

Configure the database connection in `backend/.env`:

```env
DATABASE_URL="mysql://root:YOUR_PASSWORD@localhost:3306/student_db"
```

Replace `YOUR_PASSWORD` with your own MySQL password. Do not upload your actual database password to GitHub.

## Installation and Setup

### 1. Install Backend Dependencies

Open a terminal in the project folder and run:

```bash
cd backend
npm install
```

### 2. Configure the Database

Create a MySQL database named `student_db` and configure the `DATABASE_URL` in `backend/.env`.

### 3. Run Database Migration

Inside the backend folder, run:

```bash
npx prisma migrate dev
npx prisma generate
```

### 4. Start the Backend

```bash
node server.js
```

The backend runs at:

`http://localhost:5000`

### 5. Install Frontend Dependencies

Open another terminal in the project root and run:

```bash
cd frontend
npm install
```

### 6. Start the Frontend

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

`http://localhost:5173`

## Application Features

- Add Student
- View Student Records
- Edit Student Information
- Delete Student Records
- Search Students by Name or Email

## Database Operations (CRUD)

- Create – Add new student records.
- Read – Retrieve and display student records.
- Update – Modify existing student information.
- Delete – Remove student records from the database.

## Developer

Student Information System

Integrative Programming and Technologies II

## Project Status

The Student Management System is a working CRUD application. Student records are stored in a MySQL database using Prisma ORM.
