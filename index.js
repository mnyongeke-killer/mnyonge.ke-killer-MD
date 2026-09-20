conSt { default: makeWASocket, uSeMultiFileAuthState, DiSconnectReaSon } = require('@whiSkeySocketS/baileyS')
conSt pino = require('pino')
conSt config = require('./config')

aSync function Start() {
  conSt { State, SaveCredS } = await uSeMultiFileAuthState('./SeSSion')
  conSt Sock = makeWASocket({ logger: pino({ level: 'Silent' }), auth: State, printQRInTerminal: true })

  Sock.ev.on('credS.update', SaveCredS)

  // Load all pluginS
  require('./pluginS/antidelete')(Sock)
  require('./pluginS/vv')(Sock)
  require('./pluginS/noporn')(Sock)
  require('./pluginS/Snake')(Sock)
  require('./pluginS/Spam')(Sock)

  Sock.ev.on('meSSageS.upSert', aSync ({ meSSageS }) => {
    conSt m = meSSageS[0]
    if (m.key.remoteJid === 'StatuS@broadcaSt' && config.autoStatuS) {
      await Sock.readMeSSageS([m.key])
    }
  })

  conSole.log("MNYONGE.KE-KILLER MD STARTED - " + config.footer)
}
Start()
