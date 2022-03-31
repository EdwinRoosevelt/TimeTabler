const TimeTable = require("./TimeTable");

const daysPerWeek = 5;
const periodsPerDay = 8;

const completeInput = [
  {
    class: "9A",
    subjectAndConstrains: [
      {
        subName: "English",
        constrains: {
          type1: 7,
          type2: [1, 2],
          type3: { x: [1, 2, 3, 4, 5], y: [1, 2, 3, 4] },
          type4: true,
        },
        availableSlots: 20,
      },
      {
        subName: "Maths",
        constrains: {
          type1: 11,
          type2: [1, 2],
          type3: { x: [1, 2, 3, 4, 5], y: [1, 2, 3, 4, 5, 6, 7, 8] },
          type4: false,
        },
        availableSlots: 40,
      },
      {
        subName: "PT",
        constrains: {
          type1: 2,
          type2: [1, 2],
          type3: { x: [1, 2, 3, 4, 5], y: [7, 8] },
          type4: true,
        },
        availableSlots: 10,
      },
    ],
  },
  {
    class: "10A",
    subjectAndConstrains: [
      {
        subName: "English",
        constrains: {
          type1: 7,
          type2: [1, 2],
          type3: { x: [1, 2, 3, 4, 5], y: [1, 2, 3, 4] },
          type4: true,
        },
        availableSlots: 20,
      },
      {
        subName: "Maths",
        constrains: {
          type1: 11,
          type2: [1, 2],
          type3: { x: [1, 2, 3, 4, 5], y: [1, 2, 3, 4, 5, 6, 7, 8] },
          type4: false,
        },
        availableSlots: 40,
      },
      {
        subName: "PT",
        constrains: {
          type1: 2,
          type2: [1, 2],
          type3: { x: [1, 2, 3, 4, 5], y: [7, 8] },
          type4: true,
        },
        availableSlots: 10,
      },
    ],
  },
];

// console.log(a.randomNumber(1, 4));
//a.allocate(subjectAndConstrains[1]);
//console.log(a.slots)
//console.log(a.randomSlot(subjectAndConstrains[0].constrains.type3))
// a.allocate(subjectAndConstrains[2]);
// a.allocate(subjectAndConstrains[0]);

// a.slots[`${1}${2}`] = "English"
// a.slots[`${1}${6}`] = "English"
// a.slots[`${1}${8}`] = "English"
// console.log(a.checkType3(1,4, 2))

var a = new TimeTable(daysPerWeek, periodsPerDay, subjectAndConstrains);
a.allocate(subjectAndConstrains[1]);
console.log(a.slots);

// export default function handler(req, res) {

//   res.status(200).json({message: "all good!"});
// }
