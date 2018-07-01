export default class TwitterAuthController {
    authSuccess (req, res) {
        // Successful authentication, redirect home.
        res.send('You are legged in via Twitter !!!');
    }
}
