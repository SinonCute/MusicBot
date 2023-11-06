module.exports = async ({ inter, queue }) => {
    if (!queue.node.queue.channel.members.has(inter.member.id)) {
        return inter.editReply({ content: `You are not in a voice channel ${inter.member}... try again ? ❌`, ephemeral: true });
    }

    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `No music currently playing... try again ? ❌`, ephemeral: true });

    const resumed = queue.node.resume();
    let message = `Current music ${queue.currentTrack.title} resumed ✅`;
    
    if (!resumed) {
        queue.node.pause();
        message = `Current music ${queue.currentTrack.title} paused ✅`;
    }

    return inter.editReply({
        content: message, ephemeral: true
    });
}