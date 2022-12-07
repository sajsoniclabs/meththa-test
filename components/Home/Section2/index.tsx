import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import company_1 from "../../../public/images/company_1.svg";
import company_2 from "../../../public/images/company_2.svg";
import company_3 from "../../../public/images/company_3.svg";
import company_4 from "../../../public/images/company_4.svg";
import company_5 from "../../../public/images/company_5.svg";

const data = [{ name: `/../../../public/images/company_1.svg` }];

const Section2 = () => {
  return (
    <div className={styles.main}>
      <div className={styles.web}>
        <CarouselProvider
          naturalSlideWidth={5}
          naturalSlideHeight={2}
          totalSlides={10}
          isPlaying={true}
          visibleSlides={5}
          interval={2000}
          dragEnabled={false}
        >
          <Slider className={styles.img}>
            {/* {data.map((item, index) => (
            <Slide key={index} index={index}>
              <Image
                // className={styles.meththalogopic}
                src={item.name}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
          ))} */}

            <Slide index={0} className={styles.images}>
              <Image
                className={styles.ima}
                src={company_1}
                alt={company_1}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={1} className={styles.images}>
              <Image
                src={company_2}
                alt={company_2}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={2} className={styles.images}>
              <Image
                src={company_3}
                alt={company_3}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={3} className={styles.images}>
              <Image
                src={company_4}
                alt={company_4}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={4} className={styles.images}>
              <Image
                src={company_5}
                alt={company_5}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={5} className={styles.images}>
              <Image
                src={company_1}
                alt={company_1}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={6} className={styles.images}>
              <Image
                src={company_2}
                alt={company_2}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={7} className={styles.images}>
              <Image
                src={company_3}
                alt={company_3}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={8} className={styles.images}>
              <Image
                src={company_4}
                alt={company_4}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={9} className={styles.images}>
              <Image
                src={company_5}
                alt={company_5}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
      <div className={styles.tab}>
        <CarouselProvider
          naturalSlideWidth={5}
          naturalSlideHeight={2}
          totalSlides={10}
          isPlaying={true}
          visibleSlides={4}
          interval={2000}
          dragEnabled={false}
        >
          <Slider className={styles.img}>
            {/* {data.map((item, index) => (
            <Slide key={index} index={index}>
              <Image
                // className={styles.meththalogopic}
                src={item.name}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
          ))} */}

            <Slide index={0} className={styles.images}>
              <Image
                className={styles.ima}
                src={company_1}
                alt={company_1}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={1} className={styles.images}>
              <Image
                src={company_2}
                alt={company_2}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={2} className={styles.images}>
              <Image
                src={company_3}
                alt={company_3}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={3} className={styles.images}>
              <Image
                src={company_4}
                alt={company_4}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={4} className={styles.images}>
              <Image
                src={company_5}
                alt={company_5}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={5} className={styles.images}>
              <Image
                src={company_1}
                alt={company_1}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={6} className={styles.images}>
              <Image
                src={company_2}
                alt={company_2}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={7} className={styles.images}>
              <Image
                src={company_3}
                alt={company_3}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={8} className={styles.images}>
              <Image
                src={company_4}
                alt={company_4}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={9} className={styles.images}>
              <Image
                src={company_5}
                alt={company_5}
                width={170}
                height={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
      <div className={styles.mobile}>
        <CarouselProvider
          naturalSlideWidth={5}
          naturalSlideHeight={1.5}
          totalSlides={10}
          isPlaying={true}
          visibleSlides={2}
          interval={2000}
          dragEnabled={false}
        >
          <Slider className={styles.img}>
            {/* {data.map((item, index) => (
            <Slide key={index} index={index}>
              <Image
                // className={styles.meththalogopic}
                src={item.name}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
          ))} */}

            <Slide index={0} className={styles.images}>
              <Image
                className={styles.ima}
                src={company_1}
                alt={company_1}
                width={170}
                height={50}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={1} className={styles.images}>
              <Image
                src={company_2}
                alt={company_2}
                width={170}
                height={50}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={2} className={styles.images}>
              <Image
                src={company_3}
                alt={company_3}
                width={170}
                height={50}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={3} className={styles.images}>
              <Image
                src={company_4}
                alt={company_4}
                width={170}
                height={50}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={4} className={styles.images}>
              <Image
                src={company_5}
                alt={company_5}
                width={170}
                height={50}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={5} className={styles.images}>
              <Image
                src={company_1}
                alt={company_1}
                width={170}
                height={50}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={6} className={styles.images}>
              <Image
                src={company_2}
                alt={company_2}
                width={170}
                height={50}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={7} className={styles.images}>
              <Image
                src={company_3}
                alt={company_3}
                width={170}
                height={50}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={8} className={styles.images}>
              <Image
                src={company_4}
                alt={company_4}
                width={170}
                height={50}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
            <Slide index={9} className={styles.images}>
              <Image
                src={company_5}
                alt={company_5}
                width={170}
                height={50}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default Section2;
