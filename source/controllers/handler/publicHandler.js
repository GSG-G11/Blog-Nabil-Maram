const postData = require("../../database/queries/postData");
const postDetails = (req,res)=>{
  const postId = req.params.id;
  const {title,content} =req.body;
  postData(title,content,postId)
  .then(data =>res.redirect(`/feedback.html?id=${postId}`))
}
module.exports = postDetails; 