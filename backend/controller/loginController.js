import users from "../data/users.json" with {type: "json"}

export const loginController = (req, res )=>{
  const {username, password} = req.body

    const userData = users.find((u)=>u.username ===username && u.password === password)
   if(userData){

     res.json({...userData, token: "DUGFbuib123v2vZVV92"})
   }else{
res.status(401).json({error: "User not found!"})
   }
    

}