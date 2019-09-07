const {
  getYearData,
  getMonthData,
  sumRainFall,
  noRainDays,
  getFirstDate,
  getLastDate,
  getAvrRainfall,
  getDaysNoRain,
  getDaysWithRain,
  fixNumberTo2Digits
} = require('./index')
var assert = require('assert')

const data = [
  ['IDCJAC0009', '066062', '2019', '03', '13', '14.6', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '14', '5.8', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '15', '8.6', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '16', '16.0', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '17', '43.4', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '18', '75.2', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '19', '4.6', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '20', '5.8', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '21', '0.0', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '22', '8.4', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '23', '2.0', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '24', '0.4', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '25', '3.8', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '26', '0.6', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '27', '0.0', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '28', '0.0', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '29', '0.0', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '30', '30.8', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '03', '31', '0.2', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '04', '01', '0.0', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '04', '02', '0.0', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '04', '03', '2.8', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '04', '04', '0.0', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '04', '05', '3.0', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '04', '06', '4.8', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '04', '07', '0.2', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '04', '08', '0.0', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '04', '09', '0.0', '1', 'N'],
  ['IDCJAC0009', '066062', '2019', '04', '10', '0.0', '1', 'N']
]

describe('tests', () => {
  describe('getYearData', () => {
    it('returns correct length of data for year', () => {
      const expected = data.length
      const responce = getYearData(data, '2019')
      assert.equal(expected, responce.length)
    })
  })
  describe('getMonthData', () => {
    it('returns correct length of data for month', () => {
      const expected = 19
      const responce = getMonthData(data, '03')
      assert.equal(expected, responce.length)
    })
  })
  describe('sumRainFall', () => {
    it('returns sum of rain fall for all data', () => {
      const expected = 231.00000000000006
      const responce = sumRainFall(data)
      assert.equal(expected, responce)
    })
  })
  describe('noRainDays', () => {
    it('returns days with no rain', () => {
      const expected = 19
      const responce = noRainDays(data)
      assert.equal(expected, responce.length)
    })
  })
  describe('getFirstDate', () => {
    it('returns first date from arr', () => {
      const expected = '2019-03-13'
      const responce = getFirstDate(data)
      assert.equal(expected, responce)
    })
  })
  describe('getLastDate', () => {
    it('returns last date from arr', () => {
      const expected = '2019-04-10'
      const responce = getLastDate(data)
      assert.equal(expected, responce)
    })
  })
  describe('getAvrRainfall', () => {
    it('returns average rain fall for data set', () => {
      const expected = 7.965517241379312
      const responce = getAvrRainfall(data)
      assert.equal(expected, responce)
    })
  })
  describe('getDaysNoRain', () => {
    it('returns days length with no rain', () => {
      const expected = 10
      const responce = getDaysNoRain(data)
      assert.equal(expected, responce)
    })
  })
  describe('getDaysWithRain', () => {
    it('returns days length with rain', () => {
      const expected = 19
      const responce = getDaysWithRain(data)
      assert.equal(expected, responce)
    })
  })
  describe('fixNumberTo2Digits', () => {
    it('returns days length with rain', () => {
      const expected = '01'
      const responce = fixNumberTo2Digits(1)
      assert.equal(expected, responce)
    })
  })
})
