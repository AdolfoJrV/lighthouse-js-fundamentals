const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// const chooseStations = function (stations) {
//   let selectedStations = [];
//   for (let station of stations) {
//     station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre') ? selectedStations.push(station[0]) : null;
//   }
//   return selectedStations;
// }

// console.log(chooseStations(stations));

const chooseStations = function (stations) {
// Declaring more readable variables.
  let selectedStations = [];
  let stationName;
  let stationCapacity;
  let stationType;
  for (let station of stations) {
    // Initializing the variables with the corresponding array index.
    stationName = station[0];
    stationCapacity = station[1];
    stationType = station[2];
    stationCapacity >= 20 && (stationType === 'school' || stationType === 'community centre') ? selectedStations.push(stationName) : null;
  }
  return selectedStations;
}

console.log(chooseStations(stations));
