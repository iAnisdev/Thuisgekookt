<template>
  <section class="page pt-4">
    <div class="container">
      <h3 class="mt-5">Uw aanvraag is ingediend</h3>
      <div>
        <img src="@/assets/images/success.svg" class="mt-5" />
      </div>
    <div class="text-center mt-5">
      <p>U ontvangt nu een mail <br /> met een bevestigingslink</p>
      <p>Hier moet u op drukken <br /> om uw account aan te maken</p>
    </div>
    </div>
    <div class="text-center pt-3">
      <button @click="validateInfo">
        sluit dit scherm &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img src="@/assets/images/forward.svg" class="ml-4" />
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "bevestiging",
  methods:{
    validateInfo(): void{
      this.$router.push({name: 'home'})
    }
  }
});
</script>

<style lang="scss" scoped>
.page {
  text-align: center;
}
h3 {
  font-family: Rubik;
  font-weight: bold;
  font-size: 25px;
  line-height: 34px;
  text-align: center;
  color: #32b4d6;
}
p{
  font-family: Rubik;
font-weight: bold;
font-size: 17px;
line-height: 19px;
text-align: center;
color: #777;

}
</style>
