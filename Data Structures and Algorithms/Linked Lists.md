## Introduction

Linked lists function very similarly to arrays. The benefits of a linked list (over an array), is that elements can easily be inserted and removed without reallocation of any other elements (as compared to an array). Generally, since Javascript arrays are not limited to a certain size, linked lists are not really necessary.

## Resources

1. [The Odin Project](https://www.theodinproject.com/lessons/javascript-linked-lists)
2. [What's A Linked List](https://dev.to/vaidehijoshi/whats-a-linked-list-anyway)

## Structure of a Linked List

A linked list is a linear collection of data elements called nodes. The nodes point to the next node with a pointer. Each node holds a single element of data and a link (pointer) to the next node in the list. A head is the first node in the list. A tail node is the last node.

    [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

<img src="images/parts_of_linked_list.jpeg">

## Memory Management

The biggest difference between a linked list and array is the way memory is used. With arrays, memory would need to be in one, contiguous block. Linked lists, however, does not need all the memory locations to be in one place. 

<img src="images/memory_management.jpeg">