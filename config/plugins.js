module.exports = {
    'strapi-neon-tech-db-branches': {
      enabled: true,
      config: {
        neonApiKey: "napi_vhycu2457a2fncofjb6657rxhw9jps24nk61f6vu78rewo7iwnzqhdpp51ygriyd", // get it from here: https://console.neon.tech/app/settings/api-keys
        neonProjectName: "caca", // the neon project under wich your DB runs
        neonRole: "neondb_owner", // create it manually under roles for your project first
        gitBranch: "main" // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
      }
    },
  }