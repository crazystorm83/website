import path from 'path';

export const ENV = {
    ROOT_DIR: path.join(__dirname, '../../public'),
    PORT: process.env.PORT || 3000,
}