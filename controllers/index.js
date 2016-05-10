var View = require('../views/base.js');

module.exports = {
    name: "Index",
    run: function(req, res, next) {
      var view = new View(res, 'index');
        view.render({
            title: 'Welcome Page',
            content: 'Welcome'
        });
    }
}
