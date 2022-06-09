import { useState } from "react";

const AddNewProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState("");

    const [isShowDetail, setIsShowDetail] = useState(false);

    const handleClickBtn = () => {
        let object = {
            name, price, size, color
        }


        let productList = localStorage.getItem("productList");
        if (productList) {
            let arr = JSON.parse(productList);
            arr.push((object));
            localStorage.setItem("productList", JSON.stringify(arr));
        } else {
            localStorage.setItem("productList", JSON.stringify([object]));
        }

        setName("");
        setPrice(0);
        setSize(0);
        setColor("");

    }

    const handleHideShow = () => {
        setIsShowDetail(!isShowDetail);
    }

    return (
        <>
            {
                isShowDetail === true
                    ? <button onClick={() => handleHideShow()}>Hide this form</button>
                    : <button onClick={() => handleHideShow()}>Show the form</button>
            }

            {
                isShowDetail === true &&
                <fieldset>
                    <legend>Add A New Product:</legend>
                    <div className="input-product">
                        <label >Name:</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                    </div>
                    <div className="input-product">
                        <label >Price:</label>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" />
                    </div>
                    <div className="input-product">
                        <label >Size:</label>
                        <input value={size} onChange={(e) => setSize(e.target.value)} type="text" />
                    </div>
                    <div className="input-product">
                        <label >Color:</label>
                        <input value={color} onChange={(e) => setColor(e.target.value)} type="text" />
                    </div>
                    <div>
                        <button onClick={() => handleClickBtn()}>+Add New</button>
                    </div>
                </fieldset>
            }
            <div>
                List Product:
                <div>
                    {localStorage.getItem("productList")}
                </div>
            </div>
        </>

    )
}

export default AddNewProduct;