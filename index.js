module.exports = messageHandler = function (event) {
    console.log('Recived message from UserID/MID: ' + event.source.userId);
    console.log('Message: ' + event.message.text);
    var text = event.message.text;
    var userID = event.source.userId;
    if (text.split(' ')[0] == '!admin') {
        var words = text.split(' ');
        if (words.length == 1) {
            sendMessage(userID, 'No options given! use "!admin help" to get help.');
        }
        if (words[1] === 'help' && words.length == 2) {
            sendMessage(userID, 'Help:\n-Setup admin Permissions: !admin register [PASSWORD | new]) \n-Edit Admin Data: !admin mydata [-name:NAME] [-level:LEVEL]');
        }
        if (words[1] === 'help' && words.length == 3) {
            if (words[2] === 'register') {
                sendMessage(userID, 'Generate a new Signup token with "!admin register new" The password will be visible in my console or in the SQL Database and will be valid for 10 Minutes \n\nn');
            }
        }
        if (words[1] === 'register') {
        }
        if (words[1] === 'mydata') {
        }
    } else if (text == 'me') {
        sendMessage(userID, 'You are: ' + userID);
    } else {
        sendMessage(userID, text);
    }
}