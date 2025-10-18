import React,{useState, useRef} from 'react'
import styles from './InputForm.module.css'

function InputForm({formData, setFormData, setShowCard, setLoading}) {

    const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
        setFormData({ ...formData, [name]: files[0] });
    }
    else {
        setFormData({ ...formData, [name]: value });
    }
    };

    const ResetForm = () => {
        setFormData({
        fname: "",
        rollNo: "",
        dob: "",
        bloodGroup: "",
        department: "B.E.AGRI",
        enrolledYear: "",
        relation: "S/O",
        fatherName: "",
        address: "",
        mobile: "",
        altMobile: "",
        photo: null,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setShowCard(true);
            setLoading(false);
        }, 1500);
    };

    return (
        <>
        <h1>IDENTITY CARD GENERATOR</h1>
        <form className={styles["form-box"]} onSubmit={handleSubmit}>
                <div className={styles["pto"]}>
                    <label htmlFor="photo">
                        Photo:
                    </label>
                    <div className={styles["preview-box"]}>
                    <img
                    src={
                        formData.photo
                        ? URL.createObjectURL(formData.photo)
                        : null
                    }
                    alt="No photo selected"
                    className={styles["preview-img"]}
                    />
                    </div >
                    <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={handleChange}
                    required
                    />
                </div>
            <div className={styles["flex-box"]}>
                
                <div className={styles["yr"]}>
                    <label>
                    Enrolled Year:
                    </label>
                    <br />
                    <input
                    type="number"
                    name="enrolledYear"
                    placeholder="e.g. 2022"
                    value={formData.enrolledYear}
                    onChange={handleChange}
                    required
                    />
                </div>
                
                <div className={styles["name-field"]}>
                    <label htmlFor="fname">Name</label>
                    <br />
                    <input
                    type="text"
                    name="fname"
                    placeholder="Full Name"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className={styles["dept"]}>
                    <label htmlFor="department">
                        Department
                    </label>
                    <br />
                    <select name="department" value={formData.department} onChange={handleChange}>
                        <option value="B.E.AGRI">B.E.AGRI</option>
                        <option value="B.E.AGRI A">B.E.AGRI A</option>
                        <option value="B.E.AGRI B">B.E.AGRI B</option>
                        <option value="B.E.AGRI C">B.E.AGRI C</option>
                        <option value="B.E.AGRI D">B.E.AGRI D</option>
                        <option value="B.E.AGRI E">B.E.AGRI E</option>
                        <option value="B.E.AGRI F">B.E.AGRI F</option>
                        <option value="B.E.CIVIL">B.E.CIVIL</option>
                        <option value="B.E.CIVIL A">B.E.CIVIL A</option>
                        <option value="B.E.CIVIL B">B.E.CIVIL B</option>
                        <option value="B.E.CIVIL C">B.E.CIVIL C</option>
                        <option value="B.E.CIVIL D">B.E.CIVIL D</option>
                        <option value="B.E.CIVIL E">B.E.CIVIL E</option>
                        <option value="B.E.CIVIL F">B.E.CIVIL F</option>
                        <option value="B.E.CSE">B.E.CSE</option>
                        <option value="B.E.CSE A">B.E.CSE A</option>
                        <option value="B.E.CSE B">B.E.CSE B</option>
                        <option value="B.E.CSE C">B.E.CSE C</option>
                        <option value="B.E.CSE D">B.E.CSE D</option>
                        <option value="B.E.CSE E">B.E.CSE E</option>
                        <option value="B.E.CSE F">B.E.CSE F</option>
                        <option value="B.E.ECE">B.E.ECE</option>
                        <option value="B.E.ECE A">B.E.ECE A</option>
                        <option value="B.E.ECE B">B.E.ECE B</ option>
                        <option value="B.E.ECE C">B.E.ECE C</option>
                        <option value="B.E.ECE D">B.E.ECE D</option>
                        <option value="B.E.ECE E">B.E.ECE E</option>
                        <option value="B.E.ECE F">B.E.ECE F</option>
                        <option value="B.E.EEE">B.E.EEE</option>
                        <option value="B.E.EEE A">B.E.EEE A</option>
                        <option value="B.E.EEE B">B.E.EEE B</option>
                        <option value="B.E.EEE C">B.E.EEE C</option>
                        <option value="B.E.EEE D">B.E.EEE D</option>
                        <option value="B.E.EEE E">B.E.EEE E</option>
                        <option value="B.E.EEE F">B.E.EEE F</option>
                        <option value="B.E.MECH">B.E.MECH</option>
                        <option value="B.E.MECH A">B.E.MECH A</option>
                        <option value="B.E.MECH B">B.E.MECH B</option>
                        <option value="B.E.MECH C">B.E.MECH C</option>
                        <option value="B.E.MECH D">B.E.MECH D</option>
                        <option value="B.E.MECH E">B.E.MECH E</option>
                        <option value="B.E.MECH F">B.E.MECH F</option>
                        <option value="B.Tech.IT">B.Tech.IT</option>
                        <option value="B.Tech.IT A">B.Tech.IT A</option>
                        <option value="B.Tech.IT B">B.Tech.IT B</option>
                        <option value="B.Tech.IT C">B.Tech.IT C</option>
                        <option value="B.Tech.IT D">B.Tech.IT D</option>
                        <option value="B.Tech.IT E">B.Tech.IT E</option>
                        <option value="B.Tech.IT F">B.Tech.IT F</option>
                        <option value="B.Tech.AI&ML">B.Tech.AI&ML</option>
                        <option value="B.Tech.AI&ML A">B.Tech.AI&ML A</option>
                        <option value="B.Tech.AI&ML B">B.Tech.AI&ML B</option>
                        <option value="B.Tech.AI&ML C">B.Tech.AI&ML C</option>
                        <option value="B.Tech.AI&ML D">B.Tech.AI&ML D</option>
                        <option value="B.Tech.AI&ML E">B.Tech.AI&ML E</option>
                        <option value="B.Tech.AI&ML F">B.Tech.AI&ML F</option>
                        <option value="B.Tech.AI&DS">B.Tech.AI&DS</option>
                        <option value="B.Tech.AI&DS A">B.Tech.AI&DS A</option>
                        <option value="B.Tech.AI&DS B">B.Tech.AI&DS B</option>
                        <option value="B.Tech.AI&DS C">B.Tech.AI&DS C</option>
                        <option value="B.Tech.AI&DS D">B.Tech.AI&DS D</option>
                        <option value="B.Tech.AI&DS E">B.Tech.AI&DS E</option>
                        <option value="B.Tech.AI&DS F">B.Tech.AI&DS F</option>
                    </select>
                </div>

                <div className={styles["roll-no"]}>
                    <label htmlFor="rollNo">Roll Number</label>
                    <br />
                    <input
                    type="text"
                    name="rollNo"
                    placeholder="Roll Number"
                    value={formData.rollNo}
                    onChange={handleChange}
                    required
                    />
                </div>
                
                <div className={styles["dob"]}>
                    <label>
                    Date of Birth:
                    </label>
                    <br />
                    <input
                    type="text"
                    name="dob"
                    placeholder="dd.mm.yyyy"
                    pattern="^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$" 
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    />
                </div>
                
                <div className={styles["bld"]}>
                    <label htmlFor="bloodGroup">Blood Group</label>
                    <br />
                    <input
                    type="text"
                    name="bloodGroup"
                    placeholder="e.g. O+"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    required
                    />
                </div>
                

                <div className={styles["parent"]}>
                    <label htmlFor="relation">Relation & Parent Name </label>
                    <br />
                    <select name="relation" value={formData.relation} onChange={handleChange}>
                        <option value="S/O">S/O</option>
                        <option value="D/O">D/O</option>
                    </select>
                    <input
                    type="text"
                    name="fatherName"
                    placeholder="Parent/Guardian"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className={styles["addrs"]}>
                    <label htmlFor="address">Address</label>
                    <br />
                    <textarea
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    required
                    />
                </div>
                
                <div className={styles["contact"]}>
                    <label htmlFor="mobile">Your Mobile Number</label>
                    <br />
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <label htmlFor="altMobile">Parent Mobile Number</label>
                    <br />
                    <input
                        type="tel"
                        name="altMobile"
                        placeholder="Parent Mobile Number"
                        value={formData.altMobile}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            
            
            <div className={styles["btn"]}>
                <button type="submit">
                    Generate
                </button>
                <button onClick={ResetForm} type="reset">
                    Clear
                </button>
            </div>
            
        </form>
    </>
    );
}

export default InputForm