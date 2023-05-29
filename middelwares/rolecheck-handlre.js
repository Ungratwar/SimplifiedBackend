
const rolecheck = (roles) =>async (req, res, next) => {
    // `roles` argument is an array of roles
    // We check whether user authenticated or not.
    // If user authenticated, `req.userLoggedIn` will be object otherwise it will be `undefined` 
    if(req.userLoggedIn[0]) { // `req.userLoggedIn` is a user object from Database
      // Checking whether `req.userLoggedIn` has a corresponded role
      if (roles.indexOf(req.userLoggedIn[0].role) !== -1) next(); // `req.userLoggedIn.role` is string and it may be "admin", "superadmin", "user"
      else res.status(403).send({message: `${req.userLoggedIn[0].role} you are not authorized`}); 
    } else {
      res.status(401).send({message: "unauthorized"});
    }}
  
module.exports={rolecheck}
  