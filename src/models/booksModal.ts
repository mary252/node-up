import db from "../database/database";


const getAllBooksQuery = () => {
  return new Promise((resolve, reject) => {
    let query = `SELECT * FROM books`

    db.query(query, (err: any, results: any) => {
      if (err) { return reject(err) }
      resolve(results)
    })
  })
}
 export {getAllBooksQuery}