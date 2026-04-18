import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

const variants = {
  primary:
    'bg-brand-creamy text-brand-black border-brand-creamy hover:bg-brand-beige hover:border-brand-beige',
  outline:
    'bg-transparent text-brand-creamy border-brand-creamy/40 hover:bg-brand-creamy/10 hover:border-brand-creamy',
  ghost:
    'bg-transparent text-brand-beige border-transparent hover:text-brand-creamy',
};

const sizes = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3 text-sm',
  lg: 'px-9 py-4 text-sm',
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-body tracking-wider uppercase transition-all duration-300 border ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
