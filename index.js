var Parse = require("parse-cloud").Parse;
module.exports = {
    initialize : function(api_user, api_key){
        this.sendgrid = require('sendgrid')(api_user, api_key);
    }
    sendEmail: function(params, options){
        var p = new Parse.Promise();
        this.sendgrid.send(params, function(err, json){
            if(err){
                p.reject(err);
                if(options && options.error){
                    options.error(err);
                }
            }else{
                p.resolve(json);
                if(options && options.success){
                    options.success(json);
                }
            }
        });
        return p;
    }
}
