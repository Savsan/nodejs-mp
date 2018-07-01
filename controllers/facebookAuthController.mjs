export default class FacebookAuthController {
    authSuccess (req, res) {
        // Successful authentication, redirect home.
        res.send('You are legged in via Facebook !!!');
    }
}
