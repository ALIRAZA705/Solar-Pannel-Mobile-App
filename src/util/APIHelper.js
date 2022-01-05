// import { authProvider } from "../authProvider";

/**
 * Helper function to retrieve the token for the current logged in user.
 */
// export const getIdToken = async () => {
//   return await authProvider.getIdToken().then((tokenResponse) => {
//     return tokenResponse?.idToken?.rawIdToken;
//   });
// };

/**
 * Helper function to make an API request, fetching the token of the current logged in user first.
 * @param {*} args
 */
export const makeRequest = async (opts) => {
  let token = "";

  // Get the current token
  // token = await getIdToken();
  token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiI2ODE2NjY2Yy0yNWJiLTQwNGItYjAxOC0yODJlZGYwNjkxZmUiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vNDVjOTI1OTAtY2NjNi00NmY5LTgwZmYtOWZjOGQ5ZWRkZTM5L3YyLjAiLCJpYXQiOjE2MzkxMjY1NTMsIm5iZiI6MTYzOTEyNjU1MywiZXhwIjoxNjM5MTMwNDUzLCJhaW8iOiJBVFFBeS84VEFBQUFkT0w0T1piRWFjNnVhV0Q3VnBOeUJ3ZzdsQk5GUnBwYU1tVFQrNkVwL0xvcnJqRy8zUzcraGRtREpOOGtkUlM1IiwibmFtZSI6IkFwcGRldjI2Iiwibm9uY2UiOiI5YjU0NGMyNS03Y2JjLTRkNDctYTllNC01ZDFkNDNmN2U5ZjUiLCJvaWQiOiI1YzYwNTYwZS03ZTMzLTRjMTctODlhMi03ZjNkZTY1MmRkMTEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJBcHBkZXYyNkB0aGVmYS5jb20iLCJyaCI6IjAuQVRFQWtDWEpSY2JNLVVhQV81X0kyZTNlT1d4bUZtaTdKVXRBc0Jnb0x0OEdrZjR4QUxrLiIsInN1YiI6Il95R3ZnSHRtZE8ycDN4WUJBZWR5SHN3Y0t2ZE4xMTRIS0R4VlpNRkZ5eUkiLCJ0aWQiOiI0NWM5MjU5MC1jY2M2LTQ2ZjktODBmZi05ZmM4ZDllZGRlMzkiLCJ1dGkiOiJkdmV1cVhCa1ZVdVVmQkdlVTdrSUFBIiwidmVyIjoiMi4wIn0.bQdXAI9s4qCJ6GROm4Wv589jxTRRYW-RdwOSE7Ne8pD6bRs4DpnL5kP70qcGt5JHPRDqP6iG-5ZKiTRl0XH_nPQf1pEUfzNZkrQCkvoEkAOcN6GoX244VNbeDkF5uSQe8IGIgw426EHrB2ovbMG17bsiljhQwgGcv_x2fIapNdXaSvR119ql6QqBhbKDYe0r6bTwK8QmrkKFu7eAf0AqcAzCqsDMWwXcrCH142UJgbMFgN8cTjHaaXQzEn9O5CFNjUYRne2XMeB8vDKHREfEo6FWU_rsqI9J0Xnu0cKom86LsuG4gfKH_0rIP3INdfWGKdI94es_vmMNratXdAehWw"; // Setup fetch options, adding the token
  const options = {
    ...opts,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log("here is the login req", options);
  if (opts.contentType) {
    options.headers["Content-Type"] = opts.contentType;
  }

  // Return the fetch response or throw the error.
  return await fetch(options.path, options)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};
