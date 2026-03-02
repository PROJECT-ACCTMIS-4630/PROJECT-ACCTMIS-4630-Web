import React from "react";
import data from "./data";

function Fulfillment() {
    return (
        <div className="content content-margined">
            <div className="order-header">
                <h3>Fulfillment</h3>
            </div>
            <div className="order-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>USER</th>
                            <th>SHIPPED</th>
                            <th>SHIPPED AT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.fulfillments.map((item) => (
                            <tr key={item._id} className={item.isShipped ? '' : 'unshipped'}>
                                <td>{item._id}</td>
                                <td>{item.createdAt}</td>
                                <td>{item.user.name}</td>
                                <td>{item.isShipped.toString()}</td>
                                <td>{item.shippedAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Fulfillment;