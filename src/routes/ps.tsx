import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ps")({
  beforeLoad: () => {
    throw redirect({
      href: "/SNUC Hacks 26' - Problem Statements.pdf",
    });
  },
});
