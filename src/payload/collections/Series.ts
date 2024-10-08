import { CollectionConfig } from 'payload';

const Series: CollectionConfig = {
  slug: 'series',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,    // Consider limiting public read access if needed
    create: () => true,  // Consider restricting creation to authenticated users
    update: () => true,  // Consider restricting updates to content owners
    delete: () => true,  // Consider restricting deletion to admins or content owners
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar'
      }
    },
    {
      name: 'poster',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'releaseDate',
      type: 'date',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'seasons',
      type: 'array',
      fields: [
        {
          name: 'seasonNumber',
          type: 'number',
          required: true,
        },
        {
          name: 'episodes',
          type: 'relationship',
          relationTo: 'episodes',
          hasMany: true,
        },
      ],
    },
  ],
  hooks: {
    beforeValidate: [
      async ({ data }) => {
        // Ensure data exists and that we have a title but no slug yet
        if (data?.name && !data.slug) {
          // Generate the slug from the title if it does not exist
          data.slug = data.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
            .replace(/(^-|-$)+/g, '');   // Remove leading or trailing hyphens
        }
      }
    ],
  },
};

export default Series;
