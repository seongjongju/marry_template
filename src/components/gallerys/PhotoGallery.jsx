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
                        width={img.width}
                        height={img.height}
                        alt={img.alt}
                    >
                        {({ ref, open }) => (
                            <img
                                className={`gallery-${index}`}
                                ref={ref}
                                onClick={open}
                                src={img.thumbnail}
                                style={{
                                    cursor: 'pointer', 
                                    width: '100%', 
                                    height: '100%' 
                                }}
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
