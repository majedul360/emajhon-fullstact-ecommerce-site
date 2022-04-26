import { Link } from "react-router-dom";

const Shipment = () => {
  return (
    <div className="form-container">
      <div className="container">
        <h3>shipment</h3>
        <form action="">
          <div className="input-group">
            <label htmlFor="">name</label> <br />
            <input type="text" placeholder="enter your name" />
          </div>
          <div className="input-group">
            <label htmlFor="">email</label> <br />
            <input type="email" placeholder="enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="">address</label> <br />
            <input type="text" placeholder="enter your address" />
          </div>
          <div className="input-group">
            <label htmlFor="">phone number</label> <br />
            <input type="number" placeholder="enter your phone number" />
          </div>

          <input className="btn" type="submit" value="add" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
