import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Card from "../Card.vue";

describe("Card.vue", () => {
  const cardData = {
    name: "Test Card",
    description: "This is a test card",
    features: ["Feature 1", "Feature 2"],
    price: "99",
    duration_options: ["Monthly", "Yearly"],
    button: "Select Card",
  };

  it("renders card name and description correctly", () => {
    const wrapper = shallowMount(Card, {
      props: { card: cardData },
    });

    expect(wrapper.text()).toContain(cardData.name);
    expect(wrapper.text()).toContain(cardData.description);
  });

  it("renders features correctly", () => {
    const wrapper = shallowMount(Card, {
      props: { card: cardData },
    });

    const featureElements = wrapper.findAll("li");
    expect(featureElements.length).toBe(cardData.features.length);

    cardData.features.forEach((feature, index) => {
      expect(featureElements[index].text()).toContain(feature);
    });
  });

  it("renders duration options", () => {
    const wrapper = shallowMount(Card, {
      props: { card: cardData },
    });

    const durationElements = wrapper.findAll(".flex.gap-x-2 > div"); // Убран лишний пробел после ".flex"
    expect(durationElements.length).toBe(cardData.duration_options.length);

    cardData.duration_options.forEach((duration, index) => {
      expect(durationElements[index].text()).toContain(duration);
    });
  });

  it("renders button text correctly", () => {
    const wrapper = shallowMount(Card, {
      props: { card: cardData },
    });

    const buttonElement = wrapper.find(".card__button");
    expect(buttonElement.text()).toContain(cardData.button);
  });

  it("button click event", async () => {
    const wrapper = shallowMount(Card, {
      props: { card: cardData },
    });

    await wrapper.find(".card__button").trigger("click");
    // Добавьте здесь проверки для событий при клике на кнопку
  });
});
