export const siteSettingsType = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "brandText",
      title: "Brand Text",
      type: "string",
      initialValue: "JAYS.",
    },
    {
      name: "navbarItems",
      title: "Navbar Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Label",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "sectionId",
              title: "Section ID",
              type: "string",
              description:
                "ID section pada halaman, contoh: hero, experience, projects, skills",
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "sectionId",
            },
          },
        },
      ],
      initialValue: [
        { name: "Home", sectionId: "hero" },
        { name: "Experience", sectionId: "experience" },
        { name: "Projects", sectionId: "projects" },
        { name: "Skills", sectionId: "skills" },
      ],
    },
    {
      name: "contactButton",
      title: "Contact Button",
      type: "object",
      fields: [
        {
          name: "label",
          title: "Label",
          type: "string",
          initialValue: "CONTACT ME",
        },
        {
          name: "href",
          title: "Link URL",
          type: "url",
          description:
            "Contoh: mailto:email@domain.com atau https://wa.me/628xxxx",
        },
        {
          name: "openInNewTab",
          title: "Open in New Tab",
          type: "boolean",
          initialValue: true,
        },
      ],
    },
  ],
};
