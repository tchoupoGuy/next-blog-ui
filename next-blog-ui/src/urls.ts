let baseBackendUrl = process.env.REACT_APP_BACKEND_URL;

if (baseBackendUrl === undefined) {
  console.info(
    "Set the url of the backend directory in .env (If you are in testing mode ignore this message)"
  );

  baseBackendUrl = "no-base/";
}

export const backendUrl = {
  singIn: `${baseBackendUrl}/user/login`,
};

export const frontendUrl = {};
