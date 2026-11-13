import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { SiteNav, SiteFooter } from '@/components/Chrome';
import { Focus, Timer, ChartBars } from '@/components/icons';

const CELLS = [
  {
    icon: <Focus size={22} />,
    title: 'Focus Mode',
    desc: 'One top-priority task. Nothing else. Banish overwhelm.',
    href: '/features',
  },
  {
    icon: <Timer size={22} />,
    title: 'Integrated Pomodoro',
    desc: 'Custom work/break cycles with background alerts.',
    href: '/features',
  },
  {
    icon: <ChartBars size={22} />,
    title: 'Insightful Analytics',
    desc: 'Streaks, completion rates and weekly progress charts.',
    href: '/features',
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <SiteNav />

      <section className={styles.hero}>
        <div className={styles.frame}>
          <div className={styles.strip} aria-hidden="true" />
          <div className={styles.frameRow}>
            <div className={styles.visual} role="img" aria-label="ZenTask logo on the horizon">
              <span className="bracket bracket-tl" />
              <span className="bracket bracket-tr" />
              <span className="bracket bracket-br" />
              <span className="bracket bracket-bl" />
              <span className={styles.line} />
              <span className={styles.reflection} />
              <Image src="/zentask.png" alt="" width={132} height={132} className={styles.mark} priority />
              <span className={styles.scanTag}>ZENTASK // FOCUS</span>
            </div>
            <div className={styles.heroText}>
              <span className="kicker">
                <span className="kickerDot" /> Agentic task management
              </span>
              <h1 className={styles.heroTitle}>
                Productivity,
                <br />
                <span className={styles.accentText}>reimagined.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                A calm system for planning, focusing and finishing. ZenTask keeps the next right task
                in front of you, and everything else out of the way.
              </p>
              <div className={styles.buttonGroup}>
                <Link href="/maintenance" className={styles.primaryButton}>
                  Get Started
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <Link href="/features" className={styles.secondaryButton}>
                  Explore features
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cellStrip} aria-label="Core capabilities">
        {CELLS.map((cell) => (
          <Link key={cell.title} href={cell.href} className={styles.cell}>
            <span className={styles.cellIcon}>{cell.icon}</span>
            <span className={styles.cellTitle}>{cell.title}</span>
            <span className={styles.cellDesc}>{cell.desc}</span>
          </Link>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
