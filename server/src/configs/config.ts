import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 5000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'E-Shagrid',
    description: 'rest api for E-Shagrid',
    version: '1.5',
    path: 'api',
  },
};

export default (): Config => config;
