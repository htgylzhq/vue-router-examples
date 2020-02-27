<template>
  <div>props from route config is: {{ msg }}</div>
</template>
<script>
export default {
    name: 'RequiredProps',
    props: {
        msg: {
            type: String,
            required: true
        }
    }
}
</script>