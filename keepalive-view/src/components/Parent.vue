<template>
  <div>
    msg: {{ msg }}
    <router-view />
  </div>
</template>
<script>
export default {
    name: 'Parent',
    props: [
        'msg'
    ]
}
</script>