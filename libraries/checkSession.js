exports.test = function(req, res) {
	if(req.session.userdata == null) {
		if(req.xhr == true) {
			return res.json({
				error : 1,
				message : 'Invalid session.'
			});
		} else {
			res.redirect('/login');
		}
	}
}