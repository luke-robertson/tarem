const express = require('express')
const fs = require('fs')
const router = express.Router()
const parse = require('csv-parse')
const {
  responceData,
  getYearData,
  getMonthData,
  months,
  fixNumberTo2Digits
} = require('../helpers')

// this is not ok, would be replaced with a good file loader or DB connection if real code
fs.createReadStream(__dirname + '/../data.csv').pipe(
  parse({ delimiter: ',' }, (err, res) => {
    res.shift()
    data = res
  })
)
let data = []

// year only route

router.get('/year/:year', (req, res, next) => {
  try {
    const year = req.params.year
    const yearData = getYearData(data, year)

    if (yearData.length === 0) {
      res.json({ error: `No data for ${year}` })
    }

    const json = {
      WeatherData: {
        WeatherDataForYear: {
          Year: year,
          ...responceData(yearData, year)
        }
      }
    }

    res.json(json)
  } catch (e) {
    console.log(e)
    res.json({ error: Stringify(e) })
  }
})

// year + month route

router.get('/year/:year/month/:month', (req, res, next) => {
  try {
    const year = req.params.year
    const month = req.params.month

    if (month < 1 || month > 12) {
      res.json({ error: `Invalid month ${month}, must be 1 - 12` })
    }

    const yearData = getYearData(data, year)

    if (yearData.length === 0) {
      res.json({ error: `No data for ${year}` })
    }

    const monthData = getMonthData(yearData, month)

    if (yearData.length === 0) {
      res.json({ error: 'No data for this month' })
    }

    const json = {
      WeatherData: {
        WeatherDataForYear: {
          Year: year,
          ...responceData(yearData, year),
          MonthlyAggregates: {
            WeatherDataForMonth: {
              Month: months[Number(month) - 1],
              ...responceData(monthData)
            }
          }
        }
      }
    }

    res.json(json)
  } catch (e) {
    console.log(e)
    res.json({ error: Stringify(e) })
  }
})

// misc routes

router.get('/', (req, res, next) => {
  res.json({ error: 'Routes are /year/${date} and /year/${date}/month/${month}' })
})

router.get('/year/', (req, res, next) => {
  res.json({ error: 'No Year Provided' })
})

router.get('/year/:year/month/', (req, res, next) => {
  res.json({ error: 'No Month Provided' })
})

module.exports = router
