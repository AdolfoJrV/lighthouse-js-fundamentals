const judgeVegetable = function (vegetables, metric) {
  let winner = vegetables[0].submitter;
  let winningMetric = vegetables[0][metric];
  for (let i = 1; i < vegetables.length; i++) {
    if (winningMetric > vegetables[i][metric]) {
      winner;
    } else {
      winner = vegetables[i].submitter;
    }
  }
  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness';

console.log(judgeVegetable(vegetables, metric));