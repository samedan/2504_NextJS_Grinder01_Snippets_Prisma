### Source

> https://www.udemy.com/course/next-js-the-complete-developers-guide/learn/lecture/40830118#questions/20863688

### This Git

> https://github.com/samedan/2504_NextJS_Grinder01_Snippets_Prisma

### Prisma

> npm i prisma

# Initialize Prisma

> npx prisma init --datasource-provider sqlite

### Async Await Next 15+

> https://nextjs.org/docs/messages/sync-dynamic-apis

# Create migration

> /prisma/schema.prisma

# Run migration

> npx prisma migrate dev

### Initialize DBB

/src/db/index.ts -> export const db = new PrismaClient();

### Server Action - submit a form

> SnippetCreatePage ->'use server';

### Server components - Client component

### Not Found page

# Closest to the requestetd page

> import { notFound } from "next/navigation";

### Editing pages

> /src/app/snipptes/[id]/edit/page.tsx -> 'id' passed on to last page through params

### React Monaco editor (hooks), Client component

### (NOT possible) Use server action in client component

> snippet-edit-form.tsx -> Not working in client

### Option1: Pass ServerAction from ServerComponent to ServerClient

### Option2: Pass server functions (actions) from other files

# Form data comes from State with 'bind', not Form

> <form action={editSnippetAction}></form>

> editSnippetAction = actions.editSnippet.bind()

### Errors

> /src/app/snippets/new/error.tsx

# Return error as message

```
if (err instanceof Error) {
      return {
        message: err.message,
      };
    }
```

> ![redirectlasta](https://github.com/samedan/2504_NextJS_Grinder01_Snippets_Prisma/blob/main/_printscreens/01printscreen.jpg)

### Cache & Dynamic pages

# Force dynamic page

> export const dynamic = 'force-dynamic';

> export const revalidate = 0;

> /src/actions.index.ts -> revalidatePath("/");

> /src/actions.index.ts -> revalidatePath(`/snippets/${id}`);

# Static [id] pages

```
export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => {
    return { id: snippet.id.toString() };
  });
}
```
