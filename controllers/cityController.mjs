import City from "../models/cityModel";

export default class CityController {
    getRandomCity(req, res) {
        let city = [];

        City.find({}, function(err, cities) {
            if (err) {
                res.status(500).send({error: err});
            }

            if (!cities.length) {
                res.status(404).send({message: 'No cities in the database.'});
            } else {
                city.push(cities[Math.floor(Math.random() * cities.length)]);

                res.status(200).json(city);
            }
        });
    }
}
