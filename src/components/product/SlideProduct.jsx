import imgProduct1 from "@/assets/images/image-product-1.jpg"
import imgProduct2 from "@/assets/images/image-product-2.jpg"
import imgProduct3 from "@/assets/images/image-product-3.jpg"
import imgProduct4 from "@/assets/images/image-product-4.jpg"
import imgProductThumb1 from "@/assets/images/image-product-1-thumbnail.jpg"
import imgProductThumb2 from "@/assets/images/image-product-2-thumbnail.jpg"
import imgProductThumb3 from "@/assets/images/image-product-3-thumbnail.jpg"
import imgProductThumb4 from "@/assets/images/image-product-4-thumbnail.jpg"
import PrevIcon from "@/components/icons/PrevIcon"
import NextIcon from "@/components/icons/NextIcon"
import { useState } from "react"

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4]

export default () => {

    const [index, setIndex] = useState (0)

        const handleClickNext = () => { 
            index === ARRAY_IMGS.length - 1 ? setIndex (0) : setIndex (index + 1);
        }
    
        const handleClickPrev = () => { 
            index === 0 ? setIndex (ARRAY_IMGS.length - 1) : setIndex (index - 1);
        }

    return (
        <section className="grid md:grid-cols-4 md:gap-8">
            <div className="relative col-span-4">
                <img src={ARRAY_IMGS[index]} alt="" className="aspect-[16/12] w-full md:aspect-[16/15] md:rounded-md"/>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-4">
                    <button className="grid place-items-center h-10 w-10 rounded-full bg-white" onClick={handleClickPrev}>
                        <PrevIcon />
                    </button>
                    <button className="grid place-items-center h-10 w-10 rounded-full bg-white" onClick={handleClickNext}>
                        <NextIcon />
                    </button>
                </div>
            </div>
            <img src={imgProductThumb1} alt="" className="hidden md:block md:rounded-md"/>
            <img src={imgProductThumb2} alt="" className="hidden md:block md:rounded-md"/>
            <img src={imgProductThumb3} alt="" className="hidden md:block md:rounded-md"/>
            <img src={imgProductThumb4} alt="" className="hidden md:block md:rounded-md"/>
        </section>
    );
};