export default class GoogleAuthController {
    authSuccess (req, res) {
        // Successful authentication, redirect home.
        res.send('You are legged in via Google !!!');
    }
}
