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
            title: 'Location info'
        }
    )
};
controllers.addReview = function (req, res) {
    res.render(
        'locations/review-form',
        {
            title: 'Add review'
        }
    )
};

module.exports = controllers;
