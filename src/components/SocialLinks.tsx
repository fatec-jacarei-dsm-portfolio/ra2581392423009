import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/igors-lima/',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/IgorSantosL',
    icon: FaGithub,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5512997848287',
    icon: FaWhatsapp,
  },
]

export function SocialLinks() {
  return (
    <div className="social-links">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="social-link"
          title={label}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}