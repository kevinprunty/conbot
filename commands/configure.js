const command = {};


command.name = "configure";
command.description = "Used to change the settings in the current session."

command.execute = function(msg, args){
    msg.channel.send("This function is under construction");
};



module.exports = command;