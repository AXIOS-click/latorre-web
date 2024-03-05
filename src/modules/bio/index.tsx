import { MainScrollableContainer } from "@/shared/layout/MainScrollableContainer";
import React from "react";
export const BioModule = () => {
    return (
        <>
            <MainScrollableContainer>
                <div className="container mx-auto px-4">
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-4 info">
                        <div className="col-span-1 md:col-span-12">
                            <div className="about">
                                <h1 className="section-heading text-3xl md:text-5xl font-semibold text-gray-900">
                                    About Me
                                </h1>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-4">
                            <img
                                src="https://source.unsplash.com/NXiIVnzBwZ8"
                                alt="About Me"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-7">
                            <div className="intro">
                                <h2 className="text-2xl md:text-4xl text-gray-900 font-medium">
                                    Jane Writer is an award-winning author and lifestyle blogger.
                                </h2>
                                <p className="mb-4">
                                    Crud indignant permissively through burped nodded timorous onto the as wore less
                                    ouch far rewound considering so broken dachshund jeepers sanely confident.
                                    Contemplated growled apart enthusiastically punitively much much darn onto deep dear
                                    returned some cockatoo hungrily fortuitously enchantingly ouch sanely on
                                    unceremonious especially much yikes darn.
                                </p>
                                <p className="mb-4">
                                    Gecko far one before ouch far indistinctly ouch much doubtfully the alas some
                                    classically far insincerely much honey close savage ground according enthusiastic
                                    and that then about realistic however more forlornly dear demonstrably a this.
                                </p>
                                <p>
                                    Less urgently ape one some hamster much well that dolphin strode hey underneath so
                                    eagle ouch a hey turtle notwithstanding truly censoriously congratulated dear one
                                    mandrill weak much then disconsolately wholesome.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-7">
                            <blockquote className="italic text-center w-full mx-auto flex items-center justify-center">
                                <h3 className="text-xl md:text-2xl">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa provident voluptatem
                                    consectetur illum, natus placeat incidunt tempora architecto aliquid recusandae
                                    eligendi repudiandae ex laborum neque quod cum id facere nulla.
                                </h3>
                            </blockquote>
                        </div>
                        <div className="col-span-1 md:col-span-5">
                            <img
                                src="https://source.unsplash.com/8eSrC43qdro"
                                alt="Additional Image"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </section>
                </div>
            </MainScrollableContainer>
        </>
    );
};
