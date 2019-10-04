import { Device } from "./DeviceSelector";
import { ValidatorEmail, ValidatorPassword } from "./Validators";
let instance: Util;
class Util {
  public Device = Device;
  static getInstance() {
    if (!instance) {
      instance = new Util();
    }
    return instance;
  }

  public formatCurrency(value: number, locale: string = "vi") {
    return value
      .toLocaleString(locale, {
        style: "currency",
        currency: "VND",
        currencyDisplay: "code"
      })
      .replace("VND", "đ");
  }
  public reFormatWeight(value: string): string {
    let newValue = value || "0";
    if (value) {
      const values = newValue.split(".");
      const firstValue = values[0] || 0;
      let secondValue =
        values.length <= 1 ? [] : values[values.length - 1].split("");
      newValue = `${firstValue}.${secondValue[secondValue.length - 1] || 0}`;
    }
    return parseFloat(newValue).toFixed(1);
  }
  public checkStrongPassword(
    value: string = ""
  ): {
    key: string;
    valid: boolean;
    status: string;
  } {
    if (ValidatorPassword.STRONG_PASS_RGX.test(value)) {
      return { key: "password", valid: true, status: "strong" };
    }
    if (ValidatorPassword.MEDIUM_PASS_RGX.test(value)) {
      return { key: "password", valid: true, status: "medium" };
    }
    const valid = ValidatorPassword.WEAK_PASS_RGX.test(value);
    return { key: "password", valid: valid, status: "weak" };
  }
  public isEmail(email: string) {
    return ValidatorEmail.EMAIL_RGX.test(email);
  }
}
export default Util.getInstance();
