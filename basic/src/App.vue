<template>
  <div id="app">
    <h1>Basic</h1>
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
      <router-link tag="li" to="/bar" :event="['mousedown', 'touchstart']">
        <a>/bar</a>
      </router-link>
      <li>
        <router-link to="/é">/é</router-link>
      </li>
      <li>
        <router-link to="/é?t=%25ñ">/é?t=%ñ</router-link>
      </li>
      <li>
        <router-link to="/é#%25ñ">/é#%25ñ</router-link>
      </li>
      <router-link to="/foo" v-slot="props">
        <li :class="[props.isActive && 'active', props.isExactActive && 'exact-active']">
          <a :href="props.href" @click="props.navigate">{{ props.route.path }} (with v-slot).</a>
        </li>
      </router-link>
    </ul>
    <button id="navigate-btn" @click="navigateAndIncrement">On Success</button>
    <pre id="counter">{{ count }}</pre>
    <pre id="query-t">{{ $route.query.t }}</pre>
    <pre id="hash">{{ $route.hash }}</pre>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(["increment"]),
    navigateAndIncrement() {
      if (this.$route.path === '/') {
        this.$router.push('/foo', this.increment)
      } else {
        this.$router.push('/', this.increment)
      }
    }
  }
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
