const express = require('express');
const path = require('path');

const homeRoutes = require('./routes/home');
const documentationRoutes = require('./routes/documentation');
const monitoringRoutes = require('./routes/monitoring');
const networkRoutes = require('./routes/network');
const overviewRoutes = require('./routes/overview');
const protectionRoutes = require('./routes/protection');
const riskassessmentRoutes = require('./routes/risk-assessment');
const vulnerabilitiesRoutes = require('./routes/vulnerabilities');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const rootDir = path.dirname(require.main.filename);
app.use(express.static(path.join(rootDir, 'public')));



app.use(homeRoutes);
app.use('/documentation', documentationRoutes);
app.use('/monitoring', monitoringRoutes);
app.use('/network', networkRoutes);
app.use('/overview', overviewRoutes);
app.use('/protection', protectionRoutes);
app.use('/risk-assessment', riskassessmentRoutes);
app.use('/vulnerabilities', vulnerabilitiesRoutes);



app.listen(3000);