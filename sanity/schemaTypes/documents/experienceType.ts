export const experienceType = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "period",
      title: "Period",
      type: "string",
      description: "Contoh: 2025 - Present",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "company",
      title: "Company Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
