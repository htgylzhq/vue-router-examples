<template>
    <div>{{ $route.name }}: {{ n }}</div>
</template>

<script>
export default {
    name: 'WithGuard',
    data() {
        return {
            n: 0
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.n++
        })
    }
}
</script>