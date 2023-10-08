<h1 style='text-align:center'>Object-Oriented Design</h1>

## Fundamental Concepts

An object is defined by two components: attributes and behaviors. Attributes includes data and variables while behavior includes the functions that act on those behaviors. In OO design, these are both contained within a single object, whereas in procedural (structured) programming, these are normally seperated. Once significant advantage of OOP is the ability to hide (restrict access to) an objects attributes and methods from other objects (called Data Hiding). By combining these attributes and methods in the same entity (known as Encapsulation), we can control access to the data.

```Encapsulation``` - 
```Inheritance``` - 
```Polymorphism``` - 
```Abstraction``` - 
```Composition``` - 

## Advantages of OOP

* The data and operations that manipulate that data are encapsulated and get transported together (e.g. accross a network). 

## Classes

Classes are blueprints for an object. When you initiate an object, you use a class as the blueprint for how it is built. 

    class Car {
        constructor(name, year) {
            this.name = name;                       // attribute
            this.year = year;                       // attribute
        }
        getName() {
            return this.name;                       // behavior
        }
    }