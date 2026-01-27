import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const ENV = {
    ROOT_DIR: path.join(__dirname, '../../public'),
    PORT: process.env.PORT || 3000,
}