export default  defineNuxtRouteMiddleware(async (to, from) => {
    const config = useRuntimeConfig();
    if (to.query.preview === 'true') {
        const previewId = to.query.p;
        return navigateTo(`https://acfheadless.wpengine.com/generate?redirect_uri=http://localhost:3000/preview?preview_id=${previewId}`, {external: true})
    }
  })