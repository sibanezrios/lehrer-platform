import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonio',
  type: 'document',
  fields: [
    defineField({
      name: 'site',
      title: 'Sitio',
      type: 'string',
      options: {
        list: [
          { title: 'Mighty Languages (majd-portfolio)', value: 'majd-portfolio' },
          { title: 'Deutsch Lehrer (lehrer-platform)', value: 'lehrer-platform' },
        ],
        layout: 'radio',
      },
      initialValue: 'majd-portfolio',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Cargo (opcional)',
      type: 'string',
      description: 'Ej: Clases de inglés',
    }),
    defineField({
      name: 'text',
      title: 'Testimonio',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Calificación (opcional)',
      type: 'number',
      options: { list: [1, 2, 3, 4, 5] },
      validation: (Rule) => Rule.min(1).max(5).integer(),
    }),
    defineField({
      name: 'photo',
      title: 'Foto (opcional)',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'text', media: 'photo' },
  },
})
