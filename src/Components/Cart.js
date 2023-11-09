import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty, removeItem } from "../redux/CartSlice";

export default function Cart() {

  const selector = useSelector(state=>state.carts.value)
  let dispatch = useDispatch()
  return (
    <>
      <div className="container">
        <h1>Cart Items</h1>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-stripd table-hover">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {
              selector.map((data,index)=>{
                return<>
                  <tr>
                    <td>{index+1}</td>
                    <td>
                      <img src={data.productData.thumbnail} alt=""height={100} width={100} />
                    </td>
                    <td>{data.productData.title}</td>
                    <td>rs.{data.productData.price}</td>
                    <td>
                      <button onClick={()=>dispatch(decrementQty(data.productData.id))} className="btn btn-success">-</button>
                      &nbsp;
                      {data.qty}
                      &nbsp;
                      <button onClick={()=>dispatch(incrementQty(data.productData.id))} className="btn btn-success">+</button>
                    </td>
                    <td>
                      {data.qty * data.productData.price}
                    </td>
                    <td>
                      <button onClick={()=>dispatch(removeItem(data.productData.id))} className="btn btn-success">
                      Remove Item
                      </button>
                    </td>
                  </tr>
                </>
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
