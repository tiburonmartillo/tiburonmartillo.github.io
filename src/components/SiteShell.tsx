import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@ui-sdk/react/dialog";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, type ReactNode } from "react";
import { contact } from "../content";
import { getRoute, routes } from "../routes";

function InternalLink({
  href,
  children,
  className = "",
  onNavigate,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <Link href={href} className={className} onClick={onNavigate}>
      {children}
    </Link>
  );
}

const navItems = routes.filter((route) => ["home", "about", "projects"].includes(route.key));

export function SiteHeader() {
  const router = useRouter();
  const current = getRoute(router.asPath.split("?")[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="page-container header-inner">
        <InternalLink href="/" className="brand">
          <strong>Sergio Villanueva</strong>
          <span>DATA PRODUCT DESIGNER</span>
        </InternalLink>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <InternalLink
              key={item.key}
              href={item.path}
              className={current.key === item.key ? "nav-link is-current" : "nav-link"}
            >
              {item.key === "home"
                ? "Presentación"
                : item.key === "about"
                  ? "Acerca de mí"
                  : "Proyectos"}
            </InternalLink>
          ))}
        </nav>
        <div className="header-contact">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="accent-link">
            LINKEDIN ↗
          </a>
        </div>
        <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
          <DialogTrigger className="menu-trigger" aria-label="Abrir menú">
            <span>MENÚ</span>
            <span aria-hidden="true" className="menu-lines" />
          </DialogTrigger>
          <DialogBackdrop className="menu-backdrop" />
          <DialogContent className="menu-panel">
            <div className="menu-head">
              <DialogTitle className="menu-title">Navegación</DialogTitle>
              <DialogClose className="menu-close" aria-label="Cerrar menú">
                CERRAR
              </DialogClose>
            </div>
            <nav className="mobile-nav" aria-label="Navegación móvil">
              {navItems.map((item, index) => (
                <InternalLink
                  key={item.key}
                  href={item.path}
                  className={
                    current.key === item.key ? "mobile-nav-link is-current" : "mobile-nav-link"
                  }
                  onNavigate={() => setMenuOpen(false)}
                >
                  <span>0{index + 1}</span>
                  <strong>
                    {item.key === "home"
                      ? "Presentación"
                      : item.key === "about"
                        ? "Acerca de mí"
                        : "Proyectos"}
                  </strong>
                </InternalLink>
              ))}
            </nav>
            <div className="menu-contact">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <p className="eyebrow eyebrow-inverse">HABLEMOS</p>
        <h2>¿Trabajamos juntos?</h2>
        <div className="footer-links">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-inverse-text"
          >
            LINKEDIN ↗
          </a>
          <a href={`mailto:${contact.email}`} className="text-inverse-text">
            {contact.email}
          </a>
          <a href={contact.cv} download className="eyebrow footer-download">
            DESCARGAR CV ↓
          </a>
        </div>
        <div className="footer-legal">
          <span>SERGIO VILLANUEVA · 2026</span>
          <span>SITIO DISEÑADO EN FIGMA</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

export { InternalLink };
