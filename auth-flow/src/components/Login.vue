<template>
  <div>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">You need to login first.</p>
    <form @submit.prevent="login">
      <label>
        <input type="email" v-model="email" placeholder="email" />
      </label>
      <label>
        <input type="password" v-model="pass" placeholder="password" />
      </label>
      <button type="submit">Login</button>
      <p v-if="error" class="error">Bad login information</p>
    </form>
  </div>
</template>

<script>
import auth from '../auth'
export default {
    data() {
        return {
            email: 'foo@example.com',
            pass: 'password1',
            error: false
        }
    },
    methods: {
        login() {
            auth.login(this.email, this.pass, loggedIn => {
                if (loggedIn) {
                    this.$router.replace(this.$route.query.redirect || '/')
                } else {
                    this.error = true
                }
            })
        }
    }
}
</script>

<style scoped>
.error {
    color: red;
}
</style>