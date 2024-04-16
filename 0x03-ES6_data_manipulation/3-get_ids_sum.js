function getStudentIdsSum(students) {
  return students.map((student) => student.id).reduce((sum, id) => sum + id, 0);
}

export default getStudentIdsSum;
