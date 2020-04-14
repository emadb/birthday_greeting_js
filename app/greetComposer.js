class GreetComposer {
  constructor(smtp){
    this.smtp = smtp
  }

  send(employee) {
    const body = `Happy birthday, dear ${employee.firstName}!`
    this.smtp.send(employee.email, 'Happy birthday!', body)
  }
}

module.exports = GreetComposer