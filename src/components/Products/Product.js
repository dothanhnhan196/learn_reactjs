import './Product.scss';

import shirt1 from '../../assets/images/shirt1.jpg';
import shirt2 from '../../assets/images/shirt2.jpg';
import shirt3 from '../../assets/images/shirt3.jpg';
import shirt4 from '../../assets/images/shirt4.jpg';

import { useState } from 'react';
import Lightbox from 'react-image-lightbox';

const images = [
    shirt1,
    shirt2,
    shirt3,
    shirt4,
];

const Product = () => {

    const [currentUpImg, setcurrentUpImg] = useState(shirt1);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const handleClickReviewImg = () => {
        setIsOpen(true);
        let index = images.findIndex(item => item === currentUpImg);
        setPhotoIndex(index);
        setIsOpen(true);
    }

    return (
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className='img-up'>
                        <img src={currentUpImg} onClick={() => handleClickReviewImg()} />
                    </div>
                    <div className='img-down'>
                        <div className='img-small' onClick={() => setcurrentUpImg(shirt2)}>
                            <img className={currentUpImg === shirt2 ? 'active' : ''} src={shirt2} />
                        </div>
                        <div className='img-small' onClick={() => setcurrentUpImg(shirt3)}>
                            <img className={currentUpImg === shirt3 ? 'active' : ''} src={shirt3} />
                        </div>
                        <div className='img-small' onClick={() => setcurrentUpImg(shirt4)}>
                            <img className={currentUpImg === shirt4 ? 'active' : ''} src={shirt4} />
                        </div>
                        <div className='img-small' onClick={() => setcurrentUpImg(shirt1)}>
                            <img className={currentUpImg === shirt1 ? 'active' : ''} src={shirt1} />
                        </div>

                    </div>
                </div>
                <div className="content-right">
                    <div className='title'>Giày thể thao chạy bộ</div>
                    <div className='price'>3.695.000</div>
                    <div className='size'>Size: 30</div>
                    <hr />
                    <div className='action'>
                        <label>Số lượng</label>
                        <input type='number' min={1} max={99} value={1} className='quantity' />
                        <button className='buy'>Chọn mua</button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}

                    animationDisabled={true}
                />
            )}
        </div>
    )
}

export default Product;