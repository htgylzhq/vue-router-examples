<template>
  <div id="app">
    <h1>Scroll Behavior</h1>
    <ul>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/foo">/foo</router-link>
      </li>
      <li>
        <router-link to="/bar">/bar</router-link>
      </li>
      <li>
        <router-link to="/bar#anchor">/bar#anchor</router-link>
      </li>
      <li>
        <router-link to="/bar#anchor2">/bar#anchor2</router-link>
      </li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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

.view {
  border: 1px solid red;
  height: 3000px;
  position: relative;
}
</style>