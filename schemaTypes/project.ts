// schemas/project.ts
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description shown on the project card.',
    },
    {
      name: 'youtubeVideoId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'Just the ID, not the full URL (e.g., dQw4w9WgXcQ)',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    },
    {
      name: 'caseStudy',
      title: 'Case Study',
      type: 'object',
      fields: [
        { name: 'challenge', title: 'Challenge', type: 'text' },
        { name: 'solution', title: 'Solution', type: 'text' },
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Feature Title', type: 'string' },
                { name: 'description', title: 'Feature Description', type: 'text' },
              ],
            },
          ],
        },
        { name: 'results', title: 'Results', type: 'text' },
      ],
      options: {
        collapsible: true,
        collapsed: false,
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
  },
}