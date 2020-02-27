<template>
  <div id="app">
    <h1>Active Links</h1>
    <ul>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/" exact>/ (exact match)</router-link>
      </li>
      <li>
        <router-link to="/users">/users</router-link>
      </li>
      <li>
        <router-link to="/users" exact>/users (exact match)</router-link>
      </li>
      <li>
        <router-link to="/users/evan">/users/evan</router-link>
      </li>
      <li>
        <router-link to="/users/evan#foo">/users/evan#foo</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/users/evan', query: { foo: 'bar' }}">/users/evan?foo=bar</router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'user', params: { username: 'evan' }, query: { foo: 'bar' }}"
          exact
        >/users/evan?foo=bar (named view + exact match)</router-link>
      </li>
      <li>
        <router-link
          :to="{ path: '/users/evan', query: { foo: 'bar', baz: 'qux' }}"
        >/users/evan?foo=bar&baz=qux</router-link>
      </li>
      <li>
        <router-link to="/about">/about</router-link>
      </li>
      <router-link tag="li" to="/about">
        <a>/about (active class on outer element)</a>
      </router-link>
      <li>
        <router-link to="/gallery">/gallery (redirect to /gallery/image1)</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'gallery' }">/gallery named link (redirect to /gallery/image1)</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'image', params: {imageId: 'image2'} }">/gallery/image2</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'image', params: {imageId: 'image1'} }">/gallery/image1</router-link>
      </li>
      <li>
        <router-link to="/redirect-gallery">/redirect-gallery (redirect to /gallery)</router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'redirect-gallery' }"
        >/redirect-gallery named (redirect to /gallery)</router-link>
      </li>
      <li>
        <router-link to="/redirect-image">/redirect-image (redirect to /gallery/image1)</router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'redirect-image' }"
        >/redirect-image named (redirect to /gallery/image1)</router-link>
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

a.router-link-active,
li.router-link-active a {
  color: #f66;
}

a.router-link-exact-active,
li.router-link-exact-active a {
  border-bottom: 1px solid #f66;
}
</style>
