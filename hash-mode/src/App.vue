<template>
  <div id="app">
    <h1>Mode: 'hash'</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/foo">/foo</router-link></li>
        <li><router-link to="/bar">/bar</router-link></li>
        <router-link tag="li" to="/bar">/bar</router-link>
        <li><router-link to="/é">/é</router-link></li>
        <li><router-link to="/é/ñ">/é/ñ</router-link></li>
        <li><router-link to="/é/ñ?t=%25ñ">/é/ñ?t=%ñ</router-link></li>
        <li><router-link to="/é/ñ#é">/é/ñ#é</router-link></li>
      </ul>
      <pre id="query-t">{{ $route.query.t }}</pre>
      <pre id="hash">{{ $route.hash }}</pre>
      <router-view class="view"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html, body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #2c3e50;
}

#app {
  padding: 0 20px;
}

ul {
  line-height: 1.5em;
  padding-left: 1.5em;
}

a {
  color: #7f8c8d;
  text-decoration: none;
}

a:hover {
  color: #4fc08d;
}
</style>
