"use client";

import styles from './Header.module.css';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: "/mapa-de-carreira", label: "Mapa de Carreira" },
  { href: "/#about", label: "Sobre" },
  { href: "/#journey", label: "Jornada" },
  { href: "/#projects", label: "Projetos" },
  { href: "/#contact", label: "Contato" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>Início</Link>

        <nav className={styles.navDesktop}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className={styles.navMobile}>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button className={styles.hamburgerButton} aria-label="Abrir menu">
                <Menu size={28} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.dialogOverlay} />
              <Dialog.Content className={styles.dialogContent} >
                <VisuallyHidden>
                  <Dialog.Title>Menu de Navegação</Dialog.Title>
                </VisuallyHidden>
                <VisuallyHidden>
                  <Dialog.Description>
                    Navegue para as diferentes seções do site, como Sobre, Jornada, Projetos e Contato.
                  </Dialog.Description>
                </VisuallyHidden>

                <Dialog.Close asChild>
                  <button className={styles.closeButton} aria-label="Fechar menu">
                    <X size={32} />
                  </button>
                </Dialog.Close>
                <nav className={styles.modalNav}>
                  {navLinks.map(link => (
                    <Dialog.Close asChild key={link.href} onClick={() => setOpen(false)}>
                      <a href={link.href}>{link.label}</a>
                    </Dialog.Close>
                  ))}
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
};