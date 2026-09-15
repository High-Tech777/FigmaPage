const db=require("../database/postgres");

exports.createUser=async(
    username, email, phone, password
)=> {
    const result=await db.query(
        `INSERT INTO users
        (username, email, phone, password)
        VALUES($1, $2, $3, $4)
        RETURNING *`,
        [username, email, phone, password]
    );

    return result.rows[0];
}

exports.findUser=async(username)=>{
    const result=await db.query(
        `SELECT *FROM users\
        WHERE username=$1`,
        [username]
    );

    return result.rows[0];
};
