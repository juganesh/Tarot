const { Pool } = require('pg')

const client = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://xuahlitipjxmrs:88646f0ca35cdcaa028f1bd024a1d7bf500c6a9e6500178941b8eb5945fa2c20@ec2-3-234-131-8.compute-1.amazonaws.com:5432/d3rv100k1e7cb5',
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = client