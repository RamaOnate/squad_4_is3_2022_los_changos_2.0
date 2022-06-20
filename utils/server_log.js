function server_log(req, res, next){
    console.log("RES:", res)
    console.log("REQ:", req)
    next()
  }
  
module.exports = server_log
  