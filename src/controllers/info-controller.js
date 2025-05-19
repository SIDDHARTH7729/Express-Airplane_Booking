
const info = (req,res) =>{
    return res.status(StatusCode.OK).json({
        succes:true,
        message: 'API is Live',
        version: '1.0.0',
        error:{},
        data:{}
    })
}


module.exports = {
  info
}