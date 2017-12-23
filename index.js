function produceDrivingRange(blockNum) {
  return function(start, end) {
    //parseInt converts a string that holds an integer into just an integer
    let distance = Math.abs(parseInt(start) - parseInt(end));
    
    if (distance <= blockNum) {
      return `within range by ${blockNum - distance}`;
    } else {
      return `${Math.abs(blockNum - distance)} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage;
  }
}

function createDriver() {
  let driverId = 0;

  return class Driver {
    constructor(name) {
      this.id = ++driverId;
      this.name = name
    }
  }
}