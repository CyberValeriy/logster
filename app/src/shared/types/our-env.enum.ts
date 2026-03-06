export enum OurEnv {
    Dev = 'dev',
    Prod = 'prod',
  }
  
  export function getOurEnv(): OurEnv {
    const env = process.env.NODE_ENV;
    if (env === 'production') return OurEnv.Prod;
    return OurEnv.Dev;
  }