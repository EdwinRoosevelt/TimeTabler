class TimeTable {
  daysPerWeek;
  periodsPerDay;
  slots = {};
  subjectAndConstrains;

  // Setting the initial variables and creating the empty slots
  constructor(daysPerWeek, periodsPerDay, subjectAndConstrains) {
    this.daysPerWeek = daysPerWeek;
    this.periodsPerDay = periodsPerDay;
    this.intializeEmptySlots();
    this.subjectAndConstrains = subjectAndConstrains;
  }

  // creating the emply slots
  intializeEmptySlots() {
    for (var i = 1; i <= this.daysPerWeek; i++) {
      for (var j = 1; j <= this.periodsPerDay; j++) {
        this.slots[`${i}${j}`] = undefined;
      }
    }
  }

  isSlotsFilled() {
    for (var i = 1; i <= this.daysPerWeek; i++) {
      for (var j = 1; j <= this.periodsPerDay; j++) {
        if (this.slots[`${i}${j}`] === undefined) return false;
      }
    }
    return true;
  }

  allocate(subjectAndConstrains) {
      const {subName, constrains} = subjectAndConstrains
      var i = 1;
      while(i <= constrains.type1) {
          console.log("hi")
          i++
      }
  }

  type2Check(type, value, currentSlot) {
    if (type === 2) {
      var res = 0;
      for (var i = 1; i <= this.daysPerWeek; i++) {
        if (this.slots[`${i}${j}`] === "English") res += 1;
      }
      return true;
    }
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

module.exports = TimeTable;