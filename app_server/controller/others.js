var controllers = {};

controllers.about = function(req, res) {
  res.render(
    'others/about',
    {
      title: 'About'
    }
  );
};

module.exports = controllers;
