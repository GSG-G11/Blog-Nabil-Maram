const connection = require("../config/connection");

const getData = () =>{
const sql = {
  text:'select feedbacks.title, feedbacks.content , users.name ,users.id  from feedbacks join users on feedbacks.user_id = users.id;',
  values:[]
}
return connection.query(sql)
};


module.exports = getData;