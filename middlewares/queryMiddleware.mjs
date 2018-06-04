export default function queryParser () {
    return function (req, res, next) {
        const query = req.query || null;

        if (query) {
            req.parsedQuery = JSON.stringify(req.query);
        } else {
            req.parsedQuery = query;
        }

        next();
    }
}