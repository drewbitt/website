<template>
  <Layout>

    <h1 v-html="$page.home.edges[0].node.data.intro" />

    <p v-html="$page.home.edges[0].node.data.content" />

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Home Image" :src="$page.home.edges[0].node.data.photo" />

    <p v-html="$page.home.edges[0].node.data.more_content" />

  </Layout>
</template>

<page-query>
query {
	home: allButterPages(page:1){
    edges {
      node {
        data {
          intro
          content
          photo
          more_content
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
