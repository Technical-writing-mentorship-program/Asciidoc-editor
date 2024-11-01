# AsciiDoc Editor

A modern, real-time AsciiDoc editor and previewer built with Next.js and shadcn/ui components. This editor provides a split-screen interface for editing AsciiDoc markup and seeing the rendered preview in real-time.

![AsciiDoc Editor Screenshot](public/editor-screenshot.png)

## Features

- ✨ Real-time preview
- 🎨 Modern, clean interface
- 📱 Responsive design
- ⌨️ Syntax highlighting
- 🖥️ Fullscreen mode for both editor and preview
- 🎯 Support for common AsciiDoc elements:
  - Headers (multiple levels)
  - Text formatting (bold, italic, monospace)
  - Ordered and unordered lists
  - Horizontal rules
  - Code blocks

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/asciidoc-editor.git
cd asciidoc-editor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
asciidoc-editor/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── ui/
│       │   ├── button.tsx
│       │   └── card.tsx
│       └── asciidoc-editor.tsx
├── public/
├── tailwind.config.js
├── package.json
└── README.md
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icons
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Supported AsciiDoc Syntax

### Headers
```asciidoc
= Level 1 Header
== Level 2 Header
=== Level 3 Header
==== Level 4 Header
```

### Text Formatting
```asciidoc
*bold text*
//italic text//
`monospace text`
```

### Lists
```asciidoc
* Unordered list item
* Another item

1. Ordered list item
2. Another ordered item
```

### Horizontal Rule
```asciidoc
'''
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [AsciiDoc](https://asciidoc.org/) - The text document format
- [shadcn/ui](https://ui.shadcn.com/) - For the beautiful UI components

## Future Improvements

- [ ] Add support for tables
- [ ] Implement file saving/loading
- [ ] Add more AsciiDoc syntax features
- [ ] Add keyboard shortcuts
- [ ] Implement syntax highlighting in the editor
- [ ] Add export options (PDF, HTML)
- [ ] Add support for images and diagrams
- [ ] Implement search and replace functionality
- [ ] Add collaborative editing features

## Support

If you have any questions or run into issues, please open an issue in the GitHub repository.

---

Made with ❤️ by [Wisdom Nwokocha]()