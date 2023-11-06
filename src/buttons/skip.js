module.exports = async ({  inter, queue }) => {
    if (!queue.node.queue.channel.members.has(inter.member.id)) {
        return inter.editReply({ content: `You are not in a voice channel ${inter.member}... try again ? ❌`, ephemeral: true });
    }
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `No music currently playing... try again ? ❌`, ephemeral: true });
    
    const success = queue.node.skip();

    return inter.editReply({ content: success ? `Current music ${queue.currentTrack.title} skipped ✅` : `Something went wrong ${inter.member}... try again ? ❌`, ephemeral: true});
}