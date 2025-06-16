import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VehicleModels.module.css";

const VehicleModels: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onTestimonialsTextClick = useCallback(() => {
    navigate("/testimonials");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className={styles.vehicleModels}>
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
      <div className={styles.collectionOfTrucks}>
        <div className={styles.collectionOfTrucksChild} />
        <div className={styles.ourImpressiveCollectionOfTParent}>
          <b className={styles.ourImpressiveCollection}>
            Our Impressive Collection of Trucks
          </b>
          <div className={styles.fromRobustUtility}>
            From robust utility trucks to versatile cargo vans, our carefully
            curated selection ensures that our customers experience unmatched
            performance and reliability for all their transportation needs
          </div>
        </div>
        <div className={styles.frameParent}>
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
          <div className={styles.frameGroup}>
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
              <div className={styles.frameContainer}>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.speedometer01Icon}
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
                    className={styles.speedometer01Icon}
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
            <div className={styles.rentNow}>Rent Now</div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" />
          <div className={styles.rectangleDiv} />
          <div className={styles.frameGroup}>
            <div className={styles.locationSolidParent}>
              <img
                className={styles.locationSolidIcon}
                alt=""
                src="/location-solid.svg"
              />
              <div className={styles.losAngeles}>Los Angeles</div>
            </div>
            <div className={styles.tataAceHtMiniParent}>
              <a
                className={styles.mahindraTractor}
                href={`https://media.discordapp.net/attachments/1206115585298010136/1215679255510519818/K2_SU_3140_0.webp?ex=65fda088&is=65eb2b88&hm=75f755a0aae3848679b797266c653bffc293fdc80ea6204682bf9f14efbf5ff9&=&format=webp`}
                target="_blank"
              >
                Mahindra Tractor
              </a>
              <div className={styles.day}>
                <span className={styles.span}>1000</span>
                <span className={styles.day1}>/day</span>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.speedometer01Icon}
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
                    className={styles.speedometer01Icon}
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
            <div className={styles.rentNow}>Rent Now</div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild1} />
          <img className={styles.frameItem} alt="" />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-85@2x.png"
          />
          <div className={styles.frameGroup}>
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
                <span className={styles.day1}>/day</span>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.speedometer01Icon}
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
                    className={styles.speedometer01Icon}
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
            <div className={styles.rentNow}>Rent Now</div>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" />
          <div className={styles.frameGroup}>
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
              <div className={styles.frameContainer}>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.speedometer01Icon}
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
                    className={styles.speedometer01Icon}
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
            <div className={styles.rentNow}>Rent Now</div>
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" />
          <img className={styles.image273Icon} alt="" src="/image-273@2x.png" />
          <div className={styles.frameGroup}>
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
              <div className={styles.frameContainer}>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.speedometer01Icon}
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
                    className={styles.speedometer01Icon}
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
            <div className={styles.rentNow}>Rent Now</div>
          </div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" />
          <img className={styles.image276Icon} alt="" src="/image-276@2x.png" />
          <div className={styles.frameGroup}>
            <div className={styles.locationSolidParent}>
              <img
                className={styles.locationSolidIcon}
                alt=""
                src="/location-solid.svg"
              />
              <div className={styles.losAngeles}>Los Angeles</div>
            </div>
            <div className={styles.tataAceHtMiniParent}>
              <div className={styles.tataAceHt}>Rotavator</div>
              <div className={styles.day}>
                <span className={styles.span}>1000</span>
                <span className={styles.day1}>/day</span>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.speedometer01Parent}>
                  <img
                    className={styles.speedometer01Icon}
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
                    className={styles.speedometer01Icon}
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
            <div className={styles.rentNow}>Rent Now</div>
          </div>
        </div>
        <img className={styles.image278Icon} alt="" src="/image-278@2x.png" />
      </div>
      <img
        className={styles.heroSectionIcon}
        alt=""
        src="/herosection@2x.png"
      />
      <div className={styles.navBar}>
        <div className={styles.navBarWrapper}>
          <div className={styles.logo}>
            <div className={styles.wheelshare}>
              <span>Wheel</span>
              <span className={styles.share}>Share</span>
            </div>
            <img className={styles.logoChild} alt="" src="/line-2.svg" />
          </div>
          <div className={styles.navLinkWrapper}>
            <div className={styles.navLink}>
              <div className={styles.home} onClick={onHomeTextClick}>
                Home
              </div>
              <div className={styles.home} onClick={onAboutUsTextClick}>
                About Us
              </div>
              <div className={styles.ourTeam}>Vehicle Models</div>
              <div className={styles.home} onClick={onTestimonialsTextClick}>
                Testimonials
              </div>
              <div className={styles.ourTeam}>Our team</div>
              <div className={styles.home} onClick={onContactUsTextClick}>
                Contact Us
              </div>
            </div>
            <div className={styles.navButtton}>
              <div className={styles.ourTeam}>Get A Quote</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vehicleModels2}>Vehicle Models</div>
      <div className={styles.homeVehicle}>Home / Vehicle Models</div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.logo1}>
          <div className={styles.wheelshare1}>
            <span>Wheel</span>
            <span className={styles.share}>Share</span>
          </div>
          <img className={styles.logoItem} alt="" src="/line-2.svg" />
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
          <div className={styles.div6}>+91 98765 43210</div>
          <div className={styles.pune}>Pune</div>
          <div className={styles.company}>Contact Us</div>
        </div>
        <div className={styles.subscribeToOur}>Subscribe to our newsletter</div>
        <div className={styles.rentDetailsParent}>
          <div className={styles.rentDetails}>Rent Details</div>
          <div className={styles.whyChooseUs}>Why Choose Us</div>
          <div className={styles.termsAndConditions}>Terms and Conditions</div>
          <div className={styles.company}>Company</div>
        </div>
        <div className={styles.inputnormal}>
          <div className={styles.inputnormalChild} />
          <div className={styles.email}>Email</div>
        </div>
        <div className={styles.getDealsAnd}>Get deals and discounts</div>
      </div>
      <img
        className={styles.k2Su313602Icon}
        alt=""
        src="/k2-su-3136-0-2@2x.png"
      />
    </div>
  );
};

export default VehicleModels;
