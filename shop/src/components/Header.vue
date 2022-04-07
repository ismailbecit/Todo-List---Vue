<template>
  <div>
    <b-container class="header mt-5">
      <b-nav pill>
        <b-nav-item active>Home</b-nav-item>
        <b-nav-item>Shop</b-nav-item>
      </b-nav>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>
<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
