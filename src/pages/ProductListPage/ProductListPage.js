import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { actDeleteRequest, fetchProductsRequest } from "../../actions/index";

class ProductListPage extends Component {
  componentDidMount = () => {
    // call when component first render
    // callApi("products", "GET", null).then((response) => {
    //   this.props.fetchAllProducts(response.data)
    // });
    this.props.fetchAllProducts();
  };
  onDelete = (id) => {
    // var {products} = this.state;
    // callApi(`products/${id}`, "DELETE", null).then((response) => {
    //   if (response.status === 200) { //ok
    //     var index = this.findIndex(products,id);
    //     if (index !== -1) {
    //       products.splice(index, 1);
    //       this.setState({
    //         products: products
    //       });
    //     }

    //   }
    // });
    this.props.ondeleteProduct(id);
  };

  showProductItems = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  };
  render() {
    var { products } = this.props;
    // console.log(products);

    return (
      <div className="col-auto">
        <a href="/product/add-product" className="text-light btn btn-white">
          <button type="button" className="btn btn-primary ">
            <i className="las la-plus mr-2"></i>
            Thêm Sản Phẩm
          </button>
        </a>
        <ProductList>{this.showProductItems(products)}</ProductList>
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => {
      dispatch(fetchProductsRequest());
    },
    ondeleteProduct: (id) => {
      dispatch(actDeleteRequest(id));
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(ProductListPage);
