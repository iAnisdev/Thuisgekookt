<template>
    <section class="page">
      <div class="container pt-4">
        <h4>
          Mogen wij uw <br />
          postcode en huisnummer?
        </h4>
        <h5 class="pt-2">
          Wij hebben uw postcode en huisnummer nodig zodat u kunt zien wat we in
          uw buurt doen.
        </h5>
      </div>
      <div class="row pt-3 justify-content-around px-2">
        <div class="col-5 input__box">
          <label for="Postcode" class="form-label">Postcode</label>
          <input
            type="text"
            v-model="postcode"
            class="form-control"
            id="Postcode"
            required
          />
        </div>
        <div class="col-5 input__box">
          <label for="huisnummer" class="form-label">huisnummer</label>
          <input
            type="text"
            v-model="housenumber"
            class="form-control"
            id="huisnummer"
            required
          />
        </div>
      </div>
      <div class="text-center pt-5">
        <button @click="validateInfo">
          bekijk het aanbod
          <img src="@/assets/images/forward.svg" class="ml-4" />
        </button>
      </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "postcode",
  data() {
    return {
      postcode: "",
      housenumber: "",
    };
  },
  methods: {
    validateInfo(): void {
      console.log(this.postcode, this.housenumber);
      this.$router.push({ name: "aanbod" });
    },
  },
});
</script>

<style lang="scss" scoped>
h4 {
  font-family: Rubik;
  font-weight: bold;
  font-size: 22px;
  line-height: 34px;
  text-align: center;
  color: #32b4d6;
}
h5 {
  font-family: Rubik;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #636363;
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
</style>