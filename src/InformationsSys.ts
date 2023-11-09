const si = require('systeminformation');

const Infos = [];

export const InformationsSYS = async () => {
  Infos.push(await si.cpu());
  Infos.push(await si.mem());
  Infos.push(await si.osInfo());
  Infos.push(await si.currentLoad());
  Infos.push(await si.processes());
  Infos.push(await si.diskLayout());
  Infos.push(await si.networkInterfaces());
  return Infos;
};

InformationsSYS()
  .then(() => {
    console.log(Infos);
  })
  .catch((error) => {
    console.error('Erreur', error);
 });
