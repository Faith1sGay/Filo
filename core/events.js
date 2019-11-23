module.exports = client => {
  client.on('message', async message => {
    const { prefix } = require('../config.json')
    if (message.channel.type === 'dm') return
    const lcp = client.get(prefix.toLowerCase())
    if (!message.content.startsWith(lcp)) return
    if (message.author.bot) return
    const args = message.content.slice(prefix.length).split(/ +/g)
    const command = args.shift().toLowerCase()

    const commandfile = client.commands.get(command.toLowerCase())
    if (!commandfile) return
    commandfile.run(client, message, args)
  })
}
