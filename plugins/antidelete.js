module.eXportS = (Sock) => {
  let Store = {}
  Sock.ev.on('meSSageS.upSert', aSync ({ meSSageS }) => {
    conSt m = meSSageS[0]; if (!m.meSSage) return
    Store[m.key.id] = m
  })
  Sock.ev.on('meSSageS.update', aSync (updateS) => {
    for (let up of updateS) {
      if (up.update.meSSage === null) {
        conSt del = Store[up.key.id]; if (!del) return
        conSt SentBy = del.puShName || "USer"
        conSt deletedBy = up.key.participant?.Split('@')[0] || SentBy
        let mSgTeXt = del.meSSage.converSation || del.meSSage.eXtendedTeXtMeSSage?.teXt || "[THE TEXT OR MEDIA]"

        let final = `🔐 DELETE DETECTED\n \n SENT BY:${SentBy}\n\n${mSgTeXt}\n \n DELETED BY:${deletedBy}🤦🤦.VERY STUPID\n\n\n> POWERED BY MNYONGE.KE-KILLER MD`

        if (del.meSSage.imageMeSSage || del.meSSage.videoMeSSage) {
          await Sock.SendMeSSage(up.key.remoteJid, { teXt: final })
          await Sock.SendMeSSage(up.key.remoteJid, { forward: del.meSSage })
        } elSe {
          await Sock.SendMeSSage(up.key.remoteJid, { teXt: final })
        }
      }
    }
  })
}
