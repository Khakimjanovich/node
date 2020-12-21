const mysql = require("mysql")
module.exports = app =>{
    const db = mysql.createConnection({
        host : 'localhost',
        user: 'root',
        password : 'root'
    })

    db.connect(err => {
        if (err){
            throw err
        }
        console.log('connected')
    })
}
