const withAuthorization = (req, res, next) => {
    if (!req.session.userId) { res.redirect("/login"); } else { next(); }
};
module.exports = withAuthorization;
  