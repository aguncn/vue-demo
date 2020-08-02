<template>
  <div class="hello">
    <p>{{ msg }}</p>
	<p>{{ project }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      project: 'vue-demo'
    }
  }
}
</script>

<style scoped>
p {
  text-align: left;
}
</style>
