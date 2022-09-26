module.exports = {
    app: {
        token: 'MTAyMzg0Mzg1MjYwOTY1MDY5OA.GdKyU6.YJZkoxS_6xNckFvmYWcAPlgfsl1MNsD-t_zOG4',
        playing: 'made by mich',
        global: true,
        guild: '912646009815961622'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: true,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
