import project from './project'
import experience from './experience'

export const schemaTypes = [
  project,
  experience,
  // Hero Slide Schema
  {
    name: 'heroSlide',
    title: 'Hero Slide',
    type: 'document',
    fields: [
      { name: 'label', title: 'Label', type: 'string' },
      { name: 'iconName', title: 'Icon Name (Lucide)', type: 'string', description: 'Contoh: Code2, GraduationCap' },
      { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
    ],
  },
  // Skill Schema
  {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      { name: 'category', title: 'Category', type: 'string' },
      { name: 'items', title: 'Items', type: 'string' },
      { name: 'iconName', title: 'Icon Name (Lucide)', type: 'string' },
    ],
  },
  // Social Link Schema
  {
    name: 'socialLink',
    title: 'Social Link',
    type: 'document',
    fields: [
      { name: 'url', title: 'URL', type: 'url' },
      { name: 'iconName', title: 'Icon Name (Lucide)', type: 'string' },
    ],
  },
  // Language Schema
  {
    name: 'language',
    title: 'Programming Language',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'logo', title: 'Logo (SVG preferred)', type: 'image' },
    ],
  },
]