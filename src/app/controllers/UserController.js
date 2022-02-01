const User = require('../models/User');
const bcrypt = require('bcryptjs');
const yup = require('yup');
class UserController{
    // index(req, res){
    //     console.log(req.body)
    // }

    show(req, res){

        var user = [
            "kaio",
            "larissa",
            "vanessa"
        ]
        return res.status(200).json({
            error: false,
            user
        })
    }

   async store(req, res){

    /**
     * Validação através do Yup schema
     * inicio
     */
    let schema = yup.object().shape({
       
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required()
      });
    if(!(await schema.isValid(req.body))){
        return res.status(400).json({
            error: true,
            message: "Erro na validação"
        })
    }
     /**
     * Validação através do Yup schema
     * Fim
     */
    let Userexist =  await User.findOne({email : req.body.email})
    if(Userexist){
        return res.status(400).json({
            error: true,
            message: "Usuario já cadastrado"
        })
    }

     /**
     * Desestruturação dos dados da requisição
     * 
     *  
     * 
     */
      const { name, email, password} = req.body;

    /**
     * criação da constante data
     *
     */




    const data = {
      
        name,
        email,
        password
    }


    /**
     * Criptografar a senha
     */
    data.password = await bcrypt.hash(data.password, 8);

    /**
     * Inserção no banco de dados
     */

     await  User.create(data, (err) =>{
         if(err)
            return res.status(400).json({
                error: true,
                message: "Erro no cadastro de usuario!!"
            })

        return res.status(200).json({
            error: false,
            message: "Usuario cadastrado"
        })    
     })
   }
}

module.exports = new UserController();