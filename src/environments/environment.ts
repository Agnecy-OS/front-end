import { AppEnvironment } from "../app/core/tokens/enviroment/environment.token";

export const environment: AppEnvironment = {
  production: true,
  apiUrl: "https://api.agency-os.eyadsharkawy.tech/api/v1",
  wsUrl: "https://api.agency-os.eyadsharkawy.tech/ws-timer",
  keycloak: {
    url: "https://keycloak.eyadsharkawy.tech",
    realm: "agency-os-realm",
    clientId: "agency-os-frontend",
  },
};
