import imgProduct1 from "@/assets/images/image-product-1.jpg"
import imgProductThumb1 from "@/assets/images/image-product-1-thumbnail.jpg"
import imgProductThumb2 from "@/assets/images/image-product-2-thumbnail.jpg"
import imgProductThumb3 from "@/assets/images/image-product-3-thumbnail.jpg"
import imgProductThumb4 from "@/assets/images/image-product-4-thumbnail.jpg"

export default () => {
    return (
        <section className="grid md:grid-cols-4 md:gap-8">
            <div className="col-span-4">
                <img src={imgProduct1} alt="" className="aspect-[16/12]" />
            </div>
            <img src={imgProductThumb1} alt="" className="hidden md:block" />
            <img src={imgProductThumb2} alt="" className="hidden md:block" />
            <img src={imgProductThumb3} alt="" className="hidden md:block" />
            <img src={imgProductThumb4} alt="" className="hidden md:block" />
        </section>
    );
};