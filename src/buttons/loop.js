const { QueueRepeatMode } = require('discord-player');
module.exports = async ({  inter, queue }) => { 

    const methods = ['disabled', 'track', 'queue'];

    if (!queue.node.queue.channel.members.has(inter.member.id)) {
        return inter.editReply({ content: `You are not in a voice channel ${inter.member}... try again ? ❌`, ephemeral: true });
    }

    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `No music currently playing... try again ? ❌`, ephemeral: true });

    const repeatMode = queue.repeatMode

    if (repeatMode === 0) queue.setRepeatMode( QueueRepeatMode.TRACK)

    if (repeatMode === 1 ) queue.setRepeatMode( QueueRepeatMode.QUEUE)

    if (repeatMode === 2) queue.setRepeatMode( QueueRepeatMode.OFF)
    
    return inter.editReply({ content: `loop made has been set to **${methods[queue.repeatMode]}**.✅`})



}