import styles from './IdCard.module.css'
import Barcode from 'react-barcode'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useRef } from 'react'
import logo from '../assets/Logo.png'
import bldpng from '../assets/blood.png'
import homepng from '../assets/house.png'
import clgpng from '../assets/college.png'
import signpng from '../assets/sign.png'

function IdCard({data, setShowCard, setLoading}) {
    
    const cardRef = useRef(null)

    const handleDownload = async () => {
    setLoading(true);
    const input = cardRef.current
    if (!input) return

    const canvas = await html2canvas(input, { scale: 2 })
    const imgData = canvas.toDataURL("image/png")

    const pdfWidth = 882 * 0.264583
    const pdfHeight = 1354 * 0.264583

    const pdf = new jsPDF("p", "mm", [pdfWidth, pdfHeight])
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
    
    setTimeout(() => {
        pdf.save(`${data.fname}_IdCard.pdf`)
        setLoading(false)
    }, 1000)
    }
    return (
        <div className={styles["flex-box"]}>
            <div ref={cardRef} className={styles["id-card-main-box"]}>
                <div className={styles["clg-address"]}>
                    <div>
                        <img src={logo} alt="college logo" />
                        <h1>VSB</h1>
                    </div>
                    <h3>College of Engineering</h3>
                    <h3>Technical Campus</h3>
                    <p>Ealur Pirivu, Solavampalayam (PO),</p>
                    <p>Kinathukadavu, Coimbatore - 642109</p>
                    <p>Phone - +91 8220048212, +91 8220555783</p>
                </div>
                <div className={styles["ribbon-year"]}>
                    IDENTITY CARD {data.enrolledYear} - { parseInt(data.enrolledYear) + 4 }
                </div>
                <div className={styles["center-box"]}>
                    <div className={styles["dob-bld"]}>
                        <div className={styles["dob"]}>
                            <h1>D.O.B</h1>
                            <p>{data.dob}</p>
                        </div>
                        <div className={styles["blood"]}>
                            <img src={bldpng} alt="blood picture" />
                            <h1>{data.bloodGroup}</h1>
                        </div>
                    </div>
                    <div className={styles["photo-box"]}>
                        {data.photo&&<img src={URL.createObjectURL(data.photo)} alt="student photo" />}
                    </div>
                    <div className={styles["bar-code"]}>
                        <div className={styles["bar"]}>
                            <Barcode value={data.rollNo} displayValue={true} height={100} width={3} font='Arial'/>
                        </div>
                    </div>
                </div>
                <div className={styles["details-box"]}>
                    <h1 className={styles.sname}>{data.fname}</h1>
                    <h1 className={styles.dept}>{data.department}</h1>
                    <h1 className={styles.roll}>Roll No : {data.rollNo}</h1>
                </div>
                <div className={styles["address-box"]}>
                    <div className={styles["home-icon"]}>
                        <img src={homepng} alt="Home" />
                    </div>
                    <div className={styles["address"]}>
                        <div className={styles["actual-add"]}>
                            <h4>{data.relation} {data.fatherName}, <br /> {data.address}</h4>
                        </div>
                        <h3>PH - {data.mobile}, {data.altMobile}</h3>
                        <div className={styles["contact"]}>
                            <h4>
                                Anti-Ragging Website : www.antiragging.in <br />
                                Toll Free Complaint No : ( 1800-180-5522 ) <br />
                                WWW.VSBCETC.COM
                            </h4>
                        </div>
                    </div>
                    <div className={styles["sign-box"]}>
                        <img src={clgpng} alt="college" />
                        <img id={styles["signature"]} src={signpng} alt="principal" />
                        <h4>Principal</h4>
                    </div>
                </div>
            </div>
            <div className={styles["buttons"]}>
                <div>
                    <button onClick={handleDownload}>Download</button>
                </div>
                <div>
                    <button onClick={() => setShowCard(false)}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default IdCard