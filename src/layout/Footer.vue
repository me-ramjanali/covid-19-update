<template>
  <div class="footer">
    <div class="wrapper">
      Copyrights &copy; {{ currentYear }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  background-color: #f7f7f7;
  padding: 40px 0;
  width: 100%;
  margin-top: auto;
  border-top: 1px solid #999999;
}
</style>
