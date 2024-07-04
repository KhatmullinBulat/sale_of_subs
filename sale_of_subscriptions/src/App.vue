<template>
  <header class="bg-main py-6">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div>
        <img src="@/assets/logo.webp" alt="Логотип" />
      </div>
      <div>
        <button class="burger-button" @click="toggleMenu">
          <span :class="{ active: isActive }"></span>
          <span :class="{ active: isActive }"></span>
          <span :class="{ active: isActive }"></span>
        </button>
      </div>
    </div>
  </header>
  <main class="main">
    <section>
      <div class="hero__description container mx-auto px-4 py-8">
        <h1 class="text-4xl text-center mb-2">Hero Block</h1>
        <p class="text-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          corporis eaque temporibus maxime harum voluptas perspiciatis vero
          cupiditate facere? Recusandae molestias optio modi culpa ratione
          libero fugit, in facilis omnis.
        </p>
      </div>
    </section>
    <section class="py-4">
      <div class="container mx-auto px-4 flex flex-wrap justify-center gap-4">
        <Card v-for="card in cards" :key="card.id" :card="card"></Card>
      </div>
    </section>
  </main>
  <footer class="bg-main py-4">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div>
        <img src="@/assets/logo.webp" alt="Логотип" />
      </div>
      <div class="flex gap-x-4">
        <a href="https://vk.com">
          <IconVk class="max-w-14"></IconVk>
        </a>
        <a href="https://web.telegram.org">
          <IconTg class="max-w-14"></IconTg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Card from "./components/Card.vue";
import IconVk from "./components/icons/IconVk.vue";
import IconTg from "./components/icons/IconTg.vue";

const isActive = ref(false);

const toggleMenu = () => {
  isActive.value = !isActive.value;
};

const cards = ref([
  {
    id: 1,
    name: "Базовый план",
    description:
      "Идеально подходит для отдельных людей и небольших команд, которые только начинают свою работу.",
    price: "100",
    features: [
      "До 5 пользователей",
      "Базовая поддержка по электронной почте",
      "Доступ к основным функциям",
    ],
    duration_options: ["Ежемесячно", "Ежегодно"],
    button: "Выберите Базовый",
  },
  {
    id: 2,
    name: "Стандартный план",
    description:
      "Идеально подходит для растущего бизнеса, которому нужны более продвинутые функции.",
    price: "200",
    features: [
      "До 10 пользователей",
      "Приоритетная поддержка",
      "Расширенная аналитика",
      "Настраиваемый брендинг",
    ],
    duration_options: ["Ежемесячно", "Ежегодно"],
    button: "Выберите Стандартный",
  },
  {
    id: 3,
    name: "Профессиональный план",
    description:
      "Предназначен для хорошо зарекомендовавших себя предприятий, стремящихся расширить масштабы своей деятельности.",
    price: "400",
    features: [
      "Неограниченное количество пользователей",
      "Круглосуточная поддержка премиум-класса",
      "Расширенные функции безопасности",
      "Интеграция со сторонними приложениями",
      "Выделенный менеджер аккаунтов",
    ],
    duration_options: ["Ежемесячно", "Ежегодно"],
    button: "Выберите Pro",
  },
  {
    id: 4,
    name: "Корпоративный план",
    description:
      "Индивидуальные решения для крупных организаций со сложными потребностями.",
    price: "Свяжитесь с нами для получения ценового предложения",
    features: [
      "Настраиваемые роли пользователей",
      "Поддержка на основе SLA",
      "Помощь в переносе данных",
      "Единый вход",
      "Настраиваемая продолжительность и функции",
      "Специальные учебные занятия",
      "Приоритетный доступ к новым функциям",
    ],
    duration_options: ["Настраиваемый"],
    button: "связаться с нами",
  },
]);
</script>

<style scoped>
.main {
  background-image: url(./assets/hero.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.burger-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 30px;
}

.burger-button span {
  display: block;
  width: 100%;
  height: 4px;
  background-color: black;
  transition: all 0.3s ease;
}

.burger-button span:nth-child(1) {
  transform-origin: top left;
}

.burger-button span:nth-child(3) {
  transform-origin: bottom left;
}

.burger-button span.active:nth-child(1) {
  transform: rotate(45deg) translate(-10px, 0px);
}

.burger-button span.active:nth-child(2) {
  opacity: 0;
}

.burger-button span.active:nth-child(3) {
  transform: rotate(-45deg) translate(-5px, -5px);
}
</style>
