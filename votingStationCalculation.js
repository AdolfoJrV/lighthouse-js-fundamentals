const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  let selectedStations = [];
  for (let station of stations) {
    station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre') ? selectedStations.push(station[0]): null; 
  }
  return selectedStations;
}

console.log(chooseStations(stations));
