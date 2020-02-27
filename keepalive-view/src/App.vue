<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/index/child1">/index/child1</router-link>
      </li>
      <li>
        <router-link to="/index/child2">/index/child2</router-link>
      </li>
      <li>
        <router-link to="/home">/home</router-link>
      </li>
      <li>
        <router-link to="/with-guard1">/with-guard1</router-link>
      </li>
      <li>
        <router-link to="/with-guard2">/with-guard2</router-link>
      </li>
      <li>
        <router-link to="/one/two/child1">/one/two/child1</router-link>
      </li>
      <li>
        <router-link to="/one/two/child2">/one/two/child2</router-link>
      </li>
      <li>
        <router-link to="/config-required-props">/config-required-props</router-link>
      </li>
      <li>
        <router-link to="/config-required-props/child">/config-required-props/child</router-link>
      </li>
      <li>
        <router-link to="/catch-warn">/catch-warn</router-link>
      </li>
    </ul>
    <keep-alive>
      <router-view class="view"></router-view>
    </keep-alive>
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
</style>
