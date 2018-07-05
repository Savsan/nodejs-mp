import mongoose from 'mongoose';

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

const citiesArr = [
    {
        name: 'Brest',
        country: 'Belarus',
        capital: false,
        location: {
            lat: 52.097621,
            long: 23.734050
        }
    },
    {
        name: 'Minsk',
        country: 'Belarus',
        capital: true,
        location: {
            lat: 52.097621,
            long: 23.734050
        }
    },
    {
        name: 'Grodno',
        country: 'Belarus',
        capital: false,
        location: {
            lat: 52.097621,
            long: 23.734050
        }
    },
    {
        name: 'Mogilev',
        country: 'Belarus',
        capital: false,
        location: {
            lat: 52.097621,
            long: 23.734050
        }
    }
];

citiesArr.map((city) => City.create(city, function (err, city) {
    if (err) {
        console.error(err);
    } else {
        console.log(`City ${city.name} has been added to database.`)
    }
}));



export default City;