<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="318" height="67" viewBox="0 0 318 67">
  <defs>
    <linearGradient id="linear-gradient" x1="1" y1="0.5" x2="0" y2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#32b4d6"/>
      <stop offset="1" stop-color="#2c9ebc"/>
    </linearGradient>
    <filter id="Rectangle_39" x="0" y="0" width="318" height="67" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="button_form" data-name="button form" transform="translate(9 6)">
    <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_39)">
      <rect id="Rectangle_39-2" data-name="Rectangle 39" width="300" height="49" rx="23" transform="translate(9 6)" fill="url(#linear-gradient)"/>
    </g>
    <text id="opslaan_en_bevestigen" data-name="opslaan en bevestigen" transform="translate(30 30)" fill="#fff" font-size="16" font-family="Rubik-Regular, Rubik" letter-spacing="0.091em"><tspan x="0" y="0">{{value}}</tspan></text>
    <g id="Shape_1055" data-name="Shape 1055" transform="translate(268.93 19.767)">
      <path id="Shape_1055-2" data-name="Shape 1055" d="M3268.262,919.1l-.564.551a.329.329,0,0,0,0,.472l4.42,4.317H3261.08a.338.338,0,0,0-.342.334v.779a.338.338,0,0,0,.342.334h11.039l-4.42,4.318a.329.329,0,0,0,0,.472l.564.551a.348.348,0,0,0,.484,0l5.967-5.828a.329.329,0,0,0,0-.472l-5.967-5.828A.348.348,0,0,0,3268.262,919.1Z" transform="translate(-3260.737 -919.003)" fill="#fff"/>
    </g>
  </g>
</svg>

</template>

<script lang="ts">
 import {defineComponent} from 'vue'
export default defineComponent({
    name: 'authButton',
    props:{
        value: {
            type: String,
            required: true
        }
    }
})
</script>

<style>

</style>