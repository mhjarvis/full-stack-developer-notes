<h1 style='text-align:center'>Object-Oriented Design</h1>

## Fundamental Concepts

An object is defined by two components: attributes and behaviors. Attributes includes data and variables while behavior includes the functions that act on those behaviors. In OO design, these are both contained within a single object, whereas in procedural (structured) programming, these are normally seperated. Once significant advantage of OOP is the ability to hide (restrict access to) an objects attributes and methods from other objects (called Data Hiding). By combining these attributes and methods in the same entity (known as Encapsulation), we can control access to the data.

```Encapsulation``` - attributes and behaviors are included inside an object and only limited information is exposed. In good OO design, an object should reveal (through public methods) only the interfaces that other objects must have to interact with it. This increases security and reduces risk of data corruption (you can't break what you can't access).

```Inheritance``` - enables a class to inherit the attributes and methods of another class. This allows you to reuse code when possible and reduce its redundancy. In JavaScript, this is achieved partially via ```prototype```.

```Polymorphism``` - enables different types of objects to pass through the same interface. Objects can be designed to share behaviours and they can take on more than one form.

```Abstraction``` - objects reveal only those internal mechanisms that are necessary to the use of other objects. You hide the background details as to how a function works or its implementation. Think of a gas pedal - it increases speed - you do not need to know about combustion and gas flow to accelerate a car.

## Advantages of OOP

* The data and operations that manipulate that data are encapsulated and get transported together (e.g. accross a network). 
* Encapsulation makes it so an object does not need to reveal all of its attributes and behaviors; this prevents developers for breaking things they need not have access to. 
* The ability to break a program into bite-sized problems that can be solved easily.

## Classes

Classes are blueprints for an object. When you initiate an object, you use a class as the blueprint for how it is built (and instance). 

    class Car {
        constructor(brand) {
            this.carname = brand;                       // attribute
        }
        getName() {
            return this.carname;                       // behavior (public method)
        }
    }

    class Model extends Car {                         // inheritance
        constructor (brand, mod) {
            super(brand);                             // super refers to parent class
            this.model = mod;
        }
    }

## Prototypal Inheritance

Every object in JavaScript has an internal property called ```[[Prototype]]```; it creates a way for two or more objects to be linked. When you attempt to access a property or method on an object, JavaScript will first search the object itself. After it is not found, it will work up the ```prototype``` chain until the end is reached (```Object.prototype```). All objects inherit the properties/methods of ```Object``` (```Object```'s prototype is set to null). 

This is evident when using an array. The ```push()``` method, for example, is available because when creating an array, the created array inherits these methods from its prototype - ```Array.prototype```. Everything from this prototype is thus inherited.

    Object.getPrototypeOf()
    Object.setPrototypeOf()
    Object.create(obj)             // set the prototype of the object

## Constructor Functions

A constructor is a function used to create an object. The constructor is called when the ```new``` word is used during object creation. Constructors are considered entry points in a class, and are good places to perform initializations and start-up tasks. 

If a class is created that does not include a constructor, a default constructor is provided. One constructor always exists. If no constructor is provided, the default constructor will call the constructor of is 'superclass'. Generally, you should always provide a constructor, even if it contains nothing. Not doing so could cause an issue if you later add a constructor but have been relying on the default constructor the whole time. Its always good to know what is in an object.

