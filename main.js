//json server
const STUDENT_ROSTER_URL = 'http://localhost:3000/studentRoster'

//get & display info
$.get(STUDENT_ROSTER_URL).then((data) =>
  data.map((student) => {
    $('tbody').append(
      $(`
    <tr>
      <td>${student.id}</td>
      <td>${student.fullName}</td>
      <td>${student.studentCourse}</td>
      <td>
      <button class="fa-solid fa-trash" onclick="deleteUser(${student.id})"}></button>
      </td>
    </tr>`)
    )
  })
)

//post & add new students
$('#submitStudent').click(function () {
  $.post(STUDENT_ROSTER_URL, {
    fullName: $('#newName').val(),
    studentCourse: $('#newCourse').val(),
  })
})

//delete students
function deleteUser(id) {
  $.ajax(`${STUDENT_ROSTER_URL}/${id}`, {
    type: 'DELETE',
  })
}

//put & update info
function updateUser() {
  const id = $('#updateId').val();

  $.ajax(`${STUDENT_ROSTER_URL}/${id}`, {
    method: 'PUT',
    data: {
      fullName: $('#updateName').val(),
      studentCourse: $('#updateCourse').val(),
    },
  })
}

$('#updateStudent').on('click', updateUser);
