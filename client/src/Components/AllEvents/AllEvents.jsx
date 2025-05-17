import React, { useEffect, useState } from 'react'
import { getAllEvents } from '../../Network/card.api';

export default function AllEvents() {
const [getProducts, setgetProducts] = useState([]);


async function getCard() {
    await getAllEvents("product")
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


  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <article class="card mt-5">
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
                        <button class="card__button">Applay Now</button>
                    </div>
                    </article>
                </div>
            </div>
        </div>

    </section>
  )
}
