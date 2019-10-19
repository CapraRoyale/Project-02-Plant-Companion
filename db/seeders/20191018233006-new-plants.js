'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('plants', [{
                name: 'Apple',
                desc: 'the round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Banana',
                desc: 'a long curved fruit which grows in clusters and has soft pulpy flesh and yellow skin when ripe',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Carrot',
                desc: 'a tapering orange-colored root eaten as a vegetable',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Dragonfruit',
                desc: 'A night-blooming climbing cactus (Hylocereus undatus) native to Mexico and Central America, cultivated in tropical regions for its edible fruit',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Eggplant',
                desc: 'the purple egg-shaped fruit of the nightshade family, which is eaten as a vegetable.',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Fig',
                desc: 'a soft pear-shaped fruit with sweet dark flesh and many small seeds, eaten fresh or dried',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('plants', [{}]);
    }
}