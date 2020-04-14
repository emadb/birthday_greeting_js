class Employee {
  constructor(lastName, firstName, dateOfBirth, email) {
    this.lastName = lastName
    this.firstName = firstName
    this.dateOfBirth = dateOfBirth
    this.email = email
  }

  isBirthday(date) {
    return date.getMonth() === this.dateOfBirth.getMonth() && date.getDate() === this.dateOfBirth.getDate()
  }
}

module.exports = Employee