import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { SiteNav, SiteFooter } from '@/components/Chrome';
import {
  ArrowRight,
  ArrowUpRight,
  ChartBars,
  Focus,
  ListChecks,
  Lock,
  Moon,
  Timer,
} from '@/components/icons';

type Capability = {
  icon: ReactNode;
  label: string;
};

type Feature = {
  span: 'span7' | 'span5' | 'span6';
  icon: ReactNode;
  index: string;
  title: string;
  desc: string;
  meta: string;
  chart?: boolean;
  mark?: string;
};

const CAPABILITIES: Capability[] = [
  { icon: <ListChecks size={16} />, label: 'Capture' },
  { icon: <Focus size={16} />, label: 'Focus' },
  { icon: <Timer size={16} />, label: 'Rhythm' },
  { icon: <ChartBars size={16} />, label: 'Review' },
];

const FEATURES: Feature[] = [
  {
    span: 'span7',
    icon: <ListChecks size={22} />,
    index: '01',
    title: 'Capture without ceremony',
    desc: 'A thought in, a task out. One field, one shortcut, zero setup. Categories and dates are there when you need them, invisible when you do not.',
    meta: 'One field / one shortcut',
  },
  {
    span: 'span5',
    icon: <Focus size={22} />,
    index: '02',
    title: 'Focus that ends the argument',
    desc: 'One task on screen. Everything else out of sight. A timer starts when you do, so the only decision left is the work itself.',
    meta: 'One task / one screen',
  },
  {
    span: 'span5',
    icon: <Timer size={22} />,
    index: '03',
    title: 'A rhythm you can keep',
    desc: 'Work and rest in blocks. The Pomodoro is built in, not bolted on. Tune the lengths once and let the day keep time for you.',
    meta: 'Work / rest / repeat',
  },
  {
    span: 'span7',
    icon: <ChartBars size={22} />,
    index: '04',
    title: 'Evidence, not vibes',
    desc: 'A receipt for your attention. Streaks, completion rates and a weekly chart show what moved, not what felt busy.',
    meta: 'Streaks / rates / weekly',
    chart: true,
  },
  {
    span: 'span6',
    icon: <Moon size={22} />,
    index: '05',
    title: 'Quiet by design',
    desc: 'No notifications. No badges. No streak guilt. ZenTask only speaks when you ask it something, and then it answers in one line.',
    meta: 'No pings / no badges',
    mark: 'quiet.',
  },
  {
    span: 'span6',
    icon: <Lock size={22} />,
    index: '06',
    title: 'Yours by default',
    desc: 'Offline first. Your tasks live on your machine unless you choose to sync. No account required to start, and no dark patterns to leave.',
    meta: 'Local / sync optional',
    mark: 'local.',
  },
];

