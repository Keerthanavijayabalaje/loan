const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});

const insertloan = (request, response) => {
const {id,created,loan_status_id,loan_resource_type_id,loan_type_id} = request.body
  pool.query( "INSERT INTO cbanc.loan (id,created,loan_status_id,loan_resource_type_id,loan_type_id) VALUES ($1,$2,$3,$4,$5)",[id,created,loan_status_id,loan_resource_type_id,loan_type_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in loan')
  })
}



module.exports = {
insertloan
}
