exports.getRiskAssessment = (req, res, next) => {
    res.render('home', {
                            pageTitle: "Risk Assessment Page",
                            path: "/risk-assessment",
                            dummy: "Kockázatelemzés"
                        });
}