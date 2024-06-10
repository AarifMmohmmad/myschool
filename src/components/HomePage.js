import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';

function HomePage() {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/whatsapp-image-2024-04-21-at-17-37-13_FkekY.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/add-2024-25-6_VUJig.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/add-2024-25-7_gZVMc.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/fun-53_jgy11.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/fun-32_GCned.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/fun-30_CQ6XP.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/fun-28_SrVH4.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/fun-20_9tIQK.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/fun-21_WA4sJ.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/fun-2_s2faO.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/img_9010_bpbC6.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/img_8910_jlkPz.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/img_8941_V9F0h.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/img_8910_jlkPz.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/img_8867_CZVYX.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/img_8778_7xtHi.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/img_8910_jlkPz.webp',
        'https://res.cloudinary.com/rhinobase/image/upload/w_1080,q_75/v1/hkh_website/img_8910_jlkPz.webp'
    ];

    const handleBackgroundClick = (e) => {
        // Check if the clicked element is the modal background
        if (e.target.classList.contains('modal-background')) {
            setSelectedImage(null);
        }
    };
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 col-xxl-12 ">
                        <div class="home-demo">
                            <div class="owl-carousel owl-theme">
                                <div class="item">
                                    <h2>The Project Jacket</h2>
                                    <span>The Chloe Collection</span>
                                    <button className="ShopButton">Shop now</button>
                                </div>
                                <div class="item">
                                    <h2>The Project Jacket</h2>
                                    <span>The Chloe Collection</span>
                                    <button className="ShopButton">Shop now</button>
                                </div>
                                <div class="item">
                                    <h2>The Project Jacket</h2>
                                    <span>The Chloe Collection</span>
                                    <button className="ShopButton">Shop now</button>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>

                <section>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                            <div className='devlopment-container'>
                                <h1 class="font-semibold text-3xl md:text-6xl">All Round<span class="text-orange-400"> Development</span></h1>

                                <p class="text-secondary-500 max-w-3xl text-lg">we aim at all round development of children in healthy and cheerful environment by providing them the best of education through modern teaching methods and tools. By our strong caring ethos we draw out the best within the child and train them to meet the challenges of the modern competitive world.</p>

                                <div className='button-container'>
                                    <Link to={''}> <button className='AplicationButton'>Application form</button></Link>
                                    <Link to={''}> <button className='ReadBlogButton'>Read blogs</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-8'>
                            <img className='admission-left-image' src='https://www.hkhpublicschool.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrid1.9a837257.jpg&w=1080&q=75' />
                        </div>

                        <div className='col-md-4'>
                            <div className='admisson-text-container'>
                                <h2 class="text-4xl font-semibold">Admission</h2>
                                <p class="text-lg">Admission is open for all classes every year on a first-come, first-serve basis.</p>
                                <Link to={"/admission/registration-form"}><button type="button-admisson" class="button-admisson">Learn more</button></Link>
                            </div>

                        </div>
                    </div>


                    <div className='row mt-3'>
                        <div className='col-md-4'>
                            <div>
                                <img className='our-approch-left-image' src='https://www.hkhpublicschool.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrid2.2ccb3ba4.jpg&w=1080&q=75' />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='admisson-text-container'>
                                <h2 class="text-4xl font-semibold">Our Approach</h2>
                                <p class="text-lg">The school aims at enhancing all-round development of the children in a healthy, cheerful, and conducive environment, leading them to touch and discover new heights.</p>

                                <a href="/about/hkh-school"><button type="button" class="button-admisson">Learn more</button></a>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div>
                                <img className='our-approch-right-image' src='https://www.hkhpublicschool.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrid3.586384d3.jpg&w=1080&q=75' />
                            </div>
                        </div>
                    </div>


                    <div className='row mt-5'>


                        <div className='col-md-4'>
                            <div className='admisson-text-container'>
                                <h2 class="text-4xl font-semibold">Latest News &amp; Events</h2>
                                <p class="text-lg">Check out the events and activities happening in the school.</p>
                                <Link to={"/admission/registration-form"}><button type="button-admisson" class="button-admisson">Learn more</button></Link>
                            </div>

                        </div>
                        <div className='col-md-8'>
                            <img className='admission-left-image' src='https://www.hkhpublicschool.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrid4.103ad38e.jpg&w=1080&q=75' />
                        </div>
                    </div>
                </section>

                {/* <--------------- Creativity section -------------> */}
                <section className='mt-5'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                        <div className='devlopment-container'>
                        <h3 class="flex gap-2 font-semibold text-3xl sm:text-4xl md:text-6xl text-orange-400">Creativity<p class="text-black">Lives Here</p></h3>                            <p class="text-secondary-500 max-w-3xl text-lg text-center">You know that voice in the back of your mind? The one that’s always told you to follow your dreams? This is the place that makes that dream a reality. Spend the next chapter of your life being challenged, taking risks, and embracing beauty.</p>
                        </div>
                    </div>

                    <div className="row Gallery-container">
                        {images.map((image, index) => (
                            <div className="col-md-2 col-lg-2 g-2" key={index}>
                                <img
                                    className="gallery-image"
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    onClick={() => setSelectedImage(image)}
                                />
                            </div>
                        ))}

                        {selectedImage && (
                            <div
                                className="modal fade show modal-background"
                                style={{
                                    display: 'block',
                                    height: '100%',
                                    width: '100%',
                                    backgroundColor: 'rgba(11, 11, 11, 0.79)'
                                }}
                                tabIndex="-1"
                                role="dialog"
                                onClick={handleBackgroundClick}
                            >
                                <div className="modal-header">
                                    <button
                                        type="button"
                                        className="close"
                                        aria-label="Close"
                                        onClick={() => setSelectedImage(null)}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div
                                    className="modal-dialog modal-dialog-centered"
                                    role="document"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <img src={selectedImage} className="img-fluid" alt="Selected" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='row mt-3'>
                        <div className='col-md-12 view-more-container '>
                            <Link to={''}><button className='button-admisson'>View more</button></Link>
                        </div>
                    </div>
                </section>

                {/* <------------------- Student Section---------------------> */}
                <section>
                    <div className='row Student-section-bg'>
                        <div className='col-md-12'>
                            <div className='devlopment-container'>
                                <h3 class="font-semibold text-3xl sm:text-4xl md:text-6xl mb-4 flex justify-center md:gap-3 gap-x-2">Get to Know <span class="text-orange-400">Our Students</span></h3>
                            </div>
                        </div>

                        <div className='col-md-10 mx-auto'>
                            <div id="carouselExampleFade" class="carousel slide carousel-fade mt-5" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="flex flex-col h-full items-center justify-center max-w-6xl mx-auto text-center gap-y-6">
                                            <p class="text-xl mb-2 text-center max-w-3xl">I have always been an ordinary student with very supportive teachers and school as they always inspired me to do beyond my capabilities. Today I am on the journey of becoming a published compiler and have become a published writer.</p>
                                            <div class="flex flex-col justify-center items-center gap-1">
                                                <div class="h-12 w-12 border-[2.5px] relative overflow-hidden border-white dark:border-secondary-900 rounded-full group-data-[group=true]:absolute">
                                                    <img alt="Prajakta Vaidya" src="https://res.cloudinary.com/rhinobase/image/upload/q_75,w_48,h_48,g_face,c_thumb/v1/hkh_website/1109c4da18de7f44a078722cac2bd88e.webp" class="object-cover w-full h-full" />
                                                </div>
                                                <p class="font-semibold">Prajakta Vaidya</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="flex flex-col h-full items-center justify-center max-w-6xl mx-auto text-center gap-y-6"><p class="text-xl mb-2 text-center max-w-3xl">HKH played a significant role in my life. It provided me a better environment to develop my skills. I learned a lot from my Teachers. It helps me to become an optimistic, enthusiastic, and a better person in life. I got my lessons and friends for life here and I still believe in HKH's motto/mantra for life 'I CAN I WILL'.</p><div class="flex flex-col justify-center items-center gap-1"><div class="h-12 w-12 border-[2.5px] relative overflow-hidden border-white dark:border-secondary-900 rounded-full group-data-[group=true]:absolute"><img alt="Manoj Prajapati" src="https://res.cloudinary.com/rhinobase/image/upload/q_75,w_48,h_48,g_face,c_thumb/v1/hkh_website/31384f25696dfd2a5503e9428fd7fc09.webp" class="object-cover w-full h-full" /></div><p class="font-semibold">Manoj Prajapati</p></div></div>
                                    </div>
                                    <div class="carousel-item">
                                        <div><div class="flex flex-col h-full items-center justify-center max-w-6xl mx-auto text-center gap-y-6"><p class="text-xl mb-2 text-center max-w-3xl">HKH encourages students to strive for excellence in all their endeavors and realize their full potential. The ideology of my school is 'Flocking together' which still binds us together as a family.</p><div class="flex flex-col justify-center items-center gap-1"><div class="h-12 w-12 border-[2.5px] relative overflow-hidden border-white dark:border-secondary-900 rounded-full group-data-[group=true]:absolute"><img alt="Mohit Chhipa" src="https://res.cloudinary.com/rhinobase/image/upload/q_75,w_48,h_48,g_face,c_thumb/v1/hkh_website/cc789d45801068af4813afe4cbd7eadd.webp" class="object-cover w-full h-full" /></div><p class="font-semibold">Mohit Chhipa</p></div></div></div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="flex flex-col h-full items-center justify-center max-w-6xl mx-auto text-center gap-y-6"><p class="text-xl mb-2 text-center max-w-3xl">Today I m at this place just because of the best education and support of the faculty of this school. The knowledge, education, and self-confidence I got from this school helped me a lot.</p><div class="flex flex-col justify-center items-center gap-1"><div class="h-12 w-12 border-[2.5px] relative overflow-hidden border-white dark:border-secondary-900 rounded-full group-data-[group=true]:absolute"><img alt="Deepika Moryani" src="https://res.cloudinary.com/rhinobase/image/upload/q_75,w_48,h_48,g_face,c_thumb/v1/hkh_website/a41914e14618bb906eafee16409ae272.webp" class="object-cover w-full h-full" /></div><p class="font-semibold">Deepika Moryani</p></div></div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="flex flex-col h-full items-center justify-center max-w-6xl mx-auto text-center gap-y-6"><p class="text-xl mb-2 text-center max-w-3xl">Staff and system are the important part of any school that has made this school the future shapers of the students..... they identified my talent and gave me every possible opportunity to develop it. Along with my studies, I took part in every activity no matter whether I was good at it or not.</p><div class="flex flex-col justify-center items-center gap-1"><div class="h-12 w-12 border-[2.5px] relative overflow-hidden border-white dark:border-secondary-900 rounded-full group-data-[group=true]:absolute"><img alt="Gaurav Agarwal" src="https://res.cloudinary.com/rhinobase/image/upload/q_75,w_48,h_48,g_face,c_thumb/v1/hkh_website/9b7816bf5e3a2d39d2ffc659bcd3bfc7.webp" class="object-cover w-full h-full" /></div><p class="font-semibold">Gaurav Agarwal</p></div></div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>

                            <div className='row mt-3 mb-5'>
                                <div className='col-md-12 view-more-container '>
                                    <Link to={''}><button className='button-admisson'>View more</button></Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                {/* <--------------------- Form Section --------------------> */}

                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div class="form-text-container">
                                    <h1 class="text-4xl font-bold text-secondary-900">Start your future today.</h1>
                                    <p class="text-xl font-light text-secondary-500">Ready to take the next step toward a bright future? It’s easier than you think. Fill the form and we will contact you.</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="space-y-2">
                                    <form class="space-y-4">
                                        <div class="flex-col gap-1 flex w-full">
                                            <label for="name" class="text-secondary-800 dark:text-secondary-200 select-none text-sm font-medium">Name<span class="text-error-500 dark:error-red-400">*</span></label>
                                            <input name="name" required="" class="w-full z-[1] appearance-none outline-none dark:text-secondary-200 transition-all disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed py-1.5 read-only:focus:border-secondary-300 dark:read-only:focus:border-secondary-700 read-only:focus:ring-0 border border-secondary-300 dark:border-secondary-700 hover:border-primary-500 dark:hover:border-primary-400 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2  bg-transparent rounded-l-md rounded-r-md px-3" />
                                            <p class="my-0.5 text-sm text-red-600 dark:text-red-400"></p></div><div class="flex-col gap-1 flex w-full"><label for="phone" class="text-secondary-800 dark:text-secondary-200 select-none text-sm font-medium">Phone<span class="text-error-500 dark:error-red-400">*</span>
                                            </label><input name="phone" required="" class="w-full z-[1] appearance-none outline-none dark:text-secondary-200 transition-all disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed py-1.5 read-only:focus:border-secondary-300 dark:read-only:focus:border-secondary-700 read-only:focus:ring-0 border border-secondary-300 dark:border-secondary-700 hover:border-primary-500 dark:hover:border-primary-400 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2  bg-transparent rounded-l-md rounded-r-md px-3" />
                                            <p class="my-0.5 text-sm text-red-600 dark:text-red-400"></p>
                                        </div>
                                        <div class="flex-col gap-1 flex w-full">
                                            <label for="message" class="text-secondary-800 dark:text-secondary-200 select-none text-sm font-medium">Message</label>
                                            <textarea name="message" class="w-full appearance-none min-h-[80px] outline-none dark:text-secondary-200 transition-all disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed rounded-md px-3 py-1.5 read-only:focus:border-secondary-300 dark:read-only:focus:border-secondary-700 read-only:focus:ring-0 border border-secondary-300 dark:border-zinc-700 hover:border-primary-500 dark:hover:border-primary-400 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2  bg-transparent"></textarea><p class="my-0.5 text-sm text-red-600 dark:text-red-400">
                                            </p>
                                        </div>
                                        <button type="submit" class="Submit-button">Submit</button>
                                    </form>
                                    <p class="text-center text-xs text-secondary-600">By submitting this data you agree to our Terms of Service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <--------------- map section---------> */}
                <section>
                    <div className='row'>
                        <div className='col-md-12 map-hight g-0'>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <AnyReactComponent
                                    lat={59.955413}
                                    lng={30.337844}
                                    text="My Marker"
                                />
                            </GoogleMapReact>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default HomePage
