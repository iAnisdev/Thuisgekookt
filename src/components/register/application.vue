<template>
  <section class="page mt-2">
    <div class="pt-4">
      <h3>
        Zit u momenteel in <br />
        een kwetsbare situatie?
      </h3>
      <p class="info">
        Veel van onze koks geven aan graag voor <br />
        mensen te koken die in een kwetsbare <br />
        positie zitten.
      </p>
    </div>
    <div class="card-section">
      <div class="choice-card pt-3 px-4">
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
              <h5>Ja, ik zit een kwetsbare positie</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              </p>
            </div>
          </div>
          <div class="col-2">
            <img src="@/assets/images/info.svg" class="icon__info ml-4" />
          </div>
        </div>
      </div>
      <div class="choice-card pt-3 px-4">
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
              <h5>Nee, ik zoek wel een thuiskok</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </p>
            </div>
          </div>
          <div class="col-2">
            <img src="@/assets/images/info.svg" class="icon__info ml-4" />
          </div>
        </div>
      </div>
    </div>
    <div class="text-center pt-2">
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
  name: "application",
  data() {
    return {};
  },
  methods: {
    validateInfo(): void{
      this.$emit("next", "data");
    },
  },
});
</script>


<style lang="scss" scoped>
.page{
  max-height: 72vh;
}
h3 {
  font-family: Rubik;
  font-weight: bold;
  font-size: 25px;
  line-height: 34px;
  text-align: center;
  color: #32b4d6;
}
.card-section {
  max-width: 700px;
  margin: auto;
}
.info {
  font-family: Rubik;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  text-align: center;
  color: #636363;
}
</style>
