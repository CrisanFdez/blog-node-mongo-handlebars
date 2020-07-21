module.exports = {
  validateReqEnvs: (reqEnvs) => {
    for (const reqEnv of reqEnvs) {
      if (!process.env[reqEnv])
        throw new Error(`${reqEnv} must be defined on the .env file`);
    }
  },
};
