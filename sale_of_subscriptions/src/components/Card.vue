<template>
  <div
    class="card flex flex-col items-center bg-mainSecondary max-w-80 rounded-lg text-white p-4"
  >
    <div class="text-2xl mb-2">
      {{ card.name }}
    </div>
    <div class="mb-2">
      {{ card.description }}
    </div>
    <ul class="mb-auto">
      <li v-for="features in card.features" class="mb-2">
        {{ features }}
      </li>
    </ul>
    <div class="text-2xl text-center mb-2">
      {{ card.price }} <span v-if="Number(card.price)">руб.</span>
    </div>
    <div class="flex gap-x-2 mb-2">
      <div v-for="duration in card.duration_options">
        {{ duration }}
      </div>
    </div>
    <button class="card__button">{{ card.button }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["card"]);
</script>

<style scoped>
.card__button {
  background-color: #ffffff;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;
}

.card__button:focus-visible {
  box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
  transition: box-shadow 0.2s;
}

.card__button:active {
  background-color: #f7f7f7;
  border-color: #000000;
  transform: scale(0.96);
}

.card__button:disabled {
  border-color: #dddddd;
  color: #dddddd;
  cursor: not-allowed;
  opacity: 1;
}
</style>
