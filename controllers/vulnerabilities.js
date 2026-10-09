const Vulnerability = require('../models/vulnerabilities');

exports.getVulnerabilities = (req, res, next) => {
    
    Vulnerability.fetchAll((vulnerabilities) => {
        res.render('vulnerabilities', {
                pageTitle: "Vulnerability Page",
                path: "/vulnerabilities",
                dummy: "Feltárt sérülékenységek.",
                vulnerabilities: vulnerabilities
        });
    });
}