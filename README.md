# Shailesh Mahato

<div align="center">

![Project Banner](./public/demo.png)

### Midnight Liquid Glass Portfolio
*A premium, responsive video editing portfolio built with modern web technologies.*

[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[**🌐 Live Website**](https://www.itsniloy.me)

</div>

## ✨ Design Philosophy: Midnight Liquid Glass
### Other Platforms
-   **Netlify**: Static site deployment with form handling.
-   **AWS Amplify**: Full-stack deployment with API integration.
-   **GitHub Pages**: Static deployment (limited functionality).

## 🤝 Support & Contact

- **Email**: [shaileshmahato1125@gmail.com](mailto:shaileshmahato1125@gmail.com)
- **WhatsApp**: [+977 9866307745](https://wa.me/9779866307745)

## 📂 Project Structure

```plaintext
📦videography-portfolio
 ┣ 📂public
 ┃ ┣ 📂companies
 ┃ ┣ 📂project-images
 ┃ ┣ 📂tools
 ┃ ┃ ┗ 📜Adobe_Lightroom.png
 ┃ ┣ 📜demo.png
 ┃ ┗ 📜hero.webp
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂about
 ┃ ┃ ┣ 📂contact
 ┃ ┃ ┣ 📂project
 ┃ ┃ ┣ 📂skills
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜footer.tsx
 ┃ ┃ ┣ 📜hero.tsx
 ┃ ┃ ┗ 📜navbar.tsx
 ┃ ┣ 📂db
 ┃ ┃ ┗ 📜skills.ts
 ┣ 📂hooks
 ┃ ┃ ┗ 📜use-mobile.tsx
 ┣ 📂lib
 ┃ ┃ ┣ 📜helper.ts
 ┃ ┃ ┗ 📜utils.ts
 ┃ ┗ 📂types
 ┃ ┃ ┣ 📜cta.ts
 ┃ ┃ ┗ 📜videos.ts
 ┣ 📜.dockerignore
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜Dockerfile
 ┣ 📜LICENSE
 ┣ 📜README.md
 ┣ 📜components.json
 ┣ 📜eslint.config.mjs
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.ts
 ┣ 📜package.json
 ┣ 📜pnpm-lock.yaml
 ┣ 📜postcss.config.mjs
 ┗ 📜tsconfig.json
```

### 📝 Adding New Video Projects

To add a new project, simply edit `src/lib/data.ts`. No new code required!

```typescript
export const videoProjectsData = {
  "Talking Head": [
    {
      id: "unique-video-id",
      video_title: "Your Video Title",
      video_description: "Detailed description...",
      tags: ["Tag1", "Tag2"],
      cover_image: "youtube-video-id",
      publish_date: "2024-01-01",
      client_name: "Client Name",
      client_image: "/companies/client-logo.png",
      client_feedback: "Client testimonial...",
      video_link: "https://youtu.be/video-id",
      project_images: ["/path/to/image1.jpg"],
      category: "Talking Head",
      duration: "5:30",
      software_used: ["DaVinci Resolve", "After Effects"],
    },
  ],
};
```

## 🛠️ Tech Stack

-   **Core**: Next.js 15, TypeScript
-   **Styling**: Tailwind CSS, Shadcn/ui
-   **Animation**: Framer Motion
-   **Backend**: Resend (Email), Server Actions

---
