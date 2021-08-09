// 이메일리스트 모델
const util = require('util');
const dbconn = require('./dbconn');

module.exports = {
    findAll: async function() {
        const conn = dbconn();
        // const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, data, (error, rows, field) => error ? reject(error):resolve(rows))); 
        const query = util.promisify(conn.query).bind(conn);

        try {
            const results = await query("select no, first_name as firstName, last_name as lastName, email from emaillist order by no desc", []);
            return results;    
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    insert: async function(emaillist) {
        console.log(emaillist);
        console.log(Object.values(emaillist)); // 객체를 배열로 만들어 줌
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);

        try {
            return await query("insert into emaillist values(null, ?, ?, ?)", Object.values(emaillist));
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    }
}