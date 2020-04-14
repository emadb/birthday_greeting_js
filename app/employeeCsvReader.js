const Employee = require('./employee')

class EmployeeCsvReader {

  constructor(fs) {
    this.fs = fs
  }

  read(path) {
    const content = this.fs.readFileSync(path, 'UTF-8')

    return content
      .split('\n')
      .slice(1)
      .map(l => {
        const columns = l.split(',').map(c => c.trim())
        return new Employee(columns[0], columns[1], new Date(columns[2]), columns[3])
      })
  }
}

module.exports = EmployeeCsvReader