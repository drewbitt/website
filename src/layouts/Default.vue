<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/contact/">Contact</g-link>
        <g-link class="nav__link" to="/projects/">Projects</g-link>
        <g-link class="nav__link" to="/blog/">Blog</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #202020;
  color: white
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

a {
    color: white;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-right: 40px;
  color: white;
  text-decoration: none;
  border-bottom: 2px solid #1a8bfc;
  font-size: 20px;
}
</style>
