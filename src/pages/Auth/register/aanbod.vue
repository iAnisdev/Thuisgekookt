<template>
  <section class="page">
    <div class="container">
      <h6>Straatnaam 235</h6>
      <h6>1000 AB Amsterdam</h6>
      <h5>
        Binnen 1.5 km van <br />
        uw adres is het volgende <br />
        aanbod:
      </h5>
    </div>
    <div>
      <div class="card pt-3 px-4">
        <div class="row">
          <div class="col-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div class="col-8">
            <div class="col">
              <h5>Ik wil regelmatige maaltijdervice +</h5>
              <p>
                Er zijn 130 koks die open staan voor een vaste 1-op-1 koppeling
              </p>
            </div>
          </div>
          <div class="col-2">
            <img src="@/assets/images/info.svg" class="icon__info ml-4" />
          </div>
        </div>
      </div>
      <div class="card pt-3 px-4">
        <div class="row">
          <div class="col-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div class="col-8">
            <div class="col">
              <h5>Ik wil af en toe een maaltijd bestellen</h5>
              <p>Er zijn nu 130 maaltijden beschikbaar</p>
            </div>
          </div>
          <div class="col-2">
            <img src="@/assets/images/info.svg" class="icon__info ml-4" />
          </div>
        </div>
      </div>
      <div class="card pt-3 px-4">
        <div class="row">
          <div class="col-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div class="col-8">
            <div class="col">
              <h5>Ik zoek een Kok voor het koken voor een grote groep</h5>
              <p>Er zijn nu 5 koks beschikbaar</p>
            </div>
          </div>
          <div class="col-2">
            <img src="@/assets/images/info.svg" class="icon__info ml-4" />
          </div>
        </div>
      </div>
    </div>
    <div class="text-center pt-3">
      <button @click="validateInfo">
        Uw situatie &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
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
      this.$router.push({ name: "kwetsbaar" });
    },
  },
});
</script>

<style lang="scss" scoped>
h6 {
  font-family: Rubik;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
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

.card {
  border-radius: 21px;
  background: #fff;
  margin-top: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  .form-check-input {
    width: 1.25em;
    height: 1.25em;
  }
  .form-check-input:checked {
    background-color: #32b4d6;
    border-color: #32b4d6;
  }
  .icon__info {
    width: 20px;
    height: 20px;
  }
  h5 {
    font-family: Rubik;
    font-weight: bold;
    font-size: 17px;
    line-height: 19px;
    text-align: left;
    color: #32b4d6;
  }
  p {
    font-family: Rubik;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    color: #636363;
  }
}
</style>