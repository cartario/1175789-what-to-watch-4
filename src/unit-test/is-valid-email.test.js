import isValidEmail from "./is-valid-email.js";

describe(`isValidEmail`, () => {
  it(`should my email`, () => {
    expect(isValidEmail(`cartario@yandex.ru`)).toBe(true);
  });

  it(`should my email`, () => {
    expect(isValidEmail(`@yandex.ru`)).toBe(false);
  });

  it(`should my email`, () => {
    expect(isValidEmail(``)).toBe(false);
  });

});
