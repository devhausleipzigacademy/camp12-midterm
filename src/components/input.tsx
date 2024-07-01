import { IconType } from "react-icons"
import { IoIosSearch } from "react-icons/io";

type Props = {
    placeholder: string,
    icon: IconType,
    iconColor: string
}

export const InputFields = ({ placeholder,icon}: Props) => {
    
    return (
        
      
                   
            <label className="flex items-center w-[335px] h-[48px] rounded-full bg-dark-light border-2 border-dark-light focus-within:border-white-dimmed-heavy ">

                <div className=" w-auto h-auto ml-5 absolute flex">
                    <IoIosSearch className="text-white-dimmed h-5" />
                </div>
                
                             <input type="text"
                                 placeholder= {placeholder}
                                 className="bg-transparent w-[335px] h-[48px] rounded-full placeholder: font-medium placeholder: font-inter placeholder: text-sm placeholder: leading-4 placeholder: pl-12 outline-none text-white-dimmed" />
                         </label>
       
    )
}
    
 




