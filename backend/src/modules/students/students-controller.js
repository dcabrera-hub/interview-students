const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    try {
        const students = await getAllStudents(req.query);
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const handleAddStudent = asyncHandler(async (req, res) => {
    try {
        const student = await addNewStudent(req.body);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    try {
        const student = await updateStudent(req.body);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    try {
        const student = await getStudentDetail(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    try {
        const student = await setStudentStatus(req.body);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
