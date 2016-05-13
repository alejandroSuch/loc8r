var controllers = {};

controllers.homeList = function (req, res) {
    res.render(
        'locations/list',
        {
            pageHeader: {
                title: 'Loc8r',
                strapline: 'Find places to work with wifi newar you!'
            },
            locations: [
                {
                    name: 'Starcups',
                    address: '125 High Street, Reading, RG6 1PS',
                    rating: 4,
                    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                    distance: '100m'
                },
                {
                    name: 'Cafe Hero',
                    address: '125 High Street, Reading, RG6 1PS',
                    rating: 5,
                    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                    distance: '200m'
                },
                {
                    name: 'Burger Queen',
                    address: '125 High Street, Reading, RG6 1PS',
                    rating: 2,
                    facilities: ['Food', 'Premium wifi'],
                    distance: '250m'
                }
            ],
            leadText: 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you are looking for.'
        }
    )
};
controllers.locationInfo = function (req, res) {
    res.render(
        'locations/info',
        {
            name: 'Starcupz',
            address: '555 High Street, Reading, RG6 1PS',
            rating: 1,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m',
            openingHours: [
                'Monday - Friday : 07:00am - 07:00pm',
                'Saturday : 08:00am - 05:00pm',
                'Sunday : closed'
            ],
            lat:50.3913966,
            lng:30.470844,
            reviews :[
                {
                    rating: 5,
                    author: 'Simon Holmes',
                    timestamp: '16 jul 2016',
                    comment: 'What a great place! I can\'t say enough good things about.'
                },
                {
                    rating: 2,
                    author: 'Charles Chaplin',
                    timestamp: '26 jul 2016',
                    comment: 'It was ok. Coffee wasn\'t great, but the wifi was fast.'
                }
            ]
        }
    )
};
controllers.addReview = function (req, res) {
    res.render(
        'locations/review-form',
        {
            title: 'Add review',
            name: 'Starcups'
        }
    )
};

module.exports = controllers;
