exports.getNetwork = (req, res, next) => {
    res.render('network', {
                            pageTitle: "Network Page",
                            path: "/network",
                            dummy: "Hálózati Térkép"
                        });
}