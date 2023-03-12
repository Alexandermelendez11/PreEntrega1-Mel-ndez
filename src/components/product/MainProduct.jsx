import DetailsProduct from "@/components/product/DetailsProduct";
import SlideProduct from "@/components/product/SlideProduct";

const MainProduct = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[calc(100vh-88px-3px)] items-center md:container md:mx-auto">
            <SlideProduct />
            <DetailsProduct />
        </main>
    );
};
export default MainProduct;