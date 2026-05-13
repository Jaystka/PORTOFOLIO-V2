export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Contoh: Full Stack Development, Frontend Application',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'link',
      title: 'Live Demo Link',
      type: 'url',
    },
  ],
}