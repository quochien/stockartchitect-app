import { find, orderBy } from "lodash";
import FlagResource from "../../Config/resources/index";

let instance: any = null;

class Country {
    countryCodes: any = [];
    countriesData = null;
    countries: any = null;
    static getInstance() {
        if (!instance) {
            instance = new Country();
        }
        return instance;
    }

    constructor() {
        this.countryCodes = [];
        this.countriesData = null;
    }

    setCustomCountriesData(json) {
        this.countriesData = json;
    }

    addCountryCode(iso2, dialCode, priority) {
        if (!(dialCode in this.countryCodes)) {
            this.countryCodes[dialCode] = [];
        }

        const index = priority || 0;
        this.countryCodes[dialCode][index] = iso2;
    }

    getAll() {
        if (!this.countries) {
            // console.log(require("../../Config/country.json"));
            this.countries = orderBy(this.countriesData || require("../../Config/country.json"), ["name"], ["asc"]);
        }
        return this.countries;
    }

    getCountryCodes() {
        if (!this.countryCodes.length) {
            this.getAll().map(country => {
                this.addCountryCode(country.iso2, country.dialCode, country.priority);
                if (country.areaCodes) {
                    country.areaCodes.map(areaCode => {
                        this.addCountryCode(country.iso2, country.dialCode + areaCode, "");
                    });
                }
            });
        }
        return this.countryCodes;
    }

    getCountryDataByCode(iso2) {
        const data = find(this.getAll(), country => country.iso2 === iso2);

        return { ...data, flag: FlagResource.get(data.iso2) };
    }
}

export default Country.getInstance();
