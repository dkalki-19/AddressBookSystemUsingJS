// UC2 – Validate All Fields
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {

        const NAME_REGEX = /^[A-Z][a-zA-Z]{2,}$/;
        const ADDRESS_REGEX = /^[A-Za-z0-9\s]{4,}$/;
        const ZIP_REGEX = /^[1-9][0-9]{5}$/;
        const PHONE_REGEX = /^[6-9][0-9]{9}$/;
        const EMAIL_REGEX = /^[a-zA-Z0-9]+([._+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

        if (!NAME_REGEX.test(firstName)) throw "Invalid First Name!";
        if (!NAME_REGEX.test(lastName)) throw "Invalid Last Name!";
        if (!ADDRESS_REGEX.test(address)) throw "Invalid Address!";
        if (!ADDRESS_REGEX.test(city)) throw "Invalid City!";
        if (!ADDRESS_REGEX.test(state)) throw "Invalid State!";
        if (!ZIP_REGEX.test(zip)) throw "Invalid ZIP Code!";
        if (!PHONE_REGEX.test(phone)) throw "Invalid Phone!";
        if (!EMAIL_REGEX.test(email)) throw "Invalid Email!";

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    toString() {
        return `Contact -> 
        ${this.firstName} ${this.lastName},
        ${this.address}, ${this.city}, ${this.state} - ${this.zip},
        Phone: ${this.phone}, Email: ${this.email}`;
    }
}
