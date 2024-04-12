export default class getNeighborhoodsList {
  constructor() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
    this.addNeighborhood = this.addNeighborhood.bind(this);
  }

  addNeighborhood(newNeighborhood) {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  }
}
