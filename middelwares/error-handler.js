const Error = (err, req, res, next) => {
    const name = err.name || "error";
    const errMsg = err.message || 'Something went wrong';

    res.json({
        success: false,
        name: name,
        message: errMsg,
       // stack:err.stack 
    })
}
module.exports = Error