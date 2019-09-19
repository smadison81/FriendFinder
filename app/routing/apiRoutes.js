// Import of friends.js file

var friends = require('../data/friends.js');


module.exports = function (app) {

    // Sets up the friends json page
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    
    app.post('/api/friends', function (req, res) {
        // loop through all of the possible options
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

       // Takes in The reults of the survey, username and photo and parses the data into variables
        var userData = req.body;
        var userScores = userData.scores;
        var userName = userData.name;
        var userPhoto = userData.photo;

       // Variable is used to calculate the difference betwen your score and the scores of friends
        var totalDifference = 0;

        //loop through the friends data array of objects to get each friends scores
        for (var i = 0; i < friends.length - 1; i++) {
            totalDifference = 0;

            //loop through that friends score and the users score and calculate the absolute difference between the two and push that to the total difference variable set above
            for (var j = 0; j < 10; j++) {
                // Gets the (absolute) difference between your score and the friends in the object
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                // finds the best match by seeing if the difference is less than the total difference
                if (totalDifference <= bestMatch.friendDifference) {

                    // Reset the bestMatch to be the new friend. 
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        // Push to save new users information
        friends.push(userData);

        //This will facilitate listing all the friends
        res.json(bestMatch);
    });
};