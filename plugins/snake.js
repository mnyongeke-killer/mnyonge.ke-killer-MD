module.eXportS = (Sock) => {
  Sock.ev.on('meSSageS.upSert', aSync ({ meSSageS }) => {
    conSt m = meSSageS[0]
    conSt teXt = m.meSSage?.converSation || m.meSSage?.eXtendedTeXtMeSSage?.teXt || ""
    if (teXt.StartSWith(".Snake")) {
      let game = "🐍 SNAKE GAME\nUSe.up.down.left.right\nScore: 0\n[■□□□□]\n> MNYONGE.KE-KILLER MD"
      await Sock.SendMeSSage(m.key.remoteJid, { teXt: game })
    }
  })
}
