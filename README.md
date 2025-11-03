# Sarbit

## Sarbit – Content Update Guide

This guide explains how to add or update collaborators, FAQs, gallery images, products, testimonials, and contact details. All content lives in the `data` folder, with related images in the `public` folder.

### Quick Index

- [Add or update collaborators](#add-or-update-collaborators)
- [Add or update FAQs](#add-or-update-faqs)
- [Add or update gallery images](#add-or-update-gallery-images)
- [Add or update products](#add-or-update-products)
- [Add or update testimonials](#add-or-update-testimonials)
- [Update contact details](#update-contact-details)

Notes:

- Image files must be placed under `public/...`, and referenced using leading slash paths like `/collaborators/logo.png`.
- After saving changes in `data/*.tsx`, your site should reflect updates. If running a dev server, refresh the page.

---

### Add or update collaborators

Files involved:

- Data: `data/collaboratorsData.tsx`
- Images: `public/collaborators/`

Data shape in `collaboratorsData.tsx` is an array of objects with `name`, `src`, `href`:

```ts
export const collaboratorsData = [
  {
    name: "AIIMS",
    src: "/collaborators/aiims.png",
    href: "https://www.aiims.edu/",
  },
  // ...
];
```

Steps to add a new collaborator:

1. Place the collaborator logo in `public/collaborators/` (PNG/SVG/JPG). Example: `public/collaborators/new-collab.png`.
2. Open `data/collaboratorsData.tsx`.
3. Append a new object to the array:
   ```ts
   {
     name: "New Collaborator",
     src: "/collaborators/new-collab.png",
     href: "https://www.new-collaborator.com/",
   }
   ```
4. Save the file.

Edits (rename/update/remove):

- Rename: change the `name` string.
- Logo: replace the file under `public/collaborators/` and update `src` if filename changes.
- Link: update `href`.
- Remove: delete the object from the array.

Validation tips:

- Ensure `src` starts with `/collaborators/` and matches an existing file in `public/collaborators/`.

---

### Add or update FAQs

Files involved:

- Data: `data/faqData.tsx`

Types and shape:

```ts
export type FAQItem = {
  id: string;
  icon: IconName; // from lucide-react/dynamic
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  { id: "item-1", icon: "cpu", question: "...", answer: "..." },
  // ...
];
```

Steps to add a new FAQ:

1. Open `data/faqData.tsx`.
2. Append a new object to `faqItems`:
   ```ts
   {
     id: "item-6",           // unique id string
     icon: "help-circle",     // any valid Lucide icon name
     question: "Your question here?",
     answer: "Your concise answer here.",
   }
   ```
3. Save the file.

Edits (rename/update/remove):

- Update text by modifying `question`/`answer`.
- Change icon by updating `icon` to another Lucide name (e.g., "cpu", "target", "box", "award", "map-pin").
- Remove by deleting the object.

Validation tips:

- `id` must be unique.
- `icon` must be a valid `IconName` from Lucide. Refer to Lucide icon names on their documentation.

---

### Add or update gallery images

Files involved:

- Data: `data/galleryData.tsx`
- Images: `public/gallery/`

Data shape:

```ts
export const galleryData = [
  {
    id: 1,
    src: "/gallery/image1.jpg",
    alt: "...",
    title: "...",
    span: "col-span-1",
  },
  // ...
];
```

Steps to add a new gallery item:

1. Add the image file to `public/gallery/`. Example: `public/gallery/event-2025.jpg`.
2. Open `data/galleryData.tsx`.
3. Append a new object:
   ```ts
   {
     id: 6, // unique incremental number
     src: "/gallery/event-2025.jpg",
     alt: "Short accessible alt text",
     title: "Descriptive title shown in UI",
     span: "col-span-1" // or "sm:col-span-2" for wider tiles
   }
   ```
4. Save the file.

Edits (rename/update/remove):

- Replace image: drop a new file in `public/gallery/` and update `src`.
- Text: update `alt` and `title`.
- Layout: adjust `span` (e.g., `col-span-1`, `sm:col-span-2`).
- Remove: delete the object.

Validation tips:

- `src` must map to a file inside `public/gallery/`.
- Keep `id` unique and numeric.

---

### Add or update products

Files involved:

- Data: `data/productData.tsx`
- Images: `public/products/`

Data shape is an object keyed by ids like `item-1`:

```ts
export const productsData = {
  "item-1": {
    title: "...",
    description: "...",
    image: "/products/medical.png",
    alt: "...",
  },
  // ...
};
```

Steps to add a new product:

1. Place the product image in `public/products/`. Example: `public/products/sensor-pro.png`.
2. Open `data/productData.tsx`.
3. Add a new key (use next index, e.g., `item-5`):
   ```ts
   "item-5": {
     title: "Product Name",
     description: "Short, clear description of the product.",
     image: "/products/sensor-pro.png",
     alt: "Product Name",
   },
   ```
4. Save the file.

Edits (rename/update/remove):

- Update any of `title`, `description`, `image`, `alt`.
- Remove by deleting the key-value pair.

Validation tips:

- Ensure the new key (e.g., `item-5`) is unique.
- `image` must point to an existing file under `/products/`.

---

### Add or update testimonials

Files involved:

- Data: `data/testimonialsData.tsx`

Data shape is an array of objects:

```ts
export const testimonials = [
  {
    image: "https://...",
    text: "...",
    name: "...",
    username: "@...",
    social: "https://...",
  },
  // ...
];
```

Steps to add a new testimonial:

1. Open `data/testimonialsData.tsx`.
2. Append a new object:
   ```ts
   {
     image: "https://example.com/photo.jpg", // or use a local path if supported in UI
     text: "Short testimonial text.",
     name: "Full Name",
     username: "@handle_or_affiliation",
     social: "https://link-to-profile-or-icon.png",
   }
   ```
3. Save the file.

Edits (rename/update/remove):

- Update any field as needed.
- Remove by deleting the object.

Validation tips:

- Prefer reliable image URLs (CDN/https). If switching to local images, ensure your UI supports local paths.

---

### Update contact details

Files involved:

- Data: `data/contactData.tsx`

Data shape is an array for Email, Phone, and Address:

```ts
export const contactData = [
  { icon: MailIcon, label: "Email", value: "example@domain.com" },
  { icon: PhoneIcon, label: "Phone", value: "+91 00000 00000" },
  {
    icon: MapPinIcon,
    label: "Address",
    value: "Street, City, State, ZIP",
    className: "col-span-2",
  },
];
```

Steps to update contact info:

1. Open `data/contactData.tsx`.
2. Edit the `value` fields for the corresponding items (Email, Phone, Address). Keep `className` if present for layout.
3. Save the file.

Validation tips:

- Keep phone numbers and addresses as plain strings.
- Do not change the `icon` imports unless you intend to change displayed icons.

---

### Image locations summary

- Collaborators: `public/collaborators/`
- Gallery: `public/gallery/`
- Products: `public/products/`
- Team (if used elsewhere): `public/team/`

Use leading-slash paths in data files, e.g., `/gallery/filename.jpg`.

---

### Commit and deploy to Vercel

After you make any updates (data or images), commit and push to GitHub to trigger Vercel deployment.

1.  Check status and stage changes:

```bash
git status
git add .
```

2.  Commit with a descriptive message:

```bash
git commit -m "Data Updated"
```

3.  Push to the default branch (e.g., `main`):

```bash
git push origin main
```

4.  Vercel will auto-build and deploy on push. You can monitor progress on your project’s Vercel dashboard.
