<template>
  <Layout>
    <br>
    <g-link to="/" class="link">  &larr; Go Back</g-link>
    <div class="post-title">
      <h1>{{$page.post.title}}</h1>
      <p class="post-date"> {{ $page.post.posted}} </p>
    </div>
    <div class="post-content">
      <p v-html="$page.post.body" />
    </div>
  </Layout>
</template>

<page-query>
query ButterPosts ($path: String!) {
   post: butterPosts (path: $path) {
    id
    title
    body
    published (format: "D MMMM YYYY")
  }
}
</page-query>

<style>
.post-title {
  text-align: center;
  font-size: 30px;
  line-height: 10px;
  padding: 2em 0;
  font-family: 'Stylish';
}
.post-date {
  font-size: 16px;
  font-weight: 400;
}
.post-content {
  font-size: 20px;
}
</style>