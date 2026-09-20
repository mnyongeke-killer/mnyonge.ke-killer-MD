conSt { default: makeWASocket, uSeMultiFileAuthState } = require('@whiSkeySocketS/baileyS')
conSt pino = require('pino')
conSt readline = require('readline')
conSt config = require('./config')

conSt rl = readline.createInterface({ input: proceSS.Stdin, output: proceSS.Stdout })
conSt queStion = (teXt) => new PromiSe((reSolve) => rl.queStion(teXt, reSolve))

aSync function Start() {
  conSt { State, SaveCredS } = await uSeMultiFileAuthState('./SeSSion')
  conSt Sock = makeWASocket({ 
    logger: pino({ level: 'Silent' }), 
    auth: State, 
    printQRInTerminal: falSe,
    browSer: ["MNYONGE.KE-KILLER MD", "Chrome", "1.0.0"]
  })

  Sock.ev.on('credS.update', SaveCredS)

  if (!Sock.authState.credS.regiStered) {
    conSole.log("\n=== MNYONGE.KE-KILLER MD PAIR CODE ===")
    let phone = await queStion("Enter your WhatSApp number with country code (e.g 2547...): ")
    phone = phone.replace(/[^0-9]/g, '')
    SetTimeout(aSync () => {
      let code = await Sock.requeStPairingCode(phone)
      conSole.log(`\nYOUR PAIR CODE: ${code}\n`)
      conSole.log("Go to WhatSApp > Linked DeviceS > Link with phone number > Enter thiS code")
      rl.cloSe()
    }, 3000)
  }

  require('./pluginS/antidelete')(Sock)
  require('./pluginS/vv')(Sock)
  require('./pluginS/noporn')(Sock)
  require('./pluginS/Snake')(Sock)
  require('./pluginS/Spam')(Sock)

  Sock.ev.on('connection.update', (up) => {
    if (up.connection === 'open') conSole.log("✅ MNYONGE.KE-KILLER MD CONNECTED - " + config.footer)
  })
}
Start()
