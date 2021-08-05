<template>
  <section class="page">
    <form>
      <div class="mt-3">
        <div class="row">
          <div class="col-2">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                value="Man"
                id="Man"
                checked
              />
              <label class="form-check-label" for="Man"> Man </label>
            </div>
          </div>
          <div class="col-2-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                value="Vrouw"
                id="Vrouw"
              />
              <label class="form-check-label" for="Vrouw"> Vrouw </label>
            </div>
          </div>
          <div class="col-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                value="Anders"
                id="Anders"
              />
              <label class="form-check-label" for="Anders"> Anders </label>
            </div>
          </div>
        </div>
        <div class="row mt-4 justify-content-around px-2">
          <div class="col-5 input__box px-2">
            <label for="Postcode" class="form-label">Voornaam</label>
            <input
              type="text"
              v-model="postcode"
              class="form-control"
              id="Postcode"
              required
            />
          </div>
          <div class="col-6 offset-1 input__box px-2">
            <label for="huisnummer" class="form-label">achternaam</label>
            <input
              type="text"
              v-model="housenumber"
              class="form-control"
              id="huisnummer"
              required
            />
          </div>
          <div class="col-12 input__box mt-2 px-2">
            <label for="huisnummer" class="form-label">Geboortedatum</label>
            <input
              type="date"
              v-model="housenumber"
              class="form-control"
              id="huisnummer"
              required
            />
          </div>
          <div class="col-12 input__box mt-2 px-2">
            <label for="huisnummer" class="form-label">e-mail adres</label>
            <input
              type="text"
              v-model="housenumber"
              class="form-control"
              id="huisnummer"
              required
            />
          </div>
          <div class="col-12 input__box mt-2 px-2">
            <label for="huisnummer" class="form-label">TELEFOONNUMMER</label>
            <input
              type="text"
              v-model="housenumber"
              class="form-control"
              id="huisnummer"
              required
            />
          </div>
        </div>
        <div class="row mt-2">
          <h5>Straatnaam 235</h5>
          <h5>1000 AB Amsterdam</h5>
        </div>
        <div class="text-center mt-1">
          <button @click="validateInfo">
            gebruik &nbsp; &nbsp; &nbsp; &nbsp;
            <img src="@/assets/images/forward.svg" class="ml-4" />
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "data",
  dat() {
    return {
      userInfo: {
        gender: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        dob: "",
      },
    };
  },
  methods:{
    validateInfo(): void{
      this.$emit('next' , 'usage')
    }
  }
});
</script>

<style lang="scss" scoped>
.form-check-label {
  font-family: Rubik;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  text-align: left;
  color: #636363;
}
.form-check-input {
  width: 1.25em;
  height: 1.25em;
}
.form-check-input:checked {
  background-color: #32b4d6;
  border-color: #32b4d6;
}

.input__box {
  border-radius: 5px;
  padding: 5px;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
label {
  font-family: Rubik;
  font-size: 12px;
  line-height: 13px;
  text-align: left;
  color: #777;
  text-transform: uppercase;
}
.form-control {
  border: none;
}
h5 {
  font-family: Rubik;
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;
  text-align: left;
  color: #17808b;
}
</style>
