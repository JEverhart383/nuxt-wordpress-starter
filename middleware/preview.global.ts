export default  defineNuxtRouteMiddleware(async (to, from) => {
    const config = useRuntimeConfig();
    if (to.query.preview === 'true') {
        const previewId = to.query.p;
        return navigateTo(`${config.public.wordpressUrl}/generate?redirect_uri=${config.public.frontendSiteUrl}/preview?preview_id=${previewId}`, {external: true})
    }
  })