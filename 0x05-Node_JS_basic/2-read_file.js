const fs = require('fs');
const { parse } = require('csv-parse');
const readline = require('readline');

const countStudents = (path) => {
  const stream = fs.createReadStream(path);

  stream.on('error', (error) => {
    throw new Error('Cannot load the database');
  });

  const rl = readline.createInterface({ input: stream });
  const studentsPerField = {};
  let count = 0;
  let isFirstLine = true;

  rl.on('line', (row) => {
    if (isFirstLine) {
      // avoid reading first line of csv file (fields)
      isFirstLine = false;
      return;
    }

    count++;
    const data = row.split(',');
    if (data.length === 0) {
      count--; // empty line or improper db
    }
    if (studentsPerField.hasOwnProperty(data[3])) {
      studentsPerField[data[3]].push(data[0]);
    } else {
      studentsPerField[data[3]] = [];
      studentsPerField[data[3]].push(data[0]);
    }
  });

  rl.on('close', () => {
    console.log(`Number of students ${count}`);
    for (const [key, value] of Object.entries(studentsPerField)) {
      field_l = value.length;
      console.log(`Number of students in ${key}: ${field_l}. ${value}`);
    }
  });
};

module.exports = countStudents;
