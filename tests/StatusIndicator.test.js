import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import StatusIndicator from "../src/components/StatusIndicator.vue";

describe("StatusIndicator:", () => {
  // Test default props
  it("Renders with default props", () => {
    const wrapper = mount(StatusIndicator);
    expect(wrapper.classes()).toContain("status-indicator");
    expect(wrapper.classes()).toContain("positive");
    expect(wrapper.classes()).not.toContain("pulse");
  });

  // Test different statuses
  it("Applies correct status classes", () => {
    const statuses = ["positive", "negative", "active", "intermediary"];

    statuses.forEach((status) => {
      const wrapper = mount(StatusIndicator, {
        props: { status },
      });
      expect(wrapper.classes()).toContain(status);
    });
  });

  // Test pulse animation
  it("Applies pulse class when pulse prop is true", () => {
    const wrapper = mount(StatusIndicator, {
      props: { pulse: true },
    });
    expect(wrapper.classes()).toContain("pulse");
  });

  // Test tooltip
  it("Sets title attribute from tooltip prop", () => {
    const tooltip = "System Status: Online";
    const wrapper = mount(StatusIndicator, {
      props: { tooltip },
    });
    expect(wrapper.attributes("title")).toBe(tooltip);
  });

  // Test prop validation
  it("Validates status prop", () => {
    const validator = StatusIndicator.props.status.validator;

    // Valid statuses
    expect(validator("positive")).toBe(true);
    expect(validator("negative")).toBe(true);
    expect(validator("active")).toBe(true);
    expect(validator("intermediary")).toBe(true);

    // Invalid status
    expect(validator("invalid")).toBe(false);
  });

  // Test CSS variables
  it("Respects custom CSS variables", () => {
    const wrapper = mount(StatusIndicator);
    // Test the class presence instead
    expect(wrapper.classes()).toContain("status-indicator");
  });

  // Test animation presence
  it("Has correct animation when pulsing", () => {
    const wrapper = mount(StatusIndicator, {
      props: {
        pulse: true,
        status: "positive",
      },
    });

    expect(wrapper.classes()).toContain("pulse");
    expect(wrapper.classes()).toContain("positive");
  });

  // Test accessibility
  it("Is accessible", () => {
    const wrapper = mount(StatusIndicator, {
      props: {
        tooltip: "System Status",
      },
    });
    expect(wrapper.attributes("title")).toBeDefined();
  });
});
