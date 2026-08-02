import { Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { COMPANY } from '../../lib/data'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

const WHATSAPP_MESSAGE = [
  'Hello Nuvox Technologies Team,',
  '',
  "I'm interested in your IT services. I would like to know more about your software development, mobile app development, website development, UI/UX design, and other technology solutions.",
  '',
  'Please share more details. Thank you.',
].join('\n')

const EMAIL_SUBJECT = 'Project Inquiry'
const EMAIL_BODY = [
  'Hello Nuvox Technologies Team,',
  '',
  'I would like to discuss my project requirements. Please contact me regarding your software development and IT services.',
  '',
  'Thank you.',
].join('\n')

const BASE_CLASS =
  'relative grid h-13 w-13 place-items-center rounded-full text-white shadow-card'
const ENTRANCE = {
  initial: { opacity: 0, x: 56, scale: 0.4 },
  animate: { opacity: 1, x: 0, scale: 1 },
  transition: { type: 'spring', stiffness: 300, damping: 20 },
} as const

export function FloatingContact() {
  const tel = `tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`
  const whatsapp = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  const mailto = `mailto:${COMPANY.email}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-center gap-3">
      <motion.a
        href={tel}
        aria-label="Call NUVOX TECHNOLOGIES"
        title="Call us"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        {...ENTRANCE}
        transition={{ ...ENTRANCE.transition, delay: 0.45 }}
        className={`${BASE_CLASS} bg-gradient-to-br from-brand-600 to-brand-700 shadow-[0_12px_30px_-8px_rgba(37,99,235,0.6)]`}
      >
        <span className="absolute inset-0 animate-ring rounded-full bg-brand-400/45" aria-hidden />
        <span className="animate-shake relative grid h-full w-full place-items-center">
          <Phone className="h-5 w-5" />
        </span>
      </motion.a>

      <motion.a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        title="WhatsApp us"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        {...ENTRANCE}
        transition={{ ...ENTRANCE.transition, delay: 0.6 }}
        className={`${BASE_CLASS} bg-gradient-to-br from-[#25d366] to-[#128c7e] shadow-[0_12px_30px_-8px_rgba(37,211,102,0.55)]`}
      >
        <span className="animate-bob relative grid h-full w-full place-items-center">
          <WhatsAppIcon />
        </span>
      </motion.a>

      <motion.a
        href={mailto}
        aria-label="Email NUVOX TECHNOLOGIES"
        title="Email us"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        {...ENTRANCE}
        transition={{ ...ENTRANCE.transition, delay: 0.75 }}
        className={`${BASE_CLASS} bg-gradient-to-br from-accent-500 to-brand-600 shadow-[0_12px_30px_-8px_rgba(6,182,212,0.55)]`}
      >
        <Mail className="h-5 w-5" />
      </motion.a>
    </div>
  )
}
