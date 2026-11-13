import Link from 'next/link';
import Image from 'next/image';
import { GithubMark } from './icons';

export function SiteNav() {
  return (
    <nav className="nav">
      <Link href="/" className="logo" aria-label="ZenTask home">
        <Image src="/zentask.png" alt="" width={24} height={24} priority />
        ZenTask
      </Link>
      <div className="navLinks">
        <Link href="/features" className="navLink">Features</Link>
        <Link
          href="https://github.com/natanim-kemal/zen-task"
          className="navIcon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <GithubMark size={18} />
        </Link>
        <Link href="/maintenance" className="navCta">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <Link href="/" className="footerWordmark">
        <Image src="/zentask.png" alt="" width={18} height={18} />
        <span>ZenTask</span>
        <span>Productivity, Reimagined.</span>
      </Link>
      <span className="footerMeta">© 2026 ZenTask</span>
    </footer>
  );
}
