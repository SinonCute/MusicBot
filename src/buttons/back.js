module.exports = async ({  inter, queue }) => {
    if (!queue.node.queue.channel.members.has(inter.member.id)) {
        return inter.editReply({ content: `You are not in a voice channel ${inter.member}... try again ? ❌`, ephemeral: true });
    }

    if (!queue || !queue.isPlaying()) return inter.reply({ content: `No music currently playing... try again ? ❌`, ephemeral: true });

    if (!queue.history.previousTrack) return inter.editReply({ content: `There was no music played before ${inter.member}... try again ? ❌`, ephemeral: true });

    await queue.history.back();

    inter.editReply({ content:`Playing the **previous** track ✅`, ephemeral: true});
}
