module.exports = function (Doorman) {
    return {
        commands: [
            'choose'
        ],
        choose: {
            usage: '<Choices (comma seperated)>',
            description: 'Let the bot choose for you.',
            process: (msg, suffix, isEdit, cb) => {
              let response = 'Sounds like you\'re out of options.';
              if (suffix) {
                let options = suffix.split(',');
                response = `I choose ${options[Math.floor(Math.random() * options.length)].trim()}`;
              }
          
              cb({
                embed: {
                  color: Doorman.Config.discord.defaultEmbedColor,
                  title: `:thinking: **${response}**`,
                }
              }, msg);
            }
        }
    }
}
