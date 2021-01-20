import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {

  onDelete = (id) => {
    if (confirm("Are you sure you want to delete")) { // eslint-disable-line
      // console.log(id);
      this.props.onDelete(id);
    }
  }


  render() {
    var {  product, index } = this.props;
    var statusName = product.status ? 'Còn Hàng' : 'Hết hàng'
    var statusClass = product.status ? 'badge badge-success p-1' : 'badge badge-secondary p-1'
    return (
      <tr>
        <th>{index+1}</th>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price} VNĐ</td>
        <td>
          <span className={statusClass}>
              {statusName}
          </span>
        </td>
        <td colSpan="2">
          <Link to={`/product/${product.id}/edit`} className="btn btn-warning text-light mx-2">
            <i className="las la-cog"></i>
          </Link>
          <button type="button" className="btn btn-danger text-white" onClick={ () => this.onDelete(product.id) }>
          <i className="las la-trash"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
