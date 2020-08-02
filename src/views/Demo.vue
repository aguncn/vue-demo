<template>
  <div class="demo">
    <h1>This is an demo page</h1>
	<el-button>默认按钮</el-button>
	<el-button type="primary">主要按钮</el-button>
	<el-button type="success">成功按钮</el-button>
	<el-button type="info">信息按钮</el-button>
	<el-button type="warning">警告按钮</el-button>
	<el-button type="danger">危险按钮</el-button>
	<br />
	<i class="el-icon-edit"></i>
	<i class="el-icon-share"></i>
	<i class="el-icon-delete"></i>
	<el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
</template>
<script>
  export default {
    name: 'Demo',
    mounted: function(){
  	  this.$axios.get('http://localhost:8080/')
  	  .then(function(response) {
  	    console.log(response)
  	  })
  	  .catch(function(error){
  	    console.log(error)
  	  })
    }
  }
</script>
