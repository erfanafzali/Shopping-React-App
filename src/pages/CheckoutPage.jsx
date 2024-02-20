import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { useCarts } from "./../context/CartContext";
function CheckoutPage() {
  const [state, dispach] = useCarts();
  console.log(state);

  const clickHandler = (type, payload) => {
    dispach({ type, payload });
  };

  if (!state.itemsCounter) {
    return (
      <div className="text-red-500 w-full text-center text-3xl font-bold pt-32 background h-screen">
        Empty😞
      </div>
    );
  }

  return (
    <div className="background mb-20 h-auto w-full">
      <div className="w-full flex flex-col md:flex-row justify-center items-center px-4 md:items-start md:gap-x-8 lg:gap-x-10 ">
        <BasketSidebar state={state} />
        <div className="w-full px-4 md:px-6 space-y-5  mt-6 border-2 py-3 md:py-6 rounded-xl  max-w-3xl">
          {state.selectedItems.map((item) => {
            return (
              <BasketCard
                key={item.id}
                data={item}
                clickHandler={clickHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
