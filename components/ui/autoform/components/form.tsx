import React from "react";

export const Form = React.forwardRef<
  HTMLFormElement,
  React.ComponentProps<"form">
>(({ children, ...props }, ref) => {
  return (
    <form className="space-y-4" ref={ref} {...props}>
      {children}
    </form>
  );
});
