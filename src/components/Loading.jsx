import { DNA } from "react-loader-spinner";

function Loading() {
  return (
    <div className="background h-screen flex justify-center items-center">
      <DNA
        visible={true}
 
        height="150"
        width="150"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}

export default Loading;
