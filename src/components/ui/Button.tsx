import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import {
  buttonClasses,
  type ButtonSize,
  type ButtonVariant,
} from './buttonStyles'

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  fullWidth?: boolean
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    as?: 'button'
  }

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    as: 'a'
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    fullWidth,
  } = props

  const cls = buttonClasses({ variant, size, fullWidth, className })

  if (props.as === 'a') {
    const { as: _as, variant: _v, size: _s, fullWidth: _fw, ...rest } = props
    void _as
    void _v
    void _s
    void _fw
    return (
      <a className={cls} {...rest}>
        {children}
      </a>
    )
  }

  const {
    as: _as,
    variant: _v,
    size: _s,
    fullWidth: _fw,
    type,
    ...rest
  } = props as ButtonAsButton
  void _as
  void _v
  void _s
  void _fw

  return (
    <button type={type ?? 'button'} className={cls} {...rest}>
      {children}
    </button>
  )
}
