export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const idList = arr.map((el) => el.id);
    return idList;
  }
  return [];
}
