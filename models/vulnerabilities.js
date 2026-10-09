const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'threat_types.json');
const getVulnerabilitiesFromFile = (cb) => {

        fs.readFile(p, (err, fileContent) => {
            if(err)
                cb([]);
            else
                cb( JSON.parse(fileContent));
        });

};


module.exports = class Vulnerability {

    static fetchAll(cb) {
        
       getVulnerabilitiesFromFile(cb);
        
    }

}