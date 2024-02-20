import { Link, useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import Loading from "./../components/Loading";
import { shortenText } from "./../helpers/helper";
import { FaArrowCircleLeft } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";

function ProductDetail() {
  const { id } = useParams();
  const productDetails = useProduct(+id);
  console.log(productDetails);
  if (!productDetails) return <Loading />;

  return (
    <div className="background mb-20 w-full ">
      <div className="w-full px-4 flex flex-col md:flex-row md:items-start justify-center items-center md:px-14">
        <div className="w-2/3 h-[150px] md:h-[300px] rounded-2xl mt-10 md:mt-32 bg-white flex justify-center items-center  ">
          <img
            src={productDetails.image}
            alt={productDetails.title}
            className=" w-48 px-12 md:px-5 md:w-60"
          />
        </div>
        <div className="w-full px-6 md:px-14 mt-4 md:mt-16">
          <h2 className="w-full text-center font-bold text-white text-xl mb-2 md:mb-8 md:text-3xl">
            {shortenText(productDetails.title)}
          </h2>
          <p className="w-full text-start text-white md:text-xl ">
            {productDetails.description}
          </p>
          <div className="w-full flex flex-col justify-center items-start">
            <div className="w-full flex justify-start items-center mt-4 text-orange-400 font-semibold gap-x-2 md:text-xl md:font-bold md:mt-8">
              <span>
                <TbCategory2 />
              </span>
              <span>{productDetails.category}</span>
            </div>
            <div className="w-full flex justify-between items-center mt-5 md:mt-12 ">
              <div className="text-lg font-bold text-yellow-400 md:text-2xl">
                {productDetails.price}$
              </div>
              <Link to="/products">
                <div className="flex bg-blue-400 px-2 md:px-4 py-1 md:py-2 rounded-xl md:text-xl font-bold text-white justify-center items-center gap-x-2 md:gap-x-4 cursor-pointer">
                  <span>
                    <FaArrowCircleLeft />
                  </span>
                  <span>Back to shop</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
