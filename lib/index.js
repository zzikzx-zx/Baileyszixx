import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.hex("#8B5CF6")(`
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░         WELCOME TO BAILEYS ZIXX              ░
░                  INFO:                       ░  
░         ZIXX GANTENG UDAH ITU AJA            ░
░                                              ░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
`));
console.log(chalk.hex("#00c2ff")("INFORMATION :"));
console.log(chalk.white("  ▢ Telegram : ") + chalk.hex("#8B5CF6")("@zixxsuizxx"));
console.log("");
console.log(chalk.hex("#00008b")("BAILEYS FOR ZIXX"));
console.log(chalk.gray("SELAMAT MENGGUNAKAN BAILEYS"));
console.log(chalk.cyan("https://t.me/zixxsuizxx\n"));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
