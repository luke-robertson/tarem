const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const fixNumberTo2Digits = number => String(number).padStart(2, '0')

const getYearData = (arr, year) => arr.filter(item => item[2] === year)

const getMonthData = (arr, month) => arr.filter(item => item[3] === fixNumberTo2Digits(month))

const getFirstDate = arr => (arr.length ? `${arr[0][2]}-${arr[0][3]}-${arr[0][4]}` : 'No Data')

const getLastDate = arr => {
  const arrLength = arr.length
  const dataLength = arrLength - 1
  return arrLength ? `${arr[dataLength][2]}-${arr[dataLength][3]}-${arr[dataLength][4]}` : 'No Data'
}

const sumRainFall = arr => arr.reduce((acc, arr) => (acc += Number(arr[5] || 0)), 0)

const noRainDays = arr => (arr.length ? arr.filter(arr => Number(arr[5])) : 0)

const getAvrRainfall = arr => (arr.length ? sumRainFall(arr) / arr.length : 0)

const getDaysNoRain = arr => (arr.length ? arr.length - noRainDays(arr).length : 0)

const getDaysWithRain = arr => (arr.length ? noRainDays(arr).length : 0)

const responceData = arr => ({
  FirstRecordedDate: getFirstDate(arr),
  LastRecordedDate: getLastDate(arr),
  TotalRainfall: sumRainFall(arr),
  AverageDailyRainfall: getAvrRainfall(arr),
  DaysWithNoRainfall: getDaysNoRain(arr),
  DaysWithRainfall: getDaysWithRain(arr)
})

module.exports = {
  months,
  getYearData,
  getMonthData,
  sumRainFall,
  noRainDays,
  getFirstDate,
  getLastDate,
  getAvrRainfall,
  getDaysNoRain,
  getDaysWithRain,
  responceData,
  fixNumberTo2Digits
}
