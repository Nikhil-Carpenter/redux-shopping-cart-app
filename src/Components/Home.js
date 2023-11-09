import React, { useEffect, useState } from "react";
import WebServices from "../Service/WebServices";
import WebAPI from "../Service/WebAPI";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

export default function Home() {
  const [products, setProducts] = useState([]);
  let dispatch = useDispatch()
  useEffect(() => {
    loadProduct();
  }, []);

  var loadProduct = async () => {
    let resp = await WebServices.getProductData(WebAPI.getProduct);
    // console.log();
    var data = JSON.stringify(resp);
    setProducts(resp.data.products);
  };

  return (
    <>
      <h1>Show Product here</h1>
      <div className="row">
        {products.map((data) => {
          return (
            <div className="col-md-3">
              <div className="col-xl-3" style={{backgroundColor:'aliceblue',padding:"10px", borderRadius:'10px'}}>
                <div style={{ margin: "5px" }} className="text-center">
                  <img
                    style={{ borderRadius: "10%" ,width:"100%",}}
                    className="img-thumbnail"
                    src={data.thumbnail}
                    alt="Image Not Found"
                    // height={200}
                    // width={200}
                  />
                  <br />
                  <br />
                  <h5 >
                    {data.title} : {data.price}
                  </h5>
                  <b>Discount Price : {data.discountPercentage}</b>
                  <br />
                  <b>
                    {data.brand} : {data.category}
                  </b>
                  <br />
                  <br />
                  <button className="btn btn-primary" onClick={()=>dispatch(addItem(data))}>Add to Cart</button>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
