import React from 'react';
import PhotoGallery from '../gallerys/PhotoGallery';
import useGsap from '../../features/hooks/gsap/useGsap';
const images = [
    { original: '/images/gallery_img0.jpg', thumbnail: '/images/gallery_img0.jpg', alt: 'gallery_img0', width: 763, height: 1011 },
    { original: '/images/gallery_img1.jpg', thumbnail: '/images/gallery_img1.jpg', alt: 'gallery_img1', width: 763, height: 1011 },
    { original: '/images/gallery_img2.jpg', thumbnail: '/images/gallery_img2.jpg', alt: 'gallery_img2', width: 763, height: 1011 },
    { original: '/images/gallery_img3.jpg', thumbnail: '/images/gallery_img3.jpg', alt: 'gallery_img3', width: 1526, height: 1011 },
    { original: '/images/gallery_img4.jpg', thumbnail: '/images/gallery_img4.jpg', alt: 'gallery_img4', width: 763, height: 1011 },
    { original: '/images/gallery_img5.jpg', thumbnail: '/images/gallery_img5.jpg', alt: 'gallery_img5', width: 763, height: 1011 },
    { original: '/images/gallery_img6.jpg', thumbnail: '/images/gallery_img6.jpg', alt: 'gallery_img6', width: 763, height: 1011 },
    { original: '/images/gallery_img7.jpg', thumbnail: '/images/gallery_img7.jpg', alt: 'gallery_img7', width: 763, height: 1011 },
    { original: '/images/gallery_img8.jpg', thumbnail: '/images/gallery_img8.jpg', alt: 'gallery_img8', width: 763, height: 1011 },
    { original: '/images/gallery_img9.jpg', thumbnail: '/images/gallery_img9.jpg', alt: 'gallery_img9', width: 1526, height: 1011 },
    { original: '/images/gallery_img10.jpg', thumbnail: '/images/gallery_img10.jpg', alt: 'gallery_img10', width: 763, height: 1011 },
    { original: '/images/gallery_img11.jpg', thumbnail: '/images/gallery_img11.jpg', alt: 'gallery_img11', width: 763, height: 1011 },
];

const Gallerys = () => {
    const {app, title, gallery} = useGsap();

    return (
        <section ref={app}>
            <div className='inner'>
                <h1 className='title' ref={title}>GALLERY</h1>
                <div className='gallery' ref={gallery}>
                    <PhotoGallery 
                        images={images}
                    />
                </div> {/* .gallery : end */}
            </div>
        </section>
    );
};

export default Gallerys;