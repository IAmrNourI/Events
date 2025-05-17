import React, { useEffect, useState } from 'react'
import { applyApi, getCardApi } from '../../Network/card.api';

export default function Card() {
const [getProducts, setgetProducts] = useState([]);


async function getCard() {
    await getCardApi("product")
      .then((res) => {
        console.log(res)
        setgetProducts(res.data.data);
      })
      .catch((res) => {
      });
  }

  useEffect(() => {
    getCard();
  }, []);

  async function applyNow(id) {
    await applyApi(id)
      .then((res) => {
        console.log(res)
      })
      .catch((res) => {
      });
  }



  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    {getProducts.map((card) => (      
                        <article key={card._id} class="card mt-5">
                        <img
                            class="card__background "
                            src="https://i.imgur.com/QYWAcXk.jpeg"
                            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                        />
                        <div class="card__content | flow">
                            <div class="card__content--container | flow">
                            <h2 class="card__title">Colombia</h2>
                            <p class="card__description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit                        
                            </p>
                            </div>
                            <button onClick={(() => applyNow(card._id))} class="card__button">Apply Now</button>
                        </div>
                        </article>
                        ))}
                </div>
            </div>
        </div>

    </section>
)
}
