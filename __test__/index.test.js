const fs = require('fs')
const EmployeeCsvReader = require('../app/employeeCsvReader')
const Employee = require('../app/employee')
const GreetComposer = require('../app/greetComposer')
const Program = require('../app/program')

describe('Birthday greeting', () => {
 
  test('should be true', () => {
   expect(true).toBe(true)
  })
  
  test("read an empty file should return an empty list", () => {

    const fsStub = {
      readFileSync: (path, encoding) => {
        return 'last_name, first_name, date_of_birth, email'
      }
    }

    const employeeCsvReader = new EmployeeCsvReader(fsStub)
    const employees = employeeCsvReader.read('./file.path.csv')

    expect(employees).toEqual([])

  })

  test("read a file with one Employess should return an list with one item", () => {

    const fsStub = {
      readFileSync: (path, encoding) => {
        return 'last_name, first_name, date_of_birth, email\nDoe, John, 1982-10-08, john.doe@foobar.com'
      }
     }

    const employeeCsvReader = new EmployeeCsvReader(fsStub)
    const employees = employeeCsvReader.read('./file.path.csv')

    expect(employees.length).toEqual(1)
    expect(employees[0].firstName).toBe('John')
    expect(employees[0].lastName).toBe('Doe')
    expect(employees[0].dateOfBirth).toMatchObject(new Date('1982-10-08'))
    expect(employees[0].email).toBe('john.doe@foobar.com')

  })

  test("read a file with one Employess should return an list with one item", () => {

    const fsStub = {
      readFileSync: (path, encoding) => {
        return 'last_name, first_name, date_of_birth, email\nDoe, John, 1982-10-08, john.doe@foobar.com\nAnn, Mary, 1975-09-11, mary.ann@foobar.com'
      }
    }

    const employeeCsvReader = new EmployeeCsvReader(fsStub)
    const employees = employeeCsvReader.read('./file.path.csv')

    expect(employees.length).toEqual(2)

  })

  test("read a file with one Employess should return an list with one item", () => {

    let isCalled = false

    // mock or spy
    const fsMock = {
      readFileSync: (path, encoding) => {
        isCalled = path === './file.path.csv' && encoding === 'UTF-8'
        return 'last_name, first_name, date_of_birth, email\nDoe, John, 1982-10-08, john.doe@foobar.com'
      }
    }

    const employeeCsvReader = new EmployeeCsvReader(fsMock)
    employeeCsvReader.read('./file.path.csv')

    expect(isCalled).toBe(true)

  })


  test('Is birthday should return true', () => {
    const e = new Employee('test', 'test', new Date('1973-04-09'), 'emanuele@codiceplastico.com')
    const result = e.isBirthday(new Date('2020-04-09'))
    expect(result).toBe(true)
  })

  test('Is birthday should return false', () => {
    const e = new Employee('test', 'test', new Date('1973-04-11'), 'emanuele@codiceplastico.com')
    const result = e.isBirthday(new Date('2020-04-09'))
    expect(result).toBe(false)
  })

  test('should send an email', () => {

    let isCalled = false
    
    const smtpClient = {
      send(to, subject, body) {

        isCalled = to === 'emanuele@codiceplastico.com' &&
          subject === 'Happy birthday!' &&
          body === 'Happy birthday, dear Emanuele!'

        return true
      }
    }

    const greetComposer = new GreetComposer(smtpClient)
    const e = new Employee('DelBono', 'Emanuele', new Date('1973-04-11'), 'emanuele@codiceplastico.com')
    // greetComposer.send(e.firstName, e.email)
    greetComposer.send(e)
    expect(isCalled).toBe(true)

  })

  test('acceptance test', () => {

    let calledCount = 0
    const smtpClient = {
      send(to, subject, body) {

        calledCount++ 

        return true
      }
    }

    const program = new Program(new EmployeeCsvReader(fs), new GreetComposer(smtpClient))
    program.run(new Date('2020-10-08'), './data.csv')

    expect(calledCount).toBe(1)

  })

})