const connection  =require("../config/connection");

const postData =(title,content,id) =>{
const sql = {
  text:'select * from users ',
  values:[]
}

return connection.query(sql);

}
module.exports = postData;