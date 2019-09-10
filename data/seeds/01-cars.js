exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cars')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('cars').insert([
                { VIN: 1354654, make: 'Ford', model: 'Mustang', milage: 50000, transmission: 'automatic', title: 'clean' },
                { VIN: 1352654, make: 'Toyota', model: 'Tundra', milage: 90000, transmission: 'automatic', title: 'clean' },
                { VIN: 1356654, make: 'Nissan', model: 'Altima', milage: 100000, transmission: 'automatic', title: 'rebuilt' },
                { VIN: 1357654, make: 'Chevy', model: 'Tahoe', milage: 20000, transmission: 'automatic' },
                { VIN: 1358654, make: 'Subaru', model: 'Outback', milage: 5000, transmission: 'manual', title: 'clean' }
            ]);
        });
};
