/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// We are adding the method to render the index page.
	// This will help render 'Views/user/index.ejs'
	index: function (req, res) {
		res.view(null, {
			title: "User"
		});
	}
};
