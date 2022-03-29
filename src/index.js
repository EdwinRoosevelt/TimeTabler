const TimeTable = require("./TimeTable");

const daysPerWeek = 5
const periodsPerDay = 8
const subjectAndConstrains = [
  {
    subName: "English",
    constrains: {
      type1: 7,
      type2: [1, 2],
      type3: [1, 4, 1, 3],
      type4: true,
    },
  },
  {
    subName: "Maths",
    constrains: {
      type1: 3,
      type2: [1, 2],
      type3: [1, 4],
      type4: true,
    },
  },
];
    

var a = new TimeTable(daysPerWeek, periodsPerDay, subjectAndConstrains);

// console.log(a.randomNumber(1, 4));
a.allocate(subjectAndConstrains[1]);

