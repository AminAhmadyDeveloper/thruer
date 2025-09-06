import { render, screen } from "@testing-library/react";
import type { VariantProps } from "class-variance-authority";
import { describe, expect, it } from "vitest";
import { Button, buttonVariants } from "@/components/ui/button";

type ButtonVariants = VariantProps<typeof buttonVariants>["variant"];
type ButtonSizes = VariantProps<typeof buttonVariants>["size"];

describe("Button variants", () => {
  const variants: ButtonVariants[] = [
    "default",
    "destructive",
    "ghost",
    "link",
    "outline",
    "secondary",
  ];

  const sizes: ButtonSizes[] = ["default", "icon", "lg", "sm"];

  it.each(variants)("applies correct class of variant for %s", (variant) => {
    render(
      <Button variant={variant} size="default">
        Click
      </Button>,
    );
    const button = screen.getByRole("button", { name: /click/i });

    const expected = buttonVariants({ size: "default", variant });

    expect(button).toHaveClass(expected);
  });

  it.each(sizes)("applies correct class of size for %s", (size) => {
    render(
      <Button variant="default" size={size}>
        Click
      </Button>,
    );
    const button = screen.getByRole("button", { name: /click/i });

    const expected = buttonVariants({ size, variant: "default" });

    expect(button).toHaveClass(expected);
  });

  it("should be span tag instead of button", () => {
    render(
      <Button asChild>
        <span>Click</span>
      </Button>,
    );
    const button = screen.getByText("Click");

    expect(button.tagName).toBe("SPAN");
  });

  it("should show loading spinner and disable button", () => {
    render(<Button loading>Click</Button>);

    const button = screen.getByRole("button", { name: /click/i });

    expect(button).toBeDisabled();

    const expectedLoaderChild = button.firstElementChild as HTMLElement | null;
    expect(expectedLoaderChild).not.toBeNull();
    expect(expectedLoaderChild).toHaveClass("animate-spin");
  });
});
