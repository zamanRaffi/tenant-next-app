import React from 'react';
import style from '../../styles/Card.module.css'
import Image from 'next/image';

const Card = () => {
    return (
            <section className={style.container}>

                <hr className={`${style.straightLine3} md:mb-3`} />

                <div className="md:grid md:grid-cols-12 md:gap-4 text-black">
                    <div className="col-span-3 bg-neutral-300 rounded-3xl w-11/12 ml-8">


                    <div className= "relative ml-1">


    <div className="card-body flex">
        {/* Left side content */}
        <div>
            <Image
                src="/star.jpg"
                className="bg-inherit absolute left-3 top-20"
                width={29}
                height={20}
                alt="Image"
            />
            </div>
            
            <h1 className="text-2xl absolute left-1 top-24 p-3 ">
    <span className="block">Don’t Be A</span>
    <span className="block">Angry</span>
    <span className="block">Owner</span>
    <span className="block text-zinc-500 text-base">REVIEW</span>
    </h1>
    
        
        {/* Right side content */}
        <div className="absolute right-1 top-16">
            <Image
                src="/card1.png"
                width={275}
                height={200}
                alt="Image"
            />
        </div>
    </div>
</div>

                        <hr className={style.verticalLine} />
                    </div>

                    <div className="col-span-6">
                        <div className={`${style.card2} card `}>
                            <div className="card-body mb-11">
                                <h5 className="md:text-center md:text-xl md:mb-5">Home Owners</h5>
                                <p className="card-text md:text-center md:font-semibold md:text-xl md:mb-5">
                                    WRITE A REVIEW STOP A TRASHY TENANT
                                </p>
                                <Image
                                 className="self-center md:my-8"
                                    src="/Group 1.png"
                                    width={275}
                                    height={1}
                                    alt="Image"
                                />
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-span-3">
                    <hr className={style.verticalLine2} />
                        <div className={`${style.card3} card md:p-2 md:mr-8`}>
                            <div className="card-body md:px-2">
                                <h5 className="card-title">Why US</h5>
                                <p className="card-text md:text-md text-lg">
                                    Dealing with tenants who do not maintain cleanliness at your
                                    rental property can present significant challenges. Not only
                                    can it diminish the value of your property, but it also
                                    increases the risk of pest infestations. Wouldn't it be
                                    beneficial if you could identify such tenants before
                                    entering into a rental agreement?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* closing div for the grid */}
                <hr className={`${style.straightLine3} mt-3`} />
            </section>

    );
};

export default Card;
