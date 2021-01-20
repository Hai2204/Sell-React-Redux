import React, { Component } from "react";
import { actAddProductRequest, actEditProductRequest, actUpdateProductRequest } from "../../actions/index";
import { connect } from "react-redux";
class ProductsActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: "",
      txtPrice: "",
      cbstatus: false,
    };
  }
  componentDidMount() {
     var {match } = this.props;
     if (match) {
       var id = match.params.id;
      this.props.onEditProduct(id)
     }
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      if (nextProps && nextProps.itemEditing) {
        this.setState({
          id: itemEditing.id,
          txtName: itemEditing.name,
          txtPrice: itemEditing.price,
          cbstatus: itemEditing.status
        })
      }
    }
  }

  onChange = (e) =>{
    var target = e.target;
    var name = target.name;
    var value= target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  onSave = (e) => {
    e.preventDefault();
    const {id, txtName, txtPrice, cbstatus } = this.state;
    const {history} = this.props;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: cbstatus
    };
    if (id !== '') { // update
      this.props.onUpdateProduct(product)
      history.goBack();
    }else{ // add
      this.props.onAddProduct(product) 
      setTimeout(() => {
        history.goBack();
      }, 1000);
    }

  }
  render() {
    const { txtName, txtPrice, cbstatus } = this.state;
    return (
      <div className="col-xl-6 col-md-6 col-12">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label htmlFor="product ">Tên Sản Phẩm :</label>
            <input
              type="text"
              className="form-control"
              id="product"
              name="txtName"
              aria-describedby="product"
              value={txtName}
              onChange={this.onChange}
              placeholder="Nhập Tên Sản Phẩm..."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Giá :</label>
            <input
              type="text"
              className="form-control"
              pattern="[0-9]{1,10}"
              id="price"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
              placeholder="Nhập Giá..."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Trạng thái: </label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="cbstatus"
                  value={cbstatus}
                  onChange={this.onChange}
                  id="haveProduct"
                  checked={cbstatus}
                />
                <label className="form-check-label" htmlFor="haveProduct">
                  Còn Hàng
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Lưu Lại
          </button>

          <a type="submit" className="btn btn-danger mx-2" href="/products">
            cancel
          </a>
        </form>
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    itemEditing: state.itemEditing,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actUpdateProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actEditProductRequest(product));
    }
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(ProductsActionPage);
