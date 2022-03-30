const TimeTable = require("./TimeTable");

const daysPerWeek = 5
const periodsPerDay = 8
const subjectAndConstrains = [
  {
    subName: "English",
    constrains: {
      type1: 10,
      type2: [1, 2],
      type3: [1, 5, 1, 4],
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
//a.allocate(subjectAndConstrains[1]);
//console.log(a.slots)
//console.log(a.randomSlot(subjectAndConstrains[0].constrains.type3))
a.allocate(subjectAndConstrains[0])
// a.slots[`${1}${2}`] = "English"
// a.slots[`${1}${6}`] = "English"
// a.slots[`${1}${8}`] = "English"
// console.log(a.checkType3(1,4, 2))
console.log(a.slots);


