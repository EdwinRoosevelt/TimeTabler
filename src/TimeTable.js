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
    const { subName, constrains } = subjectAndConstrains;
    var i = 1;
    var round = 1;
    while (i <= constrains.type1) {
        const {x, y} = this.randomSlot(constrains.type3);
        var randomIndex = `${x}${y}`;
      
        if (this.slots[randomIndex] === undefined) {
            this.slots[randomIndex] = subName;
            i++;

            if (constrains.type4) {
                if (!this.checkType3(x, y, round)) {
                  this.slots[randomIndex] = undefined;
                  i--;
                }
            }
        }

        if ((i-1) % constrains.type3[1] == 0) {
            console.log(i, constrains.type3[1]);
            round = (i / constrains.type3[1]) + 1;
        }
    }
    console.log(`Allocation Complete: ${i} ${round}`);
  }

  //pending
  checkType3(x, y, round) {
      var subjectsPerDay = 0;
      for (var j = 1; j <= this.periodsPerDay; j++) {
        if (this.slots[`${x}${j}`] === "English") subjectsPerDay += 1;
      }
      if (subjectsPerDay <= round) return true
      return false;
  }

  randomSlot(arr) {
    var x = this.randomChoice(this.fillRange(arr[0], arr[1]));
    var y = this.randomChoice(this.fillRange(arr[2], arr[3]));
    return {x, y}
  }

  fillRange(min, max) {
    var res = [];
    for (var i = min; i <= max; i++) res.push(i);
    return res;
  }

  randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

module.exports = TimeTable;