/**
 * @constructor
 */
const Queue = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function () {
  this.stack.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function () {
  return this.stack[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function () {
  return this.stack.length === 0;
};

const q = new Queue();
q.push(1);
q.push(2);
// console.log(q.pop());
// console.log(q.empty());
console.log(q.peek());
