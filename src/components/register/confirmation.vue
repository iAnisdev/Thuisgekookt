<template>
  <section class="page container mt-4 pb-4">
    <div class="mt-2">
      <h3>Bevestig uw aanvraag</h3>
      <h5>
        Ik wil regelmatige <br />
        maaltijdervice +
      </h5>
    </div>
    <div class="row mt-4">
      <div class="col-4">
        <div class="btn-row">
          <div v-for="(day, index) in ['DO', 'VR']" :key="index">
            <input type="checkbox" class="btn-check" autocomplete="off" />
            <label class="btn btn-secondary">{{ day }}</label>
          </div>
        </div>
      </div>
      <div class="col-8">
        <h6>2 keer per week</h6>
        <h6>Ophalen</h6>
      </div>
    </div>
    <div class="col mt-3">
      <p class="info-title">Uw gegevens</p>
      <p class="user-info">Alex de Groot</p>
      <p class="user-info">Zeestraat 235</p>
      <p class="user-info">2211 WZ Noordwijkerhout</p>
      <p class="user-info">25-03-1978</p>
      <p class="user-info">test@test.nl</p>
      <p class="user-info">06 53415744</p>
      <button class="btn btn-outline-info mt-2">
        <img src="@/assets/images/backward.svg" class="backward--icon" />
        aanpassen
      </button>
    </div>
    <div class="mt-4">
      <h4>Wat er nu gaat gebeuren</h4>
      <p class="instruction">
        <span class="index">1</span>&nbsp; Lorem ipsum dolor sit amet
      </p>
      <p class="instruction">
        <span class="index">2</span>&nbsp; Lorem ipsum dolor sit amet
      </p>
      <p class="instruction">
        <span class="index">3</span>&nbsp; Lorem ipsum dolor sit amet
      </p>
      <p class="instruction">
        <span class="index">4</span>&nbsp; Lorem ipsum dolor sit amet
      </p>
      <p class="instruction">
        <span class="index">5</span>&nbsp; Lorem ipsum dolor sit amet
      </p>
    </div>
    <div class="mt-3">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Ik ga akkoord met
        </label>
      </div>
      <div class="form-check mt-2">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label" for="flexCheckChecked">
          Ik ga akkoord met
        </label>
      </div>
    </div>
    <div class="text-center mt-5 pb-2">
      <button @click="validateInfo">
        bevestigen &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img src="@/assets/images/forward.svg" class="ml-4" />
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "confirmation",
  data(){
    return{

    }
  },
  methods:{
    validateInfo(): void{
      this.$router.push({name: 'bevestiging'})
    }
  }
});
</script>


<style lang="scss" scoped>
.page {
  overflow: scroll;
}
h3 {
  font-family: Rubik;
  font-weight: bold;
  font-size: 25px;
  line-height: 34px;
  text-align: left;
  color: #32b4d6;
}
h5 {
  font-family: Rubik;
  font-weight: bold;
  font-size: 17px;
  line-height: 19px;
  text-align: left;
  color: #777;
}

.btn-row {
  display: flex;
  flex-direction: row;
}
.btn-secondary {
  letter-spacing: 0.09em;
  line-height: 11px;
  text-align: left;
  color: #fff;
  background: #949494;
  border: none;
  padding: 15px;
  border-radius: 20px;
}
h6 {
  font-family: Rubik;
  font-weight: bold;
  font-size: 17px;
  line-height: 16px;
  text-align: left;
  color: #949494;
}
.info-title {
  font-family: Rubik;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  text-align: left;
  color: #787878;
}
.user-info {
  font-family: Rubik;
  font-weight: normal;
  font-size: 16px;
  line-height: 14px;
  text-align: left;
  color: #636363;
}
.backward--icon {
  width: 18px;
  margin-top: -1px;
  height: 18px;
}
.btn-outline-info {
  width: 150px;
  height: 27px;
  border-radius: 50px;
  padding: 1px;
  background: rgba(23, 128, 139, 0);
  border: 1px solid #32b4d6;
  font-family: Rubik;
  font-weight: normal;
  font-size: 12px;
  letter-spacing: 0.06em;
  line-height: 13px;
  text-align: center;
  color: #32b4d6;
}
h4,
.index {
  font-family: Rubik;
  font-weight: bold;
  font-size: 17px;
  line-height: 19px;
  text-align: left;
  color: #32b4d6;
}
.instruction {
  font-family: Rubik;
  font-weight: 400;
  font-size: 18px;
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
  .form-check-label{
    font-family: Rubik;
font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: left;
color: #636363;
margin-left: 2vw;
  }
</style>