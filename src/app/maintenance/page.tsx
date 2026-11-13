import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './maintenance.module.css';
import { SiteNav, SiteFooter } from '@/components/Chrome';
import { CheckLine } from '@/components/icons';

export const metadata: Metadata = {
  title: 'ZenTask | Site in progress',
  description: 'The ZenTask site is still in the workshop. It opens when the new site ships.',
};

const STATUS = [
  { label: 'Home page', state: 'ready' },
  { label: 'Feature tour', state: 'ready' },
  { label: 'Documentation', state: 'wip' },
  { label: 'Download', state: 'next' },
];

export default function Maintenance() {
  return (
    <main className={styles.main}>
      <SiteNav />

      <section className={styles.stage}>
        <div className={styles.panel}>
          <span className="bracket bracket-tl" />
          <span className="bracket bracket-tr" />
          <span className="bracket bracket-br" />
          <span className="bracket bracket-bl" />
          <div className={styles.glow} aria-hidden="true" />

          <span className="kicker">
            <span className={styles.pulse} /> Build in progress
          </span>

          <h1 className={styles.title}>This site is still in the workshop.</h1>
          <p className={styles.subtitle}>
            ZenTask works. This corner of the internet is still being furnished.
            It opens when the new site ships, and until then the source and the build log are one click away.
          </p>

          <div className={styles.statusList} aria-label="Build status">
            {STATUS.map((item) => (
              <div key={item.label} className={styles.statusRow}>
                <span className={styles.statusLabel}>
                  <CheckLine size={11} /> {item.label}
                </span>
                <span className={`${styles.statusPill} ${styles[item.state]}`}>{item.state.replace('wip', 'in progress')}</span>
              </div>
            ))}
          </div>

          <div className={styles.log} aria-hidden="true">
            <span><i>$</i> zentask site status</span>
            <span><i>&gt;</i> home .................... live</span>
            <span><i>&gt;</i> features ................ live</span>
            <span><i>&gt;</i> docs .............. in progress</span>
            <span><i>&gt;</i> download ............... soon</span>
            <span><i>&gt;</i> shipping in public</span>
          </div>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryButton}>
              Back to home
            </Link>
            <Link
              href="https://github.com/natanim-kemal/zen-task"
              className={styles.secondaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow the build
            </Link>
          </div>

          <span className={styles.footNote}>zen-task // build.log</span>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
