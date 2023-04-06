/* Queues

The queue is another data structure for processing temporary data. The queue, like a line, is based on the First In, First Out principle (FIFO). Queues also have three restrictions:

    1. Data can be inserted only at the end of a queue.
    2. Data can be deleted only from the front of a queue.
    3. Only the element at the front of a queue can be read.

*/

class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
  }