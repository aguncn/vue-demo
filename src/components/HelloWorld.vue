<template>
  <div class="hello">
    <p>{{ msg }}</p>
	<!--
	<p>{{ project }}</p>
	<input v-model="input_message" placeholder="编辑我……" />
	<p>消息是: {{ input_message }}</p>
	
	<button @click="addOne">增加 1 次</button>
	<p>这个按钮被点击了 {{ counter }} 次。</p>
	<ol>
	  <li v-for="site in sites">
		{{ site.name }}
	  </li>
	</ol>
	<p v-if="seen">这段显示与否，取决于seen。</p>
	<template v-if="ok">
	  <p>template里控制显示，取决于ok。</p>
	  <p>人生若只如初见,何事秋风悲画扇。</p>
	  <p>等闲变却故人心,却道故人心易变。</p>
	</template>-->
	<p>原始字符串: {{ project }}</p>
	<p>计算后反转字符串: {{ reversedProject }}</p>
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
      project: 'vue-demo',
	  input_message: '应用名称',
	  counter: 0,
	  sites: [
		{ name: 'baidu' },
		{ name: 'alibaba' },
		{ name: 'ticktok' },
		{ name: 'tecent' }
	  ],
	  seen: false,
	  ok: true
    }
  },
  methods: {
	addOne: function (event) {
	  this.counter += 1;
    }
  },
  computed: {
	// 计算属性的 getter
	reversedProject: function () {
	// `this` 指向 vm 实例
	  return this.project.split('').reverse().join('')
	},
  },

  created: function() {
    console.group('------created创建完毕状态------');
    console.log("%c%s", "color:red","el     : " + this.$el); //undefined
    console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
    console.log("%c%s", "color:red","project: " + this.project); //已被初始化
  },
  mounted: function() {
    console.group('------mounted 挂载结束状态------');
    console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
    console.log(this.$el);    
    console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red","project: " + this.project); //已被初始化 
  }
}
</script>

<style scoped>
.hello {
  text-align: left;
}
</style>
