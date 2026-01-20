import React from 'react';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

const PhotoGallery = ({ images }) => {
    return (
        <Gallery>
            {
                images.map((img, index) => ( 
                    <Item
                        key={index} 
                        original={img.original}
                        thumbnail={img.thumbnail}
                        width={400}
                        height={400}
                        alt={img.alt}
                    >
                        {({ ref, open }) => (
                            <img
                                ref={ref}
                                onClick={open}
                                src={img.thumbnail}
                                style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
                                alt={img.alt}
                            />
                        )}
                    </Item>
                ))
            }
        </Gallery>
    );
};

export default PhotoGallery;
