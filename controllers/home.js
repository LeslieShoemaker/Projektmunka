exports.getHomePage = (req, res, next) => {
    res.render('home', {
                            pageTitle: "Home Page",
                            path: "/",
                            dummy: "Biztonságos Robotikai Rendszerek a ROS2 Világában."
                        });
}