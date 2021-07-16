import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://reviewed-com-res.cloudinary.com/image/fetch/s--MVJMFGkW--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_792/https://reviewed-production.s3.amazonaws.com/attachment/6bc36313aa3d4d9f/Amazon_Prime_Video_tips_2.jpg"
        ></img>
        <div className="home__row">
          <Product
            title="MSI Prestige 15"
            price={1300}
            image="https://www.notebookcheck.net/typo3temp/_processed_/9/e/csm_MSI_NB_Prestige_14_Carbon_Gray_photo02_8984aab975.png"
            rating={5}
          ></Product>
          <Product
            title="Samsung Galaxy Buds Plus"
            image="https://i.pcmag.com/imagery/articles/00uQ01jGd52KeNjYUsFpHn8-2.1569486467.fit_lim.jpg"
            price={106.69}
            rating={4}
          ></Product>
        </div>
        <div className="home__row">
          <Product
            title="Samsung Galaxy M40"
            price={349}
            rating={5}
            image="https://i.gadgets360cdn.com/products/large/samsung-galaxy-m40-380x800-1560921995.jpg"
          ></Product>
          <Product
            title="clean and dry"
            price={1.99}
            rating={3}
            image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/76ad7410443025.560e503a0513d.jpg"
          ></Product>
          <Product
            title="G shock"
            price={99.99}
            rating={5}
            image="https://images.casiocdn.com/fit-in/368x500/casio-v2/resource/images/products/watches/hd/GA2100-1A1_hd.png"
          ></Product>
        </div>
        <div className="home__row">
          <Product
            title="Samsung QLED Monitor"
            price={899.99}
            rating={5}
            image="https://t.infibeam.com/img/othe/0441617/d7/d2/7.1.jpg.f267b1d7d2.989xx.jpg"
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
