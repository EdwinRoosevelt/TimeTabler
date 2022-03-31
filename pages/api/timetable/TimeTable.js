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
    //this.sortSubjects();
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
    var i = 0;
    var round = 1;
    while (i < constrains.type1) {
      const { x, y } = this.randomSlot(constrains.type3);
      var randomIndex = `${x}${y}`;
      

      if (this.slots[randomIndex] === undefined) {
        //console.log(`1---${x}${y} ${round}`);
        this.slots[randomIndex] = subName;
        i++;

        if (constrains.type4 && !this.checkType4(x, subName, round)) {
          
              //console.log(`2---${x}${y} ${round}`);
            this.slots[randomIndex] = undefined;
            i--;
          
        }
      }

      if (i % constrains.type3.x.length == 0) {
        round = (i / constrains.type3.x.length) + 1;
      }
    }
    //console.log(`Allocation Complete: ${i} ${round}`);
  }

  //checkType3(x, y, constrain) {}

  checkType4(x, subName, round) {
    var subjectsPerDay = 0;
    for (var j = 1; j <= this.periodsPerDay; j++) {
      if (this.slots[`${x}${j}`] === subName) subjectsPerDay += 1;
    }
    if (subjectsPerDay <= round) return true;
    return false;
  }

  randomSlot(arr) {
    var x = this.randomChoice(arr.x);
    var y = this.randomChoice(arr.y);
    return { x, y };
  }

  randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

//   fillRange(min, max) {
//     var res = [];
//     for (var i = min; i <= max; i++) res.push(i);
//     return res;
//   }

//   randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
}

module.exports = TimeTable;