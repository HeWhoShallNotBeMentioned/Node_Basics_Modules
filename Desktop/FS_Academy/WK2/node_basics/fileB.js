let number = 5;

module.exports = () => {
  console.log(number);
};

module.exports.foo = 'hello world';
module.exports.bar = 'goodbye world';

console.log('fileB is being run');
