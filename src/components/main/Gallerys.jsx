import React from 'react';
import PhotoGallery from '../gallerys/PhotoGallery';
import useGsap from '../../features/hooks/gsap/useGsap';
import galleryImg_0 from 'src/assets/images/gallery_img0.jpg';
import galleryImg_1 from 'src/assets/images/gallery_img1.jpg';
import galleryImg_2 from 'src/assets/images/gallery_img2.jpg';
import galleryImg_3 from 'src/assets/images/gallery_img3.jpg';
import galleryImg_4 from 'src/assets/images/gallery_img4.jpg';
import galleryImg_5 from 'src/assets/images/gallery_img5.jpg';
import galleryImg_6 from 'src/assets/images/gallery_img6.jpg';
import galleryImg_7 from 'src/assets/images/gallery_img7.jpg';
import galleryImg_8 from 'src/assets/images/gallery_img8.jpg';
import galleryImg_9 from 'src/assets/images/gallery_img9.jpg';
import galleryImg_10 from 'src/assets/images/gallery_img10.jpg';
import galleryImg_11 from 'src/assets/images/gallery_img11.jpg';

const images = [
    { original: galleryImg_0, thumbnail: galleryImg_0, alt: 'gallery_img0', width: 720, height: 1280 },
    { original: galleryImg_1, thumbnail: galleryImg_1, alt: 'gallery_img1', width: 720, height: 1280 },
    { original: galleryImg_2, thumbnail: galleryImg_2, alt: 'gallery_img2', width: 720, height: 1280 },
    { original: galleryImg_3, thumbnail: galleryImg_3, alt: 'gallery_img3', width: 720, height: 1280 },
    { original: galleryImg_4, thumbnail: galleryImg_4, alt: 'gallery_img4', width: 720, height: 1280 },
    { original: galleryImg_5, thumbnail: galleryImg_5, alt: 'gallery_img5', width: 720, height: 1280 },
    { original: galleryImg_6, thumbnail: galleryImg_6, alt: 'gallery_img6', width: 720, height: 1280 },
    { original: galleryImg_7, thumbnail: galleryImg_7, alt: 'gallery_img7', width: 720, height: 1280 },
    { original: galleryImg_8, thumbnail: galleryImg_8, alt: 'gallery_img8', width: 720, height: 1280 },
    { original: galleryImg_9, thumbnail: galleryImg_9, alt: 'gallery_img9', width: 720, height: 1280 },
    { original: galleryImg_10, thumbnail: galleryImg_10, alt: 'gallery_img10', width: 720, height: 1280 },
    { original: galleryImg_11, thumbnail: galleryImg_11, alt: 'gallery_img11', width: 720, height: 1280 },
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