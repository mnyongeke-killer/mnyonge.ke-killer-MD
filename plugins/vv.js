module.eXportS = (Sock) => {
  Sock.ev.on('meSSageS.upSert', aSync ({ meSSageS }) => {
    conSt m = meSSageS[0]; if (!m.meSSage) return
    conSt viewOnce = m.meSSage.viewOnceMeSSage || m.meSSage.viewOnceMeSSageV2
    if (viewOnce) {
      let mSg = viewOnce.meSSage
      await Sock.SendMeSSage(m.key.remoteJid, { forward: mSg }, { quoted: m })
    }
  })
}
