exports.getOverview = (req, res, next) => {
    res.render('overview', {
                            pageTitle: "Overview Page",
                            path: "/overview",
                            dummy: "Rendszer Áttekintés."
                        });
}