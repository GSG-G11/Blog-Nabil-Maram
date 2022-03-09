const connection  =require("../config/connection");

const postData =(title,content,id) =>{
const sql = {
  text:'INSERT INTO feedbacks(title,content,user_id) values ($1,$2,$3)  RETURNING *',
  values:[title,content,id]
}

return connection.query(sql);

}
module.exports = postData;