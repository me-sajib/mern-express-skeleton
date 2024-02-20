 const getUser = (req, res) => {
    const user = req.body;
    res.status(200).send({message: "sucessfylly get the user data", user});
}

module.exports = {getUser}