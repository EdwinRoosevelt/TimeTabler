class TimeTable {
    daysPerWeek
    periodsPerDay
    slots = {}
    subjectAndConstrain = []

    // Setting the initial variables and creating the empty slots
    constructor(_daysPerWeek, _periodsPerDay, _subjectAndConstrain) {
        this.daysPerWeek = _daysPerWeek
        this.periodsPerDay = _periodsPerDay
        this.intializeEmptySlots();
        this.setSubjectAndConstrain(_subjectAndConstrain);
    }

    // creating the emply slots
    intializeEmptySlots() {
        for (var i = 1; i<=this.daysPerWeek; i++) {
            for (var j=1; j<=this.periodsPerDay; j++) {
                this.slots[`${i}${j}`] = undefined
            }
        }
    }

    //initializing subjects with corresponding constrain
    setSubjectAndConstrain() {
        
    }

    isSlotsFilled() {
        for (var i = 1; i <= this.daysPerWeek; i++) {
          for (var j = 1; j <= this.periodsPerDay; j++) {
              if (this.slots[`${i}${j}`] === undefined) return false
          }
        }
        return true
    }


    allocate(subject, ) {

    }

}

module.exports = TimeTable;