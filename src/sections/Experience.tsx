import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../lib/motion'
 
interface ExperienceEntry {
  period: string
  role: string
  company: string
  points: string[]
  logo: string
}
 
const experiences: ExperienceEntry[] = [
  {
    period: '2026 — Current',
    role: 'Data Engineering',
    company: 'Canadian Customs Brokerage Service and Consulting Inc',
    points: [
      'Built Python scripts to automate customs entry data processing, reducing demurrage charges by an estimated 15% through faster clearance turnaround',
      'Used Excel/VBA and Power BI dashboards to track shipment status and duty records, streamlining reporting across brokerage',
      'Built ETL pipelines orchestrated with Apache Airflow to automatically extract shipment and customs entry data from Outlook via the Microsoft Graph API, replacing manual email monitoring',
    ],
    logo: '/customs.jpg',
  },
  {
    period: '2024 — 2025',
    role: 'Management Associate',
    company: 'Jupiter Alliance Inc',
    points: [
      'Managed a team responsible for preparing 500+ customs entries weekly for goods released into Canada, ensuring full compliance with CBSA import regulations',
      'Maintained a <1% error rate on duty and tariff classification across high-volume shipment entries',
      'Coordinated with clients and carriers to facilitate timely release of shipments at the border',
    ],
    logo: '/jupiter.png',
  },
  {
    period: '2023 — 2024',
    role: 'X-Ray Technician Assistant',
    company: 'Wentworth Ultrasound & X-Ray',
    points: [
      'Contributed to 300+ radiographic imaging to patient family doctors and chiropractor',
      'Managing and recognize patients’ requisitions and help with assisting problems related to medical interferences',
      'Inspecting equipment and appliances to ensure manual standards and working with individuals on the front desk',
    ],
    logo: '/wentworth.png',
  },
]
 
export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="font-mono text-xs text-secondary">
            // career_log
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 mb-4">
            Experience that{' '}
            <span className="text-primary">I have participated in</span>
          </h2>
          <p className="text-muted max-w-lg mb-12">
            A quick log of where I've worked and what I have done while I was
            there.
          </p>
        </motion.div>
 
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="relative pl-8"
        >
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
 
          {experiences.map((experience, idx) => (
            <motion.div
              key={experience.company}
              variants={staggerItem}
              className="relative pb-10 last:pb-0"
            >
              <span
                className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2"
                style={{
                  borderColor: 'var(--color-background)',
                  backgroundColor: [
                    'var(--color-primary)',
                    'var(--color-secondary)',
                    'var(--color-accent)',
                  ][idx % 3],
                }}
              />
 
              <div className="terminal-frame p-5 flex flex-col sm:flex-row gap-5">
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="w-12 h-12 rounded-lg object-cover border border-border flex-shrink-0"
                />
                <div>
                  <span className="font-mono text-xs text-muted">
                    {experience.period}
                  </span>
                  <h3 className="font-semibold mt-1">{experience.role}</h3>
                  <p className="text-sm text-secondary">{experience.company}</p>
                  <ul className="mt-3 space-y-1.5">
                    {experience.points.map((point, pointIdx) => (
                      <li
                        key={pointIdx}
                        className="text-sm text-muted leading-relaxed flex gap-2"
                      >
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}