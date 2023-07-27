type Tokens = {   
    accessToken: string;
    refreshToken: string;
    accessTokenExpiration: number;
    refreshTokenExpiration: number;

}

export async function getTokensFromCode(code:string): Promise<Tokens>{

    const config = useRuntimeConfig();
    const apiClientSecret = config.private.FAUST_SECRET_KEY;
    if (!apiClientSecret) {
        throw new Error(
          'The apiClientSecret must be specified to use the auth middleware',
        );
      }
  
      let response = await fetch(`https://acfheadless.wpengine.com/?rest_route=/faustwp/v1/authorize`, {
        headers: {
          'Content-Type': 'application/json',
          'x-faustwp-secret': apiClientSecret,
        },
        method: 'POST',
        body: JSON.stringify({
          code
        }),
      });
    const tokens = await response.json();
    console.log(tokens)
    const accessToken = tokens.accessToken;
    return tokens;
}