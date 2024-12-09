import React, { useState } from "react";
import "./image.css";

export default function Page() {
    const [formData, setFormData] = useState({
        firstName: "Mark",
        lastName: "Otto",
        username: "",
        city: "",
        state: "",
        zip: "",
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <form className="needs-validation" noValidate>
                <div className="form-row">
                    <div className="col-md-4 mb-3"><br />
                        <label htmlFor="validationCustom01">First name</label><br />
                        <input
                            type="text"
                            className="form-control lable"
                            id="validationCustom01"
                            placeholder="First name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <div className="valid-feedback">Looks good!</div>
                    </div>
                    <br />
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationCustom02">Last name</label>
                        <input
                            type="text"
                            className="form-control lable"
                            id="validationCustom02"
                            placeholder="Last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                        <div className="valid-feedback">Looks good!</div>
                    </div>
                </div>
                <br />
                {/* Continue similar updates for other fields */}
                <button className="btn btn-primary button" type="submit">
                    Submit form
                </button>
            </form>
        </div>
    );
}
