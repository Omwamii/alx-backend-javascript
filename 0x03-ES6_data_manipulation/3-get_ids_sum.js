export default function getStudentIdsSum(arr) {
  const array = arr.map((el) => el.id);
  return array.reduce((acc, curr) => acc + curr, 0);
}
