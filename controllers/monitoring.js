exports.getMonitoring = (req, res, next) => {
    res.render('monitoring', {
                            pageTitle: "Monitoring",
                            path: "/monitoring",
                            dummy: "ROS2 hálózati forgalom és biztonsági események."
                        });
}