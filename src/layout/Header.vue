<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info">
      <b-navbar-brand href="/">
        <img
          height="50"
          class="logo"
          src="../../public/icon.svg"
          alt="logo">Covid-19 Tracker
      </b-navbar-brand>
    </b-navbar>
  </div>

</template>

<script>

export default {
  name: 'Header',
  methods: {
    // play around
  }
}
</script>

<style lang="scss" scoped>
.logo {
  padding-right: 10px;
}
</style>
