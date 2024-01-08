export default function updateStudentGradeByCity(students, city, newGrades) {
  // filter to students in that city first
  const tStudents = students.filter((st) => st.location === city);
  return tStudents.map((std) => {
    for (const stObj of newGrades) {
      if (stObj.studentId === std.id) {
        std.grade = stObj.grade; // eslint-disable-line no-param-reassign
      }
    }
    if (!std.grade) {
      std.grade = 'N/A'; // eslint-disable-line no-param-reassign
    }
    return std;
  });
}