const CHART = [36, 54, 42, 68, 57, 86, 63];
const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export default function Home() {
  return (
    <main className={styles.main}>
      <SiteNav active="home" />

      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <Image
            src="/hero-code.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.code}
          />
          <span className={styles.shade} />
        </div>

        <div className={styles.heroContent}>
          <span className="kicker">A quiet system for loud minds</span>
          <h1 className={styles.heroTitle}>
            Turn intention into
            <br className={styles.heroBreak} /> finished work.
          </h1>
          <p className={styles.heroSub}>
            ZenTask is the space between wanting to and doing. Capture the thought,
            protect the hour, and keep a record of what actually got done.
          </p>
          <div className={styles.heroActions}>
            <Link href="/maintenance" className="btn btnPrimary">
              Start focusing
              <ArrowRight size={15} />
            </Link>
            <Link href="/features" className={styles.textLink}>
              See the system
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <span className={styles.heroNote}>
            Free while in beta · No account · Offline first
          </span>
        </div>

        <div className={styles.hands} aria-hidden="true">
          <Image
            src="/hero-hands.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.handsImg}
          />
        </div>
      </section>

      <section className={styles.capabilities} aria-label="Core capabilities">
        <div className={styles.capabilitiesInner}>
          {CAPABILITIES.map((capability, index) => (
            <Link href="/features" key={capability.label} className={styles.capability}>
              <span className={styles.capabilityIndex}>0{index + 1}</span>
              <span className={styles.capabilityIcon}>{capability.icon}</span>
              <span className={styles.capabilityLabel}>{capability.label}</span>
              <span className={styles.capabilityArrow} aria-hidden="true">
                <ArrowUpRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.premise}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="kicker">01 / The premise</span>
            <span className={styles.headMeta}>Intention → Attention → Done</span>
          </div>

          <div className={styles.premiseGrid}>
            <h2 className={styles.premiseTitle}>
              Most tools stop at the list. The list is not the work.
            </h2>
            <div className={styles.premiseCopy}>
              <p>
                A list is a storage unit. It tells you what you might do, not what you
                are doing. The distance between the two is where days disappear.
              </p>
              <p>
                ZenTask is built for that distance: one place to capture, one task on
                screen, one timer running, and one honest record at the end of the day.
              </p>
            </div>
          </div>

          <div className={styles.gapDiagram} aria-hidden="true">
            <span className={styles.gapLabel}>Intention</span>
            <span className={styles.gapRule} />
            <span className={styles.gapSpark} />
            <span className={styles.gapRule} />
            <span className={styles.gapLabel}>Done</span>
          </div>
          <p className={styles.gapCaption}>ZenTask lives in the gap.</p>
        </div>
      </section>

      <section className={styles.system}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="kicker">02 / The system</span>
            <span className={styles.headMeta}>Four tools, one loop</span>
          </div>

          <div className={styles.systemIntro}>
            <h2 className={styles.sectionTitle}>
              A short list of sharp tools.
            </h2>
            <p className={styles.systemCopy}>
              No dashboards to configure. No productivity philosophy to adopt. Four
              tools that do one job each, then get out of the way.
            </p>
          </div>

          <div className={styles.grid}>
            {FEATURES.map((feature) => (
              <article key={feature.title} className={`${styles.cell} ${styles[feature.span]}`}>
                <div className={styles.cellTop}>
                  <span className={styles.cellIndex}>{feature.index}</span>
                  <span className={styles.cellIcon}>{feature.icon}</span>
                </div>
                <h3 className={styles.cellTitle}>{feature.title}</h3>
                <p className={styles.cellDesc}>{feature.desc}</p>

                {feature.chart && (
                  <div className={styles.chart} aria-hidden="true">
                    <div className={styles.chartBars}>
                      {CHART.map((height, index) => (
                        <span
                          key={`${height}-${index}`}
                          className={index === 5 ? styles.barActive : styles.bar}
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                    <div className={styles.chartLabels}>
                      {DAYS.map((day, index) => (
                        <span key={`${day}-${index}`}>{day}</span>
                      ))}
                    </div>
                  </div>
                )}

                <span className={styles.cellMeta}>{feature.meta}</span>
                {feature.mark && (
                  <span className={styles.watermark} aria-hidden="true">
                    {feature.mark}
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.quote}>
        <div className={styles.quoteMedia} aria-hidden="true">
          <Image
            src="/hero-code.webp"
            alt=""
            fill
            sizes="100vw"
            className={styles.quoteCode}
          />
          <span className={styles.quoteShade} />
        </div>
        <div className={styles.quoteInner}>
          <span className={styles.quoteMark} aria-hidden="true" />
          <blockquote className={styles.quoteText}>
            You do not need more time. You need fewer open loops.
          </blockquote>
          <span className={styles.quoteCite}>— The ZenTask principle</span>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`panel ${styles.ctaPanel}`}>
          <span className="bracket bracket-tl" />
          <span className="bracket bracket-tr" />
          <span className="bracket bracket-br" />
          <span className="bracket bracket-bl" />
          <span className="panelGlow" />
          <div className="panelInner">
            <span className="kicker">03 / Begin</span>
            <h2 className={styles.ctaTitle}>
              Close the gap.
            </h2>
            <p className={styles.ctaText}>
              ZenTask is in beta. No account, no onboarding call, no ceremony. Open it,
              add one task, and start the timer.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/maintenance" className="btn btnPrimary">
                Get ZenTask
                <ArrowRight size={15} />
              </Link>
              <Link href="/features" className="btn btnGhost">
                Explore the system
              </Link>
            </div>
            <span className={styles.ctaNote}>Free while in beta · Built quiet</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
