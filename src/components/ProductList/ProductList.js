import React, { Component } from "react";


class ProductList extends Component {

  render() {
    if (this.props.children != null) {
      return (
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title my-5">Danh sách sản phẩm</h3>
          </div>
          <div className="panel-body">
            <table className="table table-striped table-hover table-bordered table-responsive">
              <thead className="thead-inverse text-center">
                <tr>
                  <th>STT</th>
                  <th>ID</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Giá</th>
                  <th>Trạng Thái</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody className="text-center">
                  {this.props.children}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    else {
      return (<h1 className="text-center m-5">No Yet products <br/>Add Products now</h1>)
    }

  }
}

export default ProductList;
