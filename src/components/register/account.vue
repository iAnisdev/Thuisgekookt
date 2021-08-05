<template>
  <section class="page pt-4">
    <div class="container">
      <div class=" text-center"> 
        <img src="@/assets/images/user.svg" class="mt-3" />
      </div>
      <div class=" text-center">
        <button class="btn-foto">FOto toevoegen +</button>
      </div>
      <div class="mt-4">
        <div class="col-12 input__box px-2">
          <label for="gebruikersnaam" class="form-label">gebruikersnaam</label>
          <input
            type="text"
            v-model="housenumber"
            class="form-control"
            id="gebruikersnaam"
            required
          />
        </div>
        <div class="col-12 input__box px-2 mt-2">
          <label for="wachtwoord" class="form-label">wachtwoord</label>
          <input
            type="text"
            v-model="housenumber"
            class="form-control"
            id="wachtwoord"
            required
          />
        </div>
        <div class="col-12 input__box px-2 mt-2">
          <label for="wachtwoord" class="form-label">wachtwoord herhalen</label>
          <input
            type="text"
            v-model="housenumber"
            class="form-control"
            id="wachtwoord"
            required
          />
        </div>
      </div>
    </div>
    <div class="text-center pt-3">
      <button @click="validateInfo">
        opslaan en bevestigen &nbsp; &nbsp;&nbsp;
        <img src="@/assets/images/forward.svg" class="ml-4" />
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "account",
  data(){
    return {

    }
  },
  methods:{
    validateInfo(): void{
      this.$emit('next' , 'confirmation')
    }
  }
});
</script>

<style lang="scss" scoped>
.btn-foto {
  width: 150px;
  height: 28px;
  background: #949494;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.16));
  font-family: Rubik;
  font-weight: normal;
  font-size: 12px;
  letter-spacing: 0.09em;
  line-height: 11px;
  text-align: center;
  color: #fff;
}
label {
  font-family: Rubik;
  font-size: 12px;
  line-height: 13px;
  text-align: left;
  color: #777;
  margin-left: 1vw;
  text-transform: uppercase;
}
.input__box {
  border-radius: 5px;
  padding: 5px;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
.form-control {
  border: none;
}
</style>
