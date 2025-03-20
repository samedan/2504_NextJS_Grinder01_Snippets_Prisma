### Source

> https://www.udemy.com/course/next-js-the-complete-developers-guide/learn/lecture/40830118#questions/20863688

### Prisma

> npm i prisma

# Initialize Prisma

> npx prisma init --datasource-provider sqlite

# Create migration

> /prisma/schema.prisma

# Run migration

> npx prisma migrate dev

### Initialize DBB

/src/db/index.ts -> export const db = new PrismaClient();

### Server Action - submit a form

> SnippetCreatePage ->'use server';

### Server components - Client component
