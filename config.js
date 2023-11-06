module.exports = {
    app: {
        token: 'ODg2NzM3MTM5MTU5NjgzMTEy.Gzglcr.7ywrLIqEN9KDN5yDKuuUcew2qUAfHtbQbDpfAQ',
        playing: 'by Sinon ❤️',
        global: true,
        guild: '921868330619506780',
        ExtraMessages: true,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 25,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
