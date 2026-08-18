let students = [];

const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");
const searchInput = document.getElementById("searchInput");

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const student = {
        id: document.getElementById("studentId").value,
        name: document.getElementById("studentName").value,
        email: document.getElementById("studentEmail").value,
        course: document.getElementById("studentCourse").value
    };

    students.push(student);

    studentForm.reset();

    displayStudents();
});

function displayStudents(list = students) {
    studentTable.innerHTML = "";

    list.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td>
                <button class="delete-btn" onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>
        `;

        studentTable.appendChild(row);
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchValue) ||
        student.id.toLowerCase().includes(searchValue) ||
        student.course.toLowerCase().includes(searchValue)
    );

    displayStudents(filteredStudents);
});