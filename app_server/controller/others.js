var controllers = {};

controllers.about = function (req, res) {
    res.render(
        'others/about',
        {
            title: 'About',
            content: '<p>Loc8r was created to help people find places to sit down and get a bit of work done</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum nibh sit amet nisl sollicitudin molestie. Curabitur sit amet sem vitae lectus condimentum mollis at sed ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras interdum placerat nisl, eget suscipit urna malesuada eu. Nam tincidunt dapibus erat id blandit. Sed sapien felis, blandit nec magna lacinia, gravida lobortis ante. Pellentesque sed tempus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed auctor nisl id lorem euismod mollis. Suspendisse aliquam vehicula ornare. Suspendisse semper odio eu leo ornare porttitor. Ut lobortis est sed luctus elementum. Aliquam a porta dui, vitae finibus augue. Proin ligula ipsum, blandit nec ligula in, viverra consequat felis. Vestibulum ex lacus, convallis sed erat a, porta fringilla lorem. Pellentesque bibendum dui at tempus iaculis.</p>'
        }
    );
};

module.exports = controllers;
