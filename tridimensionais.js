
var mouth = []

var firstWeeks = []
var lastWeeks = []

var avgTempWeek1 = [33, 25.2, 19, 10, 6, 3, -9]
var avgTempWeek2 = [39, 40, 42.1, 41.2, 38, 36, 34]
var avgTempWeek3 = [13, 22.2, 11, 12, 5, 7, -3]
var avgTempWeek4 = [31, 40, 41.1, 43.6, 22, 12, 30]


firstWeeks = [avgTempWeek1, avgTempWeek2]
lastWeeks = [avgTempWeek3, avgTempWeek4]

mouth = [firstWeeks, lastWeeks]

console.log(mouth[1][1][4])

for (var x = 0; x < mouth.length; x++) {
  for (var y = 0; y < mouth[x].length; y++) {
    for (var z = 0; z < mouth[x][y].length; z++) {

      console.log(mouth[x][y][z]);

    }

  }

}