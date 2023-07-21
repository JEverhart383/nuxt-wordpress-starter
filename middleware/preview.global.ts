export default  defineNuxtRouteMiddleware(async (to, from) => {
    const config = useRuntimeConfig();
    if (to.query.preview === 'true') {
        const previewId = to.query.p;
        return navigateTo(`https://acfheadless.wpengine.com/generate?redirect_uri=http://localhost:3000/handle-preview-auth?preview_id=${previewId}`, {external: true})
    }

    if (to.path === '/handle-preview-auth'){
        const code = to.query.code;
        const previewId = to.query.preview_id;
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
        const accessToken = tokens.accessToken;

        return navigateTo(`/preview?access_token=${accessToken}&preview_id=${previewId}`)
    }
  })