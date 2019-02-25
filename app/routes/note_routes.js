module.exportd = function(app, db) {
    app.post('/notes', (req, res) => {
        // Notes goes here
        res.send('Hello')
    });

};