import { useReveal } from '../hooks/useReveal'

export default function Reveal({ children, as: Tag = 'div', className = '', ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
