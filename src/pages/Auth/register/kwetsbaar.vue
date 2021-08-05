<template>
  <section>
    <ul class="nav nav-pills">
      <li class="nav-item col-2-5">
        <a
          :class="active === 'application' ? 'nav-link active' : 'nav-link'"
          aria-current="page"
          >Aanvraag</a
        >
      </li>
      <li class="nav-item col-2-5">
        <a :class="active === 'data' ? 'nav-link active' : 'nav-link'"
          >GEGEVENS</a
        >
      </li>
      <li class="nav-item col-2-5">
        <a :class="active === 'usage' ? 'nav-link active' : 'nav-link'"
          >Gebruik</a
        >
      </li>
      <li class="nav-item col-2-5">
        <a :class="active === 'account' ? 'nav-link active' : 'nav-link'"
          >Account</a
        >
      </li>
      <li class="nav-item col-2-5">
        <a :class="active === 'confirmation' ? 'nav-link active' : 'nav-link'"
          >Bevestiging</a
        >
      </li>
    </ul>
    <div class="container">
      <component :is="active" @next="nextTab"></component>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import application from "@/components/register/application.vue";
import data from "@/components/register/data.vue";
import usage from "@/components/register/usage.vue";
import account from "@/components/register/account.vue";
import confirmation from "@/components/register/confirmation.vue";
export default defineComponent({
  name: "kwetsbaar",
  components: {
    application,
    data,
    usage,
    account,
    confirmation,
  },
  data() {
    return {
      active: "application",
    };
  },
  methods: {
    nextTab(tab: string): void {
      this.active = tab;
    },
  },
});
</script>

<style lang="scss">
.nav-pills {
  border-radius: 16.5px;
  background: #fff;
  margin: auto;
  padding: 1px;
}
.nav-link {
  font-weight: normal;
  font-size: 0.61em;
  line-height: 15px;
  text-align: center;
  color: #000;
  text-transform: uppercase;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  border-radius: 16.5px;
  background: #17808b;
  text-align: center;
}
.col-2-5 {
  width: 20%;
}
.nav-item:last-child {
  a {
    margin-left: -1vw;
  }
}
</style>
