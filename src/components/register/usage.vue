<template>
  <section class="page mt-2">
    <div class="mt-2">
      <p>Selecteer welke dag(en) u het liefst een maaltijd ontvangt</p>
      <div class="btn-row">
        <div v-for="(day, index) in days" :key="index">
          <input type="checkbox" class="btn-check" autocomplete="off" />
          <label :class="day.selected ? 'btn btn-primary' : 'btn'" @click="day.selected = !day.selected">{{ day.name }}</label>
        </div>
      </div>
      <div class="mt-3">
        <div class="row">
          <div class="col-6">
            <p class="section--title">Hoe vaak per week</p>
            <div class="btn-group" role="group" >
              <button type="button" class="btn btn-primary btn-stepper" @click="updatePerWeek('-')">-</button>
              <button type="button" class="btn btn-primary btn-stepper btn-value" disabled>{{perweek}}</button>
              <button type="button" class="btn btn-primary btn-stepper"  @click="updatePerWeek('+')">+</button>
            </div>
          </div>
          <div class="col-6">
            <p class="section--title">porties</p>
            <div class="btn-group" role="group" >
              <button type="button" class="btn btn-primary btn-stepper" @click="updatePorties('-')">-</button>
              <button type="button" class="btn btn-primary btn-stepper btn-value" disabled>{{porties}}</button>
              <button type="button" class="btn btn-primary btn-stepper"  @click="updatePorties('+')">+</button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <p class="section--title">Ophalen/brengen</p>
        <div class="row">
          <div class="col-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="pickup"
                value="Ophalen"
                id="Ophalen"
                checked
              />
              <label class="form-check-label" for="Ophalen"> Ophalen </label>
            </div>
          </div>
          <div class="col-3 offset-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="pickup"
                value="Bezorgen"
                id="Bezorgen"
              />
              <label class="form-check-label" for="Bezorgen"> Bezorgen </label>
            </div>
          </div>
          <div class="col-4 offset-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="pickup"
                value="Kan allebei"
                id="Kan allebei"
              />
              <label class="form-check-label" for="Kan allebei">
                Kan allebei
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="col-12 input__box px-2">
          <label for="huisnummer" class="form-label">Dieetwensen</label>
          <input
            type="text"
            v-model="housenumber"
            class="form-control"
            id="huisnummer"
            required
          />
        </div>
        <div class="col-12 input__box px-2 mt-2">
          <label for="huisnummer" class="form-label">Zorgvraag</label>
          <input
            type="text"
            v-model="housenumber"
            class="form-control"
            id="huisnummer"
            required
          />
        </div>
      </div>
      <div class="text-center mt-3">
        <button @click="validateInfo">
          gebruikersnaam en wachtwoord
          <img src="@/assets/images/forward.svg" class="ml-4" />
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "usage",
  data() {
    return {
      days: [
        {
          name: "MA",
          selected: false,
        },
        {
          name: "DI",
          selected: false,
        },
        {
          name: "WO",
          selected: false,
        },
        {
          name: "DO",
          selected: false,
        },
        {
          name: "VR",
          selected: true,
        },
        {
          name: "ZA",
          selected: true,
        },
        {
          name: "ZO",
          selected: false,
        },
      ],
      perweek: 2,
      porties: 1
    }
  },
  methods:{
    updatePerWeek(type: string): void{
      if(type === '+'){
        this.perweek++
      }else{
        if(this.perweek > 1){
          this.perweek--
        }
      }
    },
    updatePorties(type: string): void{
      if(type === '+'){
        this.porties++
      }else{
        if(this.porties > 1){
          this.porties--
        }
      }
    },
    validateInfo(): void{
      this.$emit('next' , 'account')
    }
  }
});
</script>

<style lang="scss" scoped>
p {
  width: 363px;
  height: 53px;
  font-family: Rubik;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;
  text-align: left;
  color: #787878;
}

.btn {
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.09em;
  line-height: 11px;
  text-align: left;
  border: 1px solid #31b0d2;
  color: #31b0d2;
  border-radius: 20px;
  margin-left: 2px;
}

.btn-row {
  display: flex;
  flex-direction: row;
}
.btn-primary {
  background-color: #31b0d2;
  letter-spacing: 0.09em;
  line-height: 11px;
  text-align: left;
  color: #fff;
}
.section--title {
  font-family: Rubik;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  text-align: left;
  color: #787878;
  height: 15px;
  text-transform: uppercase;
}
.form-check-input {
  width: 1.25em;
  height: 1.25em;
}
.form-check-input:checked {
  background-color: #32b4d6;
  border-color: #32b4d6;
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
button {
  width: 350px;
}
.btn-stepper {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  width: 50px;
  font-family: OpenSans;
  font-weight: normal;
  font-size: 28px;
  line-height: 12px;
  text-align: center;
  color: #fff;
  background: #a5a5a5;
  border: none;
  border-radius: 5px;
}
.btn-value {
  background: #fff;
  color: #222;
}
</style>