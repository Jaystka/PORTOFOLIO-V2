export const heroSlideType = {
  name: "heroSlide",
  title: "Hero Slide",
  type: "document",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "iconName",
      title: "Icon Name (Lucide)",
      type: "string",
      description: "Contoh: Code2, GraduationCap",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
