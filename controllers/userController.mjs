export default class UserController {
    getAllUsers (req, res) {
        console.log(req.parsedQuery);
        res.send('get all of the users!!');
    }
}