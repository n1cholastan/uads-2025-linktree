import { LinkButtonProps } from "../utils/FrontendTypes"
export default function LinkButton({ link, text }: LinkButtonProps)  {
    return (
    <>
      <a
        href={link}
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-center w-11/12 px-5 sm:px-10 md:px-5 lg:px-10 py-4 rounded-3xl font-body text-sm sm:text-base transition-colors duration-300 ease-in-out bg-red text-cream hover:bg-brown"
        >{text}
      </a>
    </>
    )
}