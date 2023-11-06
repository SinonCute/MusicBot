const { EmbedBuilder } = require('discord.js');
module.exports = async ({ client, inter, queue }) => {
    if (!queue.node.queue.channel.members.has(inter.member.id)) {
        return inter.editReply({ content: `You are not in a voice channel ${inter.member}... try again ? ❌`, ephemeral: true });
    }
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `No music currently playing... try again ? ❌`, ephemeral: true });

    queue.delete();

        const StopEmbed = new EmbedBuilder()
        .setColor('#2f3136')
        .setAuthor({name: `Music stopped into this server, see you next time ✅` })


       return inter.editReply({ embeds: [StopEmbed], ephemeral: true });

}