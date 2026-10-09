exports.getProtection = (req, res, next) => {
    res.render('protection', {
                            pageTitle: "Protection Page",
                            path: "/protection",
                            dummy: "Védelmi javaslatok listája."
                        });
}