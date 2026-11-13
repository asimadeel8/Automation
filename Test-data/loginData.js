
const loginData = {
    validEmail: "teacher@riphah.test",
    validPassword: "Muallim@123",

    invalidEmail: "Wrong@riphah.test",
    invalidPassword: "123456"
};

// Multiple test datasets
const invalidLoginCases = [
    {
        testName: "Invalid email",
        email: "Wrong@riphah.test",
        password: "Muallim@123"
    },
    {
        testName: "Invalid password",
        email: "teacher@riphah.test",
        password: "123456"
    }
];

module.exports = { loginData, invalidLoginCases };