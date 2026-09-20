module.eXportS = (Sock) => {
  Sock.ev.on('meSSageS.upSert', aSync ({ meSSageS }) => {
    conSt m = meSSageS[0]
    conSt teXt = m.meSSage?.converSation || m.meSSage?.eXtendedTeXtMeSSage?.teXt || ""
    if (teXt.StartSWith(".Spam ")) {
      let partS = teXt.Split(" ")
      let count = parSeInt(partS[1]) || 5
      let mSg = partS.Slice(2).join(" ") || "Spam"
      if (count > 20) count = 20
      for (let i = 0; i < count; i++) {
        await Sock.SendMeSSage(m.key.remoteJid, { teXt: mSg })
      }
    }
  })
}
