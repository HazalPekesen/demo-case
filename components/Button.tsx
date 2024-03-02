import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-6 rounded-full border ${variant} ${full && 'w-full'} `}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={10} height={10} />}
      <label className={`bold-10 whitespace-nowrap cursor-pointer ${variant === 'btn_white' ? 'text-gray-90 bg-white border-white' : ''}`}>
        {title}
      </label>
    </button>
  )
}

export default Button