var Parse = require("parse-cloud").Parse;
module.exports = {
    initialize : function(api_user, api_key){
        this.api_user = api_user;
        this.api_key = api_key;
    },
    sendEmail: function(params, cbOptions){
        params.api_user = this.api_user;
        params.api_key = this.api_key;
        var options = {
            url: "https://api.sendgrid.com/api/mail.send.json",
            method: "POST",
            body: params,
            success: cbOptions && cbOptions.success || function(){},
            error: cbOptions && cbOptions.error || function(){},
        }

        var p = Parse.Cloud.httpRequest(options);
        console.log(p);
        return p;
    }
}
