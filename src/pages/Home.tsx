import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onVehicleModelsTextClick = useCallback(() => {
    navigate("/vehicle-models");
  }, [navigate]);

  const onTestimonialsTextClick = useCallback(() => {
    navigate("/testimonials");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <img
        className={styles.dRenderFleetDeliveryVehiclIcon}
        alt=""
        src="/3drenderfleetdeliveryvehicles-1@2x.png"
      />
      <div className={styles.downloadApp}>
        <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
        <div className={styles.buttons}>
          <img className={styles.btn1Icon} alt="" src="/btn-1.svg" />
          <img className={styles.btn2Icon} alt="" src="/btn-2.svg" />
        </div>
        <div className={styles.title}>
          <div className={styles.withLotsOf}>
            Get exclusive access to car rentals with our mobile app. Download
            now and experience convenience on the go.
          </div>
          <b className={styles.downloadOurMobile}>
            Download our mobile app ⚡️
          </b>
        </div>
      </div>
      <div className={styles.tesimonials}>
        <b className={styles.whatOurCustomers}>What Our Customers Say</b>
        <div className={styles.testimonials44}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.iconPackParent}>
                <img className={styles.iconPack} alt="" src="/icon-pack.svg" />
                <div className={styles.itIsALongEstablishedFactWrapper}>
                  <div className={styles.itIsA}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </div>
                </div>
              </div>
              <div className={styles.avatarParent}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar@2x.png"
                />
                <div className={styles.loraSmith}>{`Lora Smith `}</div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.iconPackParent}>
                <img className={styles.iconPack} alt="" src="/icon-pack.svg" />
                <div className={styles.itIsALongEstablishedFactWrapper}>
                  <div className={styles.itIsA}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </div>
                </div>
              </div>
              <div className={styles.avatarParent}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar@2x.png"
                />
                <div className={styles.loraSmith}>{`Lora Smith `}</div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.iconPackContainer}>
                <img className={styles.iconPack} alt="" src="/icon-pack.svg" />
                <div className={styles.itIsALongEstablishedFactWrapper}>
                  <div className={styles.itIsA2}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </div>
                </div>
              </div>
              <div className={styles.avatarParent}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar@2x.png"
                />
                <div className={styles.loraSmith}>{`Lora Smith `}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.servicesbenefits}>
        <img
          className={styles.servicesbenefitsChild}
          alt=""
          src="/rectangle-86@2x.png"
        />
        <div className={styles.ourServicesBenefitsParent}>
          <b className={styles.ourServices}>{`Our Services & Benefits`}</b>
          <div className={styles.toMakeRenting}>
            To make renting easy and hassle-free, we provide a variety of
            services and advantages. We have you covered with a variety of
            vehicles and flexible rental terms.
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.featureText}>
              <img
                className={styles.featuredIcon}
                alt=""
                src="/featured-icon.svg"
              />
              <div className={styles.textAndSupportingText}>
                <div className={styles.text}>Quality Choice</div>
                <div className={styles.supportingText}>
                  Choose from a varied selection of top-tier trucks, ensuring
                  high-quality options for your specific needs and preferences.
                </div>
              </div>
              <div className={styles.button}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.text1}>Learn more</div>
                <img
                  className={styles.arrowRightIcon}
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </div>
            <div className={styles.featureText}>
              <img
                className={styles.featuredIcon}
                alt=""
                src="/featured-icon.svg"
              />
              <div className={styles.textAndSupportingText}>
                <div className={styles.text}>Affordable Prices</div>
                <div className={styles.supportingText}>
                  Our rental rates are highly competitive and affordable,
                  allowing our customers to enjoy their trips without breaking
                  the bank.
                </div>
              </div>
              <div className={styles.button}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.text1}>Learn more</div>
                <img
                  className={styles.arrowRightIcon}
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </div>
            <div className={styles.featureText}>
              <img
                className={styles.featuredIcon}
                alt=""
                src="/featured-icon.svg"
              />
              <div className={styles.textAndSupportingText}>
                <div className={styles.text}>Convenient Online Booking</div>
                <div className={styles.supportingText}>
                  With our easy-to-use online booking system, customers can
                  quickly and conveniently reserve their rental truck from
                  anywhere, anytime.
                </div>
              </div>
              <div className={styles.button}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.text1}>Learn more</div>
                <img
                  className={styles.arrowRightIcon}
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.collectionOfTrucks}>
        <div className={styles.collectionOfTrucksChild} />
        <div className={styles.ourImpressiveCollectionOfTParent}>
          <b className={styles.ourServices}>
            Our Impressive Collection of Trucks
          </b>
          <div className={styles.fromRobustUtility}>
            From robust utility trucks to versatile cargo vans, our carefully
            curated selection ensures that our customers experience unmatched
            performance and reliability for all their transportation needs
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.popularWrapper}>
            <div className={styles.popular}>{`Popular `}</div>
          </div>
          <div className={styles.smallTruckWrapper}>
            <div className={styles.popular}>Small Truck</div>
          </div>
          <div className={styles.smallTruckWrapper}>
            <div className={styles.popular}>Large Truck</div>
          </div>
          <div className={styles.smallTruckWrapper}>
            <div className={styles.popular}>Medium Truck</div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" />
          <img className={styles.image272Icon} alt="" src="/image-272@2x.png" />
          <div className={styles.frameParent2}>
            <div className={styles.locationSolidParent}>
              <img
                className={styles.locationSolidIcon}
                alt=""
                src="/location-solid.svg"
              />
              <div className={styles.losAngeles}>Los Angeles</div>
            </div>
            <div className={styles.tataAceHtMiniParent}>
              <div className={styles.tataAceHt}>TATA Ace HT mini</div>
              <div className={styles.day}>
                <span className={styles.span}>1000</span>
                <span className={styles.day1}>/day</span>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent3}>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/speedometer01.svg"
                  />
                  <div className={styles.div}>4,000</div>
                </div>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.manualGearboxIcon}
                    alt=""
                    src="/manualgearbox.svg"
                  />
                  <div className={styles.div}>Auto</div>
                </div>
                <div className={styles.users01Parent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/users01.svg"
                  />
                  <div className={styles.div}>2 Person</div>
                </div>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.manualGearboxIcon}
                    alt=""
                    src="/gasstation.svg"
                  />
                  <div className={styles.div}>Pertol</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rentNowWrapper}>
            <div className={styles.loraSmith}>Rent Now</div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" />
          <div className={styles.frameParent2}>
            <div className={styles.locationSolidParent}>
              <img
                className={styles.locationSolidIcon}
                alt=""
                src="/location-solid.svg"
              />
              <div className={styles.losAngeles}>Los Angeles</div>
            </div>
            <div className={styles.tataAceHtMiniParent}>
              <div className={styles.tataAceHt}>Mahindra Tractor</div>
              <div className={styles.day}>
                <span className={styles.span}>1000</span>
                <span className={styles.day1}>/day</span>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent3}>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/speedometer01.svg"
                  />
                  <div className={styles.div}>4,000</div>
                </div>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.manualGearboxIcon}
                    alt=""
                    src="/manualgearbox.svg"
                  />
                  <div className={styles.div}>Auto</div>
                </div>
                <div className={styles.users01Parent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/users01.svg"
                  />
                  <div className={styles.div}>4 Person</div>
                </div>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.manualGearboxIcon}
                    alt=""
                    src="/gasstation.svg"
                  />
                  <div className={styles.div}>Electric</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rentNowWrapper}>
            <div className={styles.loraSmith}>Rent Now</div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild1} />
          <img className={styles.frameItem} alt="" />
          <div className={styles.frameParent2}>
            <div className={styles.locationSolidParent}>
              <img
                className={styles.locationSolidIcon}
                alt=""
                src="/location-solid.svg"
              />
              <div className={styles.losAngeles}>Los Angeles</div>
            </div>
            <div className={styles.tataAceHtMiniParent}>
              <div className={styles.tataAceHt}>EICHER 19</div>
              <div className={styles.day}>
                <span className={styles.span}>1000</span>
                <span className={styles.day5}>{`/day  `}</span>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent3}>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/speedometer01.svg"
                  />
                  <div className={styles.div}>4,000</div>
                </div>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.manualGearboxIcon}
                    alt=""
                    src="/manualgearbox.svg"
                  />
                  <div className={styles.div}>Auto</div>
                </div>
                <div className={styles.users01Parent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/users01.svg"
                  />
                  <div className={styles.div}>4 Person</div>
                </div>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.manualGearboxIcon}
                    alt=""
                    src="/gasstation.svg"
                  />
                  <div className={styles.div}>Electric</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rentNowFrame}>
            <div className={styles.loraSmith}>Rent Now</div>
          </div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-85@2x.png"
          />
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" />
          <div className={styles.frameParent2}>
            <div className={styles.locationSolidParent}>
              <img
                className={styles.locationSolidIcon}
                alt=""
                src="/location-solid.svg"
              />
              <div className={styles.losAngeles}>Los Angeles</div>
            </div>
            <div className={styles.tataAceHtMiniParent}>
              <div className={styles.tataAceHt}>Combine Harvester</div>
              <div className={styles.day}>
                <span className={styles.span}>1000</span>
                <span className={styles.day1}>/day</span>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent3}>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/speedometer01.svg"
                  />
                  <div className={styles.div}>4,000</div>
                </div>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.manualGearboxIcon}
                    alt=""
                    src="/manualgearbox.svg"
                  />
                  <div className={styles.div}>Auto</div>
                </div>
                <div className={styles.users01Parent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/users01.svg"
                  />
                  <div className={styles.div}>4 Person</div>
                </div>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.manualGearboxIcon}
                    alt=""
                    src="/gasstation.svg"
                  />
                  <div className={styles.div}>Electric</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rentNowWrapper}>
            <div className={styles.loraSmith}>Rent Now</div>
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" />
          <img className={styles.image273Icon} alt="" src="/image-273@2x.png" />
          <div className={styles.frameParent2}>
            <div className={styles.locationSolidParent}>
              <img
                className={styles.locationSolidIcon}
                alt=""
                src="/location-solid.svg"
              />
              <div className={styles.losAngeles}>Los Angeles</div>
            </div>
            <div className={styles.tataAceHtMiniParent}>
              <div className={styles.tataAceHt}>EICHER pro</div>
              <div className={styles.day}>
                <span className={styles.span}>1000</span>
                <span className={styles.day1}>/day</span>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent3}>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/speedometer01.svg"
                  />
                  <div className={styles.div}>4,000</div>
                </div>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.manualGearboxIcon}
                    alt=""
                    src="/manualgearbox.svg"
                  />
                  <div className={styles.div}>Auto</div>
                </div>
                <div className={styles.users01Parent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/users01.svg"
                  />
                  <div className={styles.div}>4 Person</div>
                </div>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.manualGearboxIcon}
                    alt=""
                    src="/gasstation.svg"
                  />
                  <div className={styles.div}>Electric</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rentNowWrapper}>
            <div className={styles.loraSmith}>Rent Now</div>
          </div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" />
          <div className={styles.frameParent2}>
            <div className={styles.locationSolidParent}>
              <img
                className={styles.locationSolidIcon}
                alt=""
                src="/location-solid.svg"
              />
              <div className={styles.losAngeles}>Los Angeles</div>
            </div>
            <div className={styles.tataAceHtMiniParent}>
              <div className={styles.tataAceHt}>{`Rotavator `}</div>
              <div className={styles.day}>
                <span className={styles.span}>1000</span>
                <span className={styles.day1}>/day</span>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent3}>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/speedometer01.svg"
                  />
                  <div className={styles.div}>4,000</div>
                </div>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.manualGearboxIcon}
                    alt=""
                    src="/manualgearbox.svg"
                  />
                  <div className={styles.div}>Auto</div>
                </div>
                <div className={styles.users01Parent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/users01.svg"
                  />
                  <div className={styles.div}>4 Person</div>
                </div>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.manualGearboxIcon}
                    alt=""
                    src="/gasstation.svg"
                  />
                  <div className={styles.div}>Electric</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rentNowWrapper}>
            <div className={styles.loraSmith}>Rent Now</div>
          </div>
        </div>
        <div className={styles.seeAllTrucksParent}>
          <b className={styles.seeAllTrucks}>See all Trucks</b>
          <img className={styles.arrowLeftIcon} alt="" src="/arrowleft.svg" />
        </div>
        <img className={styles.image278Icon} alt="" src="/image-278@2x.png" />
      </div>
      <div className={styles.rentSection}>
        <b className={styles.rentByBrands}>Rent by Brands</b>
        <b className={styles.rentByBody}>Rent by body type</b>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild} />
          <div className={styles.frameWrapper6}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <img
                className={styles.image266Icon}
                alt=""
                src="/image-266@2x.png"
              />
              <div className={styles.eicher}>Eicher</div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupItem} />
          <div className={styles.truck1Wrapper}>
            <img className={styles.truck1Icon} alt="" src="/truck-1@2x.png" />
          </div>
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.groupChild} />
          <div className={styles.image271Parent}>
            <img
              className={styles.image271Icon}
              alt=""
              src="/image-271@2x.png"
            />
            <div className={styles.eicher}>Leaz</div>
          </div>
        </div>
        <div className={styles.rectangleParent6}>
          <div className={styles.groupItem} />
          <div className={styles.container1Wrapper}>
            <img
              className={styles.container1Icon}
              alt=""
              src="/container-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.rectangleParent7}>
          <div className={styles.groupChild} />
          <div className={styles.image264Parent}>
            <img
              className={styles.image264Icon}
              alt=""
              src="/image-264@2x.png"
            />
            <div className={styles.eicher}>TATA</div>
          </div>
        </div>
        <div className={styles.rectangleParent8}>
          <div className={styles.groupItem} />
          <div className={styles.truck11Wrapper}>
            <img className={styles.truck11} alt="" src="/truck-1-1@2x.png" />
          </div>
        </div>
        <div className={styles.rectangleParent9}>
          <div className={styles.groupChild} />
          <div className={styles.image271Group}>
            <img
              className={styles.image271Icon1}
              alt=""
              src="/image-271@2x.png"
            />
            <div className={styles.eicher}>{`Mahindra `}</div>
          </div>
        </div>
        <div className={styles.rectangleParent10}>
          <div className={styles.groupChild} />
          <div className={styles.image271Container}>
            <img
              className={styles.image271Icon2}
              alt=""
              src="/image-271@2x.png"
            />
            <div className={styles.eicher}>{`Hindustan `}</div>
          </div>
        </div>
        <div className={styles.rectangleParent11}>
          <div className={styles.groupChild} />
          <div className={styles.image271Parent1}>
            <img
              className={styles.image271Icon3}
              alt=""
              src="/image-271@2x.png"
            />
            <div className={styles.eicher}>Force</div>
          </div>
        </div>
      </div>
      <div className={styles.heroSection}>
        <img
          className={styles.heroSectionChild}
          alt=""
          src="/rectangle-80@2x.png"
        />
        <div className={styles.heroSectionItem} />
        <img className={styles.heroSectionInner} alt="" src="/star-1.svg" />
        <img className={styles.heroSectionChild1} alt="" src="/group-265.svg" />
        <img className={styles.truckIcon} alt="" src="/truck@2x.png" />
        <div className={styles.heading}>
          <span
            className={styles.discoverBookAnd}
          >{`Discover, book, and `}</span>
          <span className={styles.rentATruck}>rent a truck in easy steps</span>
        </div>
        <div className={styles.heading1}>
          Find the perfect truck for your storage and budget. Enjoy the open
          road with our reliable and affordable rental service.
        </div>
        <div className={styles.lineParent}>
          <div className={styles.lineDiv} />
          <div className={styles.frameParent14}>
            <div className={styles.chevronRightWrapper}>
              <img
                className={styles.chevronRightIcon}
                alt=""
                src="/chevronright.svg"
              />
            </div>
            <div className={styles.bookNow}>book now</div>
          </div>
        </div>
      </div>
      <div className={styles.mainCta}>
        <div className={styles.mainCtaChild} />
        <div className={styles.frameParent15}>
          <div className={styles.frameParent16}>
            <div className={styles.selectVehicleParent}>
              <div className={styles.selectVehicle}>select vehicle</div>
              <div className={styles.frameWrapper7}>
                <div className={styles.locationParent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/location.svg"
                  />
                  <div className={styles.vehicles}>vehicles</div>
                </div>
              </div>
            </div>
            <div className={styles.selectVehicleParent}>
              <div className={styles.pickupLocation}>Pickup location</div>
              <div className={styles.frameWrapper7}>
                <div className={styles.locationParent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/location.svg"
                  />
                  <div className={styles.vehicles}>Search a location</div>
                </div>
              </div>
            </div>
            <div className={styles.pickUpDateParent}>
              <div className={styles.selectVehicle}>Pick-up date</div>
              <div className={styles.frameWrapper9}>
                <div className={styles.parent}>
                  <div className={styles.vehicles}>12/12/2023</div>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/calendar.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.pickUpDateParent}>
              <div className={styles.selectVehicle}>Return Date</div>
              <div className={styles.frameWrapper9}>
                <div className={styles.parent}>
                  <div className={styles.vehicles}>12/12/2023</div>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/calendar.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bookNowParent}>
            <b className={styles.seeAllTrucks}>Book now</b>
            <img
              className={styles.chevronRightIcon}
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.logo}>
          <div className={styles.wheelshare}>
            <span>Wheel</span>
            <span className={styles.share}>Share</span>
          </div>
          <img className={styles.logoChild} alt="" src="/line-2.svg" />
        </div>
        <div className={styles.yourTrustedTruck}>
          Your Trusted Truck Rental Solution
        </div>
        <div className={styles.copyrightTeamInc}>© Copyright Team Inc.</div>
        <div className={styles.infowheelsharecomParent}>
          <a
            className={styles.infowheelsharecom}
            href="mailto:info@truckrentify.com"
            target="_blank"
          >
            info@Wheelshare.com
          </a>
          <div className={styles.div8}>+91 98765 43210</div>
          <div className={styles.pune}>Pune</div>
          <div className={styles.contactUs}>Contact Us</div>
        </div>
        <div className={styles.subscribeToOur}>Subscribe to our newsletter</div>
        <div className={styles.rentDetailsParent}>
          <div className={styles.rentDetails}>Rent Details</div>
          <div className={styles.whyChooseUs}>Why Choose Us</div>
          <div className={styles.pune}>Terms and Conditions</div>
          <div className={styles.company}>Company</div>
        </div>
        <div className={styles.inputnormal}>
          <div className={styles.inputnormalChild} />
          <div className={styles.email}>Email</div>
        </div>
        <div className={styles.getDealsAnd}>Get deals and discounts</div>
      </div>
      <div className={styles.navBar}>
        <div className={styles.navBarWrapper}>
          <div className={styles.logo1}>
            <div className={styles.contactUs1}>
              <div className={styles.downloadApp1}>
                <img
                  className={styles.servicesbenefitsChild}
                  alt=""
                  src="/bg@2x.png"
                />
                <div className={styles.buttons1}>
                  <img className={styles.btn1Icon1} alt="" src="/btn-1.svg" />
                  <img className={styles.btn2Icon1} alt="" src="/btn-2.svg" />
                </div>
                <div className={styles.title1}>
                  <div className={styles.withLotsOf1}>
                    Get exclusive access to car rentals with our mobile app.
                    Download now and experience convenience on the go.
                  </div>
                  <b className={styles.downloadOurMobile1}>
                    Download our mobile app ⚡️
                  </b>
                </div>
              </div>
              <img
                className={styles.heroSectionIcon}
                alt=""
                src="/herosection@2x.png"
              />
              <b className={styles.contact}>Contact</b>
              <div className={styles.homeContact}>Home / Contact</div>
              <div className={styles.footer1}>
                <div className={styles.footerItem} />
                <div className={styles.logo2}>
                  <div className={styles.wheelshare1}>
                    <span>Wheel</span>
                    <span className={styles.share}>Share</span>
                  </div>
                  <img className={styles.logoItem} alt="" src="/line-2.svg" />
                </div>
                <div className={styles.yourTrustedTruck1}>
                  Your Trusted Truck Rental Solution
                </div>
                <div className={styles.copyrightTeamInc1}>
                  © Copyright Team Inc.
                </div>
                <div className={styles.infowheelsharecomGroup}>
                  <a
                    className={styles.infowheelsharecom1}
                    href="mailto:info@truckrentify.com"
                    target="_blank"
                  >
                    info@Wheelshare.com
                  </a>
                  <div className={styles.div9}>+91 98765 43210</div>
                  <div className={styles.pune1}>Pune</div>
                  <div className={styles.contactUs2}>Contact Us</div>
                </div>
                <div className={styles.subscribeToOur1}>
                  Subscribe to our newsletter
                </div>
                <div className={styles.rentDetailsGroup}>
                  <div className={styles.rentDetails1}>Rent Details</div>
                  <div className={styles.whyChooseUs1}>Why Choose Us</div>
                  <div className={styles.termsAndConditions1}>
                    Terms and Conditions
                  </div>
                  <div className={styles.contactUs2}>Company</div>
                </div>
                <div className={styles.inputnormal1}>
                  <div className={styles.inputnormalChild} />
                  <div className={styles.email}>Email</div>
                </div>
                <div className={styles.getDealsAnd1}>
                  Get deals and discounts
                </div>
              </div>
              <div className={styles.navBar1}>
                <div className={styles.navBarWrapper}>
                  <div className={styles.logo3}>
                    <div className={styles.wheelshare}>
                      <span>Truck</span>
                      <span className={styles.share}>Rentify</span>
                    </div>
                    <img
                      className={styles.logoInner}
                      alt=""
                      src="/line-2.svg"
                    />
                  </div>
                  <div className={styles.navLinkWrapper}>
                    <div className={styles.navLink}>
                      <div className={styles.aboutUs} onClick={onHomeTextClick}>
                        Home
                      </div>
                      <div
                        className={styles.aboutUs}
                        onClick={onAboutUsTextClick}
                      >
                        About Us
                      </div>
                      <div
                        className={styles.aboutUs}
                        onClick={onVehicleModelsTextClick}
                      >
                        Vehicle Models
                      </div>
                      <div
                        className={styles.aboutUs}
                        onClick={onTestimonialsTextClick}
                      >
                        Testimonials
                      </div>
                      <div className={styles.ourTeam}>Our team</div>
                      <div
                        className={styles.aboutUs}
                        onClick={onContactUsTextClick}
                      >
                        Contact Us
                      </div>
                    </div>
                    <div className={styles.navButtton}>
                      <div className={styles.ourTeam}>Get A Quote</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.component6}>
                <div className={styles.tip}>
                  <div className={styles.needHelpDont}>
                    Ready to start your hassle-free move? Contact truckrentify
                    today for all your truck rental needs. Visit our website or
                    give us a call at [+91 98765 43210]. Our friendly customer
                    service team is always here to assist you.
                  </div>
                  <div className={styles.help}>Help</div>
                </div>
                <div className={styles.contactForm}>
                  <div className={styles.middleFill}>
                    <div className={styles.rectangle} />
                    <div className={styles.signUp}>Send a Message</div>
                  </div>
                  <div className={styles.middleDarkOutline}>
                    <div className={styles.rectangle1} />
                    <div className={styles.yourEmail}>Your email</div>
                  </div>
                  <div className={styles.middleDarkOutline1}>
                    <div className={styles.rectangle1} />
                    <div className={styles.yourEmail}>Your name</div>
                  </div>
                  <div className={styles.middleDarkOutline2}>
                    <div className={styles.rectangle3} />
                    <div className={styles.yourEmail2}>Your message</div>
                  </div>
                </div>
                <div className={styles.title2}>
                  <div className={styles.phone}>
                    <div className={styles.callSalesAt}>
                      Call sales at +91 98765 43210
                    </div>
                    <div className={styles.faPhone}></div>
                  </div>
                  <div className={styles.pleaseSubmitYour}>
                    Please submit your information and a Truckrentify
                    representative will get in touch with you
                  </div>
                  <b className={styles.wedLoveTo}>
                    Need additional information?
                  </b>
                </div>
              </div>
            </div>
            <div className={styles.ssalsf}>
              <span>Wheel</span>
              <span className={styles.share}>Share</span>
            </div>
            <img className={styles.lineIcon} alt="" src="/line-2.svg" />
          </div>
          <div className={styles.navLinkWrapper1}>
            <div className={styles.navButtton1}>
              <div className={styles.ourTeam}>Get A Quote</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.howItsWorks}>
        <div className={styles.howItsWorksChild} />
        <div className={styles.howItWorksParent}>
          <b className={styles.ourServices}>How it works</b>
          <div className={styles.discoverTheSimplicity}>
            Discover the simplicity and reliability of renting our quality
            trucks through our streamlined process. Effortlessly book and
            confirm your selected vehicle online for a smooth and dependable
            experience
          </div>
        </div>
        <div className={styles.rectangleParent12}>
          <div className={styles.frameChild} />
          <div className={styles.chooseTheIdeal}>
            Choose the ideal truck size for your needs and select the rental
            duration that suits your moving plans.
          </div>
          <b className={styles.browseAndSelect}>Browse and select</b>
          <div className={styles.groupChild8} />
          <img className={styles.searchLgIcon} alt="" src="/searchlg.svg" />
        </div>
        <div className={styles.rectangleParent13}>
          <div className={styles.frameChild} />
          <div className={styles.chooseTheIdeal}>
            Easily book your selected truck online through our secure platform,
            ensuring a confirmed reservation.
          </div>
          <b className={styles.browseAndSelect}>Book and confirm</b>
          <div className={styles.groupChild8} />
          <img
            className={styles.searchLgIcon}
            alt=""
            src="/calendarcheck02.svg"
          />
        </div>
        <div className={styles.rectangleParent14}>
          <div className={styles.frameChild} />
          <div className={styles.collectYourRented}>
            Collect your rented truck on the scheduled day from our convenient
            location. Our friendly staff is ready to assist, ensuring a smooth
            and stress-free moving experience.
          </div>
          <b className={styles.enjoyASmooth}>Enjoy a Smooth Move</b>
          <div className={styles.groupChild12} />
          <img className={styles.faceHappyIcon} alt="" src="/facehappy.svg" />
        </div>
        <img className={styles.image277Icon} alt="" src="/image-277@2x.png" />
        <img className={styles.image35Icon} alt="" src="/image-35@2x.png" />
      </div>
      <img
        className={styles.k2Su313601Icon}
        alt=""
        src="/k2-su-3136-0-1@2x.png"
      />
      <img className={styles.image279Icon} alt="" src="/image-279@2x.png" />
    </div>
  );
};

export default Home;
