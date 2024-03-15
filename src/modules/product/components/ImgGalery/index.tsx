"use client";

import { DAT } from "@/shared/services/strapi/Escultura/domain/Escultura";
import { useState } from "react";
import UseEmblaCarousel from "embla-carousel-react";
import ReactImageMagnify from "react-image-magnify";

export const ImagesGaleryComponent = ({ images }: { images: DAT[] }) => {
    const [ImageSelect, setImageSelect] = useState(images[0]?.attributes.url);
    const [emblaRef] = UseEmblaCarousel();

    return (
        <div className="w-full h-full sm:flex sm:items-center sm:justify-center">
            {/* Mobile */}
            <div className="embla sm:hidden" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((img, index) => (
                        <img className="embla__slide" key={index + 1} src={img.attributes.url} alt="lorem" />
                    ))}
                </div>
            </div>

            {/* Desktop */}
            <div
                className="hidden sm:flex gap-4 justify-center"
            >
                <ImagesList listImages={images} changeImageSelect={setImageSelect} />
                <PreviewImage image={ImageSelect} />
            </div>
        </div>
    );
};

const ImagesList = ({
    listImages,
    changeImageSelect,
}: {
    listImages: DAT[];
    changeImageSelect: (url: string) => void;
}) => {
    return (
        <div className="flex flex-col gap-2">
            {listImages.map((img, index) => (
                <img
                    src={img.attributes.url}
                    className="w-14 h-14 cursor-pointer rounded-lg"
                    key={index}
                    onMouseEnter={() => changeImageSelect(listImages[index].attributes.url)}
                />
            ))}
        </div>
    );
};

const PreviewImage = ({ image }: { image: string }) => {
    return (
        <div style={{ maxWidth: "450px" }}>
            <ReactImageMagnify
                {...{
                    smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: image,
                        sizes: "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                    },
                    largeImage: {
                        src: image,
                        width: 1000,
                        height: 1100,
                    },
                    enlargedImageContainerDimensions: {
                        width: "70%",
                        height: "70%",
                    },
                    enlargedImageContainerStyle: { // esto te va a centrar el crop, si gustas lo quitas
                       top: "50%",
                       transform: "translateY(-50%)",
                    },
                    lensStyle: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
                }}
            />
        </div>
    );
};
