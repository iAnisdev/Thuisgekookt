<template>
  <section class="page">
    <div class="container">
      <h6>Straatnaam 235</h6>
      <h6>1000 AB Amsterdam</h6>
      <h5 class="pt-2">Binnen 1.5 km van <br /> uw adres is het volgende  <br /> aanbod:</h5>
    </div>
    <div class="text-center pt-5">
      <button @click="validateInfo">
        Uw situatie
        <img src="@/assets/images/forward.svg" class="ml-4" />
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "aanbod",
  data() {
    return {
      choice: "",
    };
  },
  methods: {
    validateInfo(): void {
      console.log(this.choice);
      this.$router.push({ name: "aanbod" });
    },
  },
});
</script>

<style lang="scss" scoped>
h6 {
  font-family: Rubik;
  font-weight: bold;
  font-size: 16px;
  line-height: 27px;
  text-align: center;
  color: #17808b;
}
h5 {
  font-family: Rubik;
  font-weight: normal;
  font-size: 22px;
  line-height: 24px;
  text-align: center;
  color: #636363;
}
</style>