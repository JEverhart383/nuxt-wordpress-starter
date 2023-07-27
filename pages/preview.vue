<template>
    <div>
      <TheHeader></TheHeader>
        <main class="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
            <h1 class="text-4xl">{{ data.title }}</h1>
            <div class="text-2xl mt-4">{{ new Date(data.date).toLocaleDateString() }}</div>
            <article class="mt-4 space-y-2" v-html="data.content"></article>
        </main>
    </div>
 </template>
 
 <script setup>
 import {getTokensFromCode} from '../faust';
 const route = useRoute();
 const config = useRuntimeConfig();
 const {code, preview_id: previewId} = route.query;
 console.log(code)
 const tokens = await getTokensFromCode(code);
 console.log(tokens.accessToken)
//Don't store access token in cookie, and set refreshToken instead as cookie
//If refreshToken, get new access code and replace value of refresh token

//  const cookie = useCookie('access-token', {httpOnly: true, maxAge: 300});
//  if (cookie.value){
//     console.log(cookie.expires)
//     accessToken = cookie.value;
//  } else {
//     console.log(cookie)
//     accessToken = route.query.access_token;
//     console.log(accessToken)
//     cookie.value = accessToken;
//  }

//  use post here so we don't cache any null responses based on invalid credential
 const {data, pending, refresh, error} = await useFetch(config.public.wordpressUrl, {
    method: 'post',
    body: JSON.stringify({
        query: `
        query DraftQuery($id: ID!) {
            post(id: $id, idType: DATABASE_ID, asPreview: true) {
                id
                title
                content
                date
            }
        }
        `,
        variables: {
            id: previewId
        }
    }),
    headers: {
        Authorization: `Bearer ${tokens.accessToken}`
    },
    transform(data){
        console.log(data)
        return data.data.post
    }
 })

 
 </script>