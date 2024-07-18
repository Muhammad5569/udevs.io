import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title:string;
    icon?:string;
    variant:string;
}

const Button = ({type, title, icon, variant}:ButtonProps) => {
  return (
    <button type={type} className={` flexCenter gap-3 rounded-xl border ${variant}`}>
        {icon && <Image src={icon} alt='img' width={24} height={24}/>}
        <label className="bold-12 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button