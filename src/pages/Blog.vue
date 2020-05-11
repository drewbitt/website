<template>
  <Layout>
    <g-link to="/blog/tech">
      <div class="blogType">
        <font-awesome :icon="['fas', 'laptop']" size="10x"/>
        <h2>Tech Blog</h2>
      </div>
    </g-link>
    <g-link to="/blog/books">
      <div class="blogType">
        <font-awesome :icon="['fas', 'book']" size="10x"/>
        <h2>Book Reviews</h2>
      </div>
    </g-link>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}
</script>

<style scoped>
  .blogType {
    width: 250px;
    height: 200px;
    padding: 50px;
    display: inline-block;
    margin-left: 20px;
    border: 2px solid black;
    text-align: center;
  }
</style>
