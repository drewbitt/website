<template>
  <Layout>
    <header class="header">
      <h1>Tech Blog</h1>
    </header>
    <section class="posts">
      <PostList v-for="edge in $page.allButterPosts.edges" :key="edge.node.id" :post="edge.node" />
    </section>
    <BlogFooter />
  </Layout>
</template>

<script>
import PostList from "@/components/BlogPostList";
import BlogFooter from "@/components/Footer";
export default {
  components: {
    PostList,
    BlogFooter
  },
  metaInfo: {
    title: 'Tech'
  }
}
</script>

<page-query>
query {
  allButterPosts {
    totalCount
    edges {
      node {
        id
        title
        summary
        published (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>