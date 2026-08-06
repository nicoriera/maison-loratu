export const isAdminPreviewEnabled = (env = import.meta.env ?? process.env) => {
  if (!env) {
    return false;
  }

  const isProductionBuild =
    env.PROD === true || env.PROD === "true" || env.MODE === "production";

  if (isProductionBuild) {
    return false;
  }

  return (
    env.DEV === true ||
    env.DEV === "true" ||
    env.MODE === "development" ||
    env.VITE_ENABLE_ADMIN_PREVIEW === "true"
  );
};

export const canAccessPrototypeRoute = (meta = {}, config = siteConfig) => {
  return !meta?.prototypeOnly || config.isAdminPreviewEnabled;
};

export const createSiteConfig = (env = import.meta.env ?? process.env) => {
  return {
    siteUrl: "https://maison-loratu.fr",
    siteName: "Maison Loratu",
    primaryCity: "Anglet",
    serviceArea: ["Anglet", "Bayonne", "Biarritz"],
    instagramUrl: "https://www.instagram.com/maison__loratu/",
    isAdminPreviewEnabled: isAdminPreviewEnabled(env),
  };
};

export const siteConfig = Object.freeze(createSiteConfig());
