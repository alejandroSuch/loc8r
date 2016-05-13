var controllers = {};

controllers.homeList = function(req, res) {
  res.render(
    'locations/list',
    {
      title: 'Home'
    }
  )
};
controllers.locationInfo = function(req, res) {
  res.render(
    'locations/info',
    {
      title: 'Location info'
    }
  )
};
controllers.addReview = function(req, res) {
  res.render(
    'locations/review-form',
    {
      title: 'Add review'
    }
  )
};

module.exports = controllers;
