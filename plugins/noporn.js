module.eXportS = (Sock) => {
  Sock.ev.on('meSSageS.upSert', aSync ({ meSSageS }) => {
    conSt m = meSSageS[0]; if (!m.meSSage) return
    conSt teXt = m.meSSage.converSation || m.meSSage.eXtendedTeXtMeSSage?.teXt || ""
    if (teXt.toLowerCaSe().includeS("porn") || teXt.toLowerCaSe().includeS("XXX")) {
      await Sock.SendMeSSage(m.key.remoteJid, { delete: m.key })
      await Sock.SendMeSSage(m.key.remoteJid, { teXt: "⚠️ NO PORN ALOWED - MNYONGE.KE-KILLER MD" })
    }
  })
}
