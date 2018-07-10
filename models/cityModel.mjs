import mongoose from 'mongoose';
import cityData from '../config/mock-data/cityData'

const CitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    capital: {
        type: Boolean,
        required: [true, 'The capital is required.'],

    },
    location: {
        type: Object
    },
    created_on: {
        type: Date,
        default: Date.now,
    },
});

const City = mongoose.model('Cities', CitySchema);

cityData.map((city) => City.create(city, function (err, city) {
    if (err) {
        console.trace(err);
    } else {
        console.log(`City ${city.name} has been added to database.`);
    }
}));

export default City;
