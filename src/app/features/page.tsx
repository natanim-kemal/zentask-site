import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './features.module.css';
import { SiteNav, SiteFooter } from '@/components/Chrome';
import { ListChecks, Focus, Timer, ChartBars, Crown, CheckLine } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Features | ZenTask',
  description: 'Task management, focus mode, Pomodoro and analytics in one calm system.',
};

const CARDS = [
  {
    icon: <ListChecks size={22} />,
    span: 'span7',
    title: 'Powerful task management',
    desc: 'Color-coded categories, priorities and recurring schedules that understand "every 2 weeks on Mon, Wed". Rich descriptions and due dates included.',
  },
  {
    icon: <Focus size={22} />,
    span: 'span5',
    title: 'Focus mode',
    desc: 'One top-priority task, nothing else. A distraction-free view with guided breathing to settle in before you start.',
  },
  {
    icon: <Timer size={22} />,
    span: 'span5',
    title: 'Integrated Pomodoro',
    desc: 'Tune work, short break and long break lengths. Background alerts keep the rhythm even when the tab is hidden.',
  },
  {
    icon: <Crown size={22} />,
    span: 'span7',
    dark: true,
    title: 'Premium experience',
    desc: 'Dark mode, offline support and secure cloud sync. The same calm interface on every device you own.',
  },
  {
    icon: <ChartBars size={22} />,
    span: 'span12',
    title: 'Insightful analytics',
    desc: 'Streaks, completion rates and weekly progress charts turn your history into a decision: what to keep doing, what to drop.',
  },
];

const FLOW = [
  { n: '01', title: 'Capture', body: 'Add a task in seconds. Category, priority and due date are one tap away.' },
  { n: '02', title: 'Prioritize', body: 'The queue sorts itself. Your most important open task sits at the front.' },
  { n: '03', title: 'Focus', body: 'Enter focus mode, breathe, then work through one Pomodoro at a time.' },
  { n: '04', title: 'Review', body: 'Close the day with streaks and charts that show what actually moved.' },
];

export default function Features() {
  return (
    <main className={styles.main}>
      <SiteNav />

      <header className={styles.pageHeader}>
        <span className="kicker">
          <span className="kickerDot" /> Features
        </span>
        <h1 className={styles.title}>Power tools for your mind.</h1>
        <p className={styles.subtitle}>
          ZenTask is not just a list. It is a system built to protect your attention and keep you in flow.
        </p>
      </header>

      <section className={styles.grid} aria-label="Feature overview">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className={`${styles.card} ${styles[card.span]} ${card.dark ? styles.dark : ''}`}
          >
            {card.dark && <span className={styles.darkGlow} aria-hidden="true" />}
            <span className={styles.cardIcon}>{card.icon}</span>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardDesc}>{card.desc}</p>
            {card.dark && <span className={styles.darkMeta}>SYNC / OFFLINE / DARK MODE</span>}
            <span className={styles.cardPlus} aria-hidden="true" />
          </article>
        ))}
      </section>

      <section className={styles.flow}>
        <div className={styles.sectionHead}>
          <span className="mono">HOW IT WORKS</span>
          <span className={styles.headLine} aria-hidden="true" />
          <span className="mono">04 STEPS</span>
        </div>
        <div className={styles.flowRows}>
          {FLOW.map((row) => (
            <div key={row.n} className={styles.flowRow}>
              <span className={styles.flowIndex}>{row.n}</span>
              <span className={styles.flowTitle}>
                <CheckLine size={12} /> {row.title}
              </span>
              <p className={styles.flowBody}>{row.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Start in under a minute.</h2>
        <p className={styles.ctaText}>No setup ceremony. Open ZenTask, add one task, and let the system do the rest.</p>
        <div className={styles.ctaButtons}>
          <Link href="/maintenance" className={styles.primaryButton}>
            Get Started
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <Link href="https://github.com/natanim-kemal/zen-task" className={styles.secondaryButton} target="_blank" rel="noopener noreferrer">
            View source
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
