function server_log(req, res, next){
    console.log(req.body)
    next()
  }
  
module.exports = server_log
