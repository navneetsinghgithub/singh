const { tokengenerate } = require('../jwt/jwtToken');
const users_models = require('../model/users_models')
const bcrypt = require("bcrypt")


module.exports = {
    adduser: async (req, res) => {
        try {

            const saltround = 10;
            const password = await bcrypt.hash(req.body.password, saltround)


            const adduser = await users_models.create({
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                bio: req.body.bio,
                contact: req.body.contact
            });
            const token = await tokengenerate(adduser.id);
            const upadteresult = await users_models.findByIdAndUpdate({
                _id: adduser._id
            },
                { token: token.token, logintime: token.time },
                { new: true }
            )



            return res.json({
                message: "user added",
                status: 200,
                body: adduser
            })

        } catch (error) {
            console.log('error');
        }
    },
    finduser: async (req, res) => {
        try {
            const finduser = await users_models.find()

            res.json({
                message: "user find",
                status: 200,
                body: finduser
            })

        } catch (error) {
            console.log('error');
        }
    },
    singleUser: async (req, res) => {
        try {
            const find = await users_models.findById({
                _id: req.params.id
            })
            return res.json({
                message: "Success",
                status: 200,
                body: find
            })
        } catch (error) {

        }
    },
    deleteuser: async (req, res) => {
        try {




            console.log(req.params.id, ">>>>>>>>>>>>>>>");



            const deleteuser = await users_models.deleteOne({
                _id: req.params.id
            })



            return res.json({
                message: "user delete",
                status: 200,
                body: deleteuser
            })

        } catch (error) {
            console.log('error');
        }
    },
    updateUser: async (req, res) => {
        try {
            const updateUser = await users_models.updateOne({
                _id: req.body.id
            },
                { name: req.body.name },
                { email: req.body.email },
                { new: true })

            return res.json({
                message: "Success",
                status: 200,
                body: updateUser
            })
            return res.json({
                message: "not found",
                status: 200,
                body: 404
            })
        } catch (error) {

        }
    },
    login: async (req, res) => {
        try {
            const logins = await users_model.findOne({
                email: req.body.email
            })
            if (!logins) {
                return res.json({
                    message: "unsuccessful",
                    status: 404,
                    body: {}
                })
            }
            else {

                if (logins.email == req.body.email) {

                    const password = await bcrypt.compare(req.body.password, logins.password)

                    if (!password) {
                        return res.json({
                            message: "Password is not correct",
                            status: 400,
                            body: {}
                        })
                    }
                    else {
                        return res.json({
                            message: "Successfully login",
                            status: 200,
                            body: logins
                        })
                    }
                }
            }
        } catch (error) {
            console.log(error); S
        }
    },
}