const hostApi = process.env.NODE_ENV === "development" ? "http://localhost" : "https://unitx.tech";
const portApi = process.env.NODE_ENV === "development" ? 8080 : "";
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}`;

export default {
  hostApi,
  portApi,
  baseURLApi,
  remote: "",
  isBackend: process.env.REACT_APP_BACKEND,
  auth: {
    email: 'admin@unitx.com',
    password: 'password'
  },
  app: {
    colors: {
      dark: "#323232",
      light: "#FFFFFF",
    },
    themeColors: {
      warning: '#FEBE69',
      danger: '#FF7769',
      success: '#81D4BB',
      info: '#4DC7DF'
    }
  }
};
