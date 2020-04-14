class Program{
  constructor(reader, greetComposer){
    this.reader = reader
    this.greetComposer = greetComposer
  }

  run(date, path) {
    const employees = this.reader.read(path)
    employees.map(e => {
      if (e.isBirthday(date)) {
        this.greetComposer.send(e)
      }
    })
  }
}


 module.exports = Program    