let figures = [
    {
        figure:"Squar",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure:"Rectangle",
        sizeA: 4,
        sizeB: 8
    }
]

function calculateAreas(figures) {
    const areas = [];
    for (let i = 0; i < figures.length; i++) {
      const figure = figures[i];
      const area = figure.sizeA * figure.sizeB;
      areas.push(area);
    }
    return areas;
}
  
console.log(calculateAreas(figures))