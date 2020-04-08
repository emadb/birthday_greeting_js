```                                                               
                                                               
TTTTTTTTTTTTTTTTTTTTTTTDDDDDDDDDDDDD      DDDDDDDDDDDDD        
T:::::::::::::::::::::TD::::::::::::DDD   D::::::::::::DDD     
T:::::::::::::::::::::TD:::::::::::::::DD D:::::::::::::::DD   
T:::::TT:::::::TT:::::TDDD:::::DDDDD:::::DDDD:::::DDDDD:::::D  
TTTTTT  T:::::T  TTTTTT  D:::::D    D:::::D D:::::D    D:::::D 
        T:::::T          D:::::D     D:::::DD:::::D     D:::::D
        T:::::T          D:::::D     D:::::DD:::::D     D:::::D
        T:::::T          D:::::D     D:::::DD:::::D     D:::::D
        T:::::T          D:::::D     D:::::DD:::::D     D:::::D
        T:::::T          D:::::D     D:::::DD:::::D     D:::::D
        T:::::T          D:::::D     D:::::DD:::::D     D:::::D
        T:::::T          D:::::D    D:::::D D:::::D    D:::::D 
      TT:::::::TT      DDD:::::DDDDD:::::DDDD:::::DDDDD:::::D  
      T:::::::::T      D:::::::::::::::DD D:::::::::::::::DD   
      T:::::::::T      D::::::::::::DDD   D::::::::::::DDD     
      TTTTTTTTTTT      DDDDDDDDDDDDD      DDDDDDDDDDDDD        
                                                               
```                                          

                                                               
                                                               
                                                               
                                                            

# Intro
TDD is not about testing. Having tests is a side effects.

## 1) History
Back in 1995 Kent Beck starts to talk about Extreme Programming that includes TDD as part of the process. The (C3 project)[https://en.wikipedia.org/wiki/Chrysler_Comprehensive_Compensation_System] was the first project in which XP was used.

## 2) TDD Basic workflow


```                                                            
                 --> Red -> Green -> Refactor --
                 |                             |
                 |                             |
                 -------------<-----------------

```


## 3) TDD extended workflow

  1. Think about what you want to do
  2. Think about how to test it
  3. Write a small test. Think about the desired API
  4. Write just enough code to fail the test
  5. Run and watch the test fail. (The test-runner, if you're using something like JUnit, shows the "Red Bar"). Now you know that your test is going to be executed
  6. Write just enough code to pass the test (and pass all your previous tests)
  7. Run and watch all of the tests pass. If it doesn't pass, you did something wrong, fix it now since it's got to be something you just wrote.
  8. If you have any duplicate logic, or inexpressive code, refactor to remove duplication and increase expressiveness — this includes reducing coupling and increasing cohesion.
  9. Run the tests again, you should still have the Green Bar. If you get the Red Bar, then you made a mistake in your refactoring. Fix it now and re-run.
  10. Repeat the steps above until you can't find any more tests that drive writing new code.

## 4) Are there any benefits?
 - Developer needs to think before writing a new feature
 - Highly focused on the feature
 - Better control over dependencies
 - Less bugs
 - Less pressure and stress
 - Better design (decoupling and orthoganality)
 - Outside-in approach (interface vs implementation)

## 5) Code