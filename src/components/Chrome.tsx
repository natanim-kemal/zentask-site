import Link from 'next/link';
import Image from 'next/image';
import { GithubMark, ArrowUpRight } from './icons';

type NavKey = 'home' | 'features' | 'maintenance';

export function SiteNav({ active }: { active?: NavKey }) {
  return (
    <div className="navShell">
      <nav className="navBar" aria-label="Main">
        <Link href="/" className="navBrand" aria-label="ZenTask home">
          <Image src="/zentask-mark.png" alt="" width={18} height={18} priority />
          <span>ZenTask</span>
        </Link>
        <Link
          href="/"
          className={`navItem navItemText ${active === 'home' ? 'navItemActive' : ''}`}
          aria-current={active === 'home' ? 'page' : undefined}
        >
          System
        </Link>
        <Link
          href="/features"
          className={`navItem navItemText ${active === 'features' ? 'navItemActive' : ''}`}
          aria-current={active === 'features' ? 'page' : undefined}
        >
          Features
        </Link>
        <Link
          href="https://github.com/natanim-kemal/zen-task"
          className="navItem navIcon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <GithubMark size={16} />
        </Link>
        <Link href="/maintenance" className="navCta">
          Get ZenTask
          <ArrowUpRight size={13} />
        </Link>
      </nav>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerBrand">
          <Image src="/zentask-mark.png" alt="" width={16} height={16} />
          <span>ZenTask</span>
          <span className="footerTag">A quiet system for loud minds.</span>
        </div>
        <div className="footerLinks">
          <Link href="/features">Features</Link>
          <Link
            href="https://github.com/natanim-kemal/zen-task"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link href="/maintenance">Status</Link>
        </div>
        <span className="footerMeta">© 2026 ZenTask — Built quiet</span>
      </div>
    </footer>
  );
}
