exports.getDocumentation = (req, res, next) => {
    res.render('documentation', {
                            pageTitle: "Documentation",
                            path: "/documentation",
                            dummy: "ROS2 specifikus biztonsági útmutatók és források."
                        });
}