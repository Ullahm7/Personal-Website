import { Github, Linkedin, Mail } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">$</span> contact --email
          muhullah25@gmail.com
        </p>
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/Ullahm7"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ullah-m7/"
            aria-label="LinkedIn"
            className="p-2 rounded-full text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://spiral-wire-e12.notion.site/Muhammad-Ullah-91bd7a00890a43dbb3fe4e6706863cd0"
            aria-label="Notion"
            className="p-2 rounded-full text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
          >
            <img src="/Notion_app_logo.png" alt="" className="w-4 h-4" />
          </a>
          <a
            href="mailto:muhullah25@gmail.com"
            aria-label="Email"
            className="p-2 rounded-full text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
