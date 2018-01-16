class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1);
    let total = (endDate - this.startDate)/(365*24*60*60*1000);
    return Math.ceil(total);
  }
}

let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  avenueBlocks(avenue) {
    return eastWest.indexOf(avenue);
  }

  blocksTravelled() {
    let horizontalD = this.avenueBlocks(this.endingLocation.horizontal) - this.avenueBlocks(this.beginningLocation.horizontal);

    let verticalD = this.endingLocation.vertical - this.beginningLocation.vertical;

    return horizontalD + verticalD;
  }

  estimatedTime(peak) {
    if(peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }

}
