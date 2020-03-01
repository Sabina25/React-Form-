import React from 'react';
import './FormComponent.css';

export default function FormComponent (props) {
    return(
        <div>
            <form>
                <input 
                    className="input-text"
                    type="text"
                    name="firstName"
                    value={props.data.firstName}
                    placeholder="First Name"
                    onChange={props.handleChange}
                />
                <input 
                    className="input-text"
                    type="text"
                    name="lastName"
                    value={props.data.lastName}
                    placeholder="Last Name"
                    onChange={props.handleChange}
                />

                <input 
                    className="input-text"
                    type="number"
                    name="age"
                    value={props.data.age}
                    placeholder="Age"
                    onChange={props.handleChange}
                />
                <section className="gender">
                    <label> Gender: 
                        <label> 
                            <input 
                                type="radio"
                                name="gender"
                                value="male"
                                checked={props.data.gender === "male"}
                                onChange={props.handleChange}
                            /> Male
                        </label>
                        <label> 
                            <input 
                                type="radio"
                                name="gender"
                                value="female"
                                checked={props.data.gender === "female"}
                                onChange={props.handleChange}
                            /> Female
                        </label>
                    </label>
                </section>

                <select value={props.data.country} 
                        onChange={props.handleChange}
                        name="country"
                        className="country">
                    <option value="Choose a country">Choose a country</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="Great Britain">Great Britain</option>
                    <option value="USA">USA</option>
                    <option value="Italy">Italy</option>
                </select>
                
                <section className="preferences">
                    <label>
                        <input 
                            type="checkbox"
                            name="isVeget"
                            checked={props.data.isVeget}
                            onChange={props.handleChange}
                        /> Vegetarian
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="isKosher"
                            checked={props.data.isKosher}
                            onChange={props.handleChange}
                        /> Kosher
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="isLactoseFree"
                            checked={props.data.isLactoseFree}
                            onChange={props.handleChange}
                        /> Lactose free
                    </label>
                </section>
                
                <section></section>

                <section>
                    <button>Submit</button>
                </section>
            </form>


            <section className="form-inform"> 
                <p>Name: <strong>{props.data.firstName} {props.data.lastName}</strong></p>
                <p>Age: <strong>{props.data.age}</strong></p>
                <p>Gender: <strong>{props.data.gender}</strong></p>
                <p>Country: <strong>{props.data.country ==="Choose a country" ? null: props.data.country}</strong></p>
                <p>Preferences: <strong>{props.data.isKosher ? "Kosher " : null} 
                                {props.data.isLactoseFree ? "Lactose Free " : null}
                                {props.data.isVeget ? "Vegan " : null}</strong>
                                </p>
            </section>
            
        </div>
    )
}