import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function CodingAchive() {

    var achiveArr = ['1d.png', '100d.png', '365d.png', '500d.png', '900d.png', '500.png', '1000.png'];
    var LableArr = ['Start of wonderful journey',"100 Day's streak milestone","1st anniversary of LeetCode daily challenge"
        ,"500 Day's streak milestone", "900 Day's and To be continue..","500 Problems solved on LeetCode", "1000 Problems solved on LeeCode"
    ]

    return (
        <div className="container-fluid achive-par">
            <div className="row" id="">
                <h2 className="center mb-3 mx-0">Coding Achievements</h2>

                <Carousel indicators={false}>
                    {
                        achiveArr.map((Element, i) => {
                            return (
                                <Carousel.Item interval={3000} key={i}>
                                    <img className='carousel-img card-img-to proj-img d-flex mx-auto mt-lg-5 mt-4' src={window.location.origin + '/img/ld/' + Element} alt="" />
                                        <h5 className='text-center my-3 lable'>{LableArr[i]}</h5>
                                </Carousel.Item>
                                )
                        }
                        )
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default CodingAchive;