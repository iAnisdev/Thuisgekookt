<template>
  <header>
    <div class="container-fluid pt-3 py-2">
      <div class="row px-2 justify-content-between">
        <div class="col-4 mr-auto text-left pt-2">
          <img src="@/assets/images/logo.svg" />
          <p class="title pt-3">{{title}}</p>
        </div>
        <div class="col-auto">
          <div class="row-end justify-content-end">
            <div class="mt-2 pr-2" v-if="showBack">
                <svg xmlns="http://www.w3.org/2000/svg" width="67.812" height="20" viewBox="0 0 67.812 20">
                  <g id="Group_122" data-name="Group 122" transform="translate(-115.094 -714)">
                    <text id="Terug" transform="translate(137.906 730)" fill="#636363" font-size="17" font-family="Rubik-Regular, Rubik"><tspan x="0" y="0">Terug</tspan></text>
                    <g id="Shape_1055" data-name="Shape 1055" transform="translate(129.17 730.162) rotate(180)">
                      <path id="Shape_1055-2" data-name="Shape 1055" d="M3268.262,919.1l-.564.551a.329.329,0,0,0,0,.472l4.42,4.317H3261.08a.338.338,0,0,0-.342.334v.779a.338.338,0,0,0,.342.334h11.039l-4.42,4.318a.329.329,0,0,0,0,.472l.564.551a.348.348,0,0,0,.484,0l5.967-5.828a.329.329,0,0,0,0-.472l-5.967-5.828A.348.348,0,0,0,3268.262,919.1Z" transform="translate(-3260.737 -919.003)" fill="#434343"/>
                    </g>
                  </g>
                </svg>
            </div>
            <div>
              <img src="@/assets/images/close.svg" class="close--icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "authNavbar",
  props:{
    showBack:{
      type: Boolean,
      required: true,
      default: false
    },
    title:{
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.title {
  font-family: Rubik;
  font-weight: bold;
  font-size: 22px;
  width: 200px;
  line-height: 26px;
  text-align: left;
  color: #646464;
}
.row-end {
  display: flex;
  flex-direction: row;
  margin: auto;
}
.back--icon {
  height: 24px;
}
.back {
  font-family: Rubik;
  font-weight: normal;
  font-size: 17px;
  color: #636363;
}
.close--icon{
  height: 48px;
}
</style>
