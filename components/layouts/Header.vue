<template>

  <header class="header">

    <div class="wrapper">

      <div class="header_leftSide">

        <div class="header_balance">

          <div class="header_balance_iconBlock">

            <fa-icon class="header_balance_icon fac" :icon="['fac', 'wallet']"/>

          </div>

          <span class="header_balance_title">Баланс:</span>

          <b class="header_balance_val">14 000 ₽</b>

        </div>

        <div class="header_points">

          <span class="header_points_title">Skill points:</span>

          <b class="header_points_val">1350</b>

          <fa-icon class="header_points_icon" :icon="['fac', 'skill-points']" />

        </div>

      </div>

      <div class="header_rightSide">

        <nuxt-link class="header_toProfile" to="/">

          <fa-icon class="header_toProfile_icon" :icon="['fac', 'user-profile']" />

          <span class="header_toProfile_userName">Константин Кондратов</span>

        </nuxt-link>

      </div>

    </div>

  </header>

</template>
<script>
  export default {
    name: "Header",
  }
</script>
