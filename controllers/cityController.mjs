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

    addCity (req, res) {
        const data = {
            ...req.body
        };

        City.create(data, function (err, city) {
             if (err) {
                 console.error(err);
                 res.status(500).send({error: err});
             } else {
                 console.log(`City ${city.name} has been added to database.`);
                 res.status(200).json(city);
             }
        });
    }

    updateCityById (req, res) {
        const id = req.params.id,
              data = {
                  ...req.body
              };

        City.findByIdAndUpdate(id, data, {upsert: true}, function (err, city) {
             if (err) {
                 res.status(500).send({error: err});
             } else {
                if (!city) {
                    res.status(404).send({message: `Can't update. City with id: ${id} doesn't exists in the database`});
                } else {
                    console.log(`City ${city.name} has been updated successfully.`);
                    res.status(200).json(city);
                }
             }
        });
    }

    deleteCityById (req, res) {
        const id = req.params.id;

        City.findByIdAndDelete(id, function (err, city) {
            if (err) {
                res.status(500).send({error: err});
            } else {
                if (!city) {
                    res.status(404).json({message: `City with id: ${id} doesn't exists in the database.`});
                } else {
                    console.log(`City ${city.name} has been deleted successfully.`);
                    res.status(200).json(city);
                }
            }
        });
    }
}
